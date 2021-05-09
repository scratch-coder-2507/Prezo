import React from 'react'
import AgoraRTC from "agora-rtc-sdk"

var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStream: [],
    param: {}
};

var option = {
    appID: "febcf962ded847879ee912abf0a0aacc",
    channel: "fleek",
    uid: null,
    token: "006febcf962ded847879ee912abf0a0aaccIAB9/+w41K4x0zCOFN4JR0WcaqNirqeMPyEbpls2tmVQTbITVi0AAAAAEAAWDnyjSf00YAEAAQBJ/TRg",
    key: '860e4cc6efd24c29b51d5079ea2c4d1b',
    secret: '17f5f3589684432689d21d32458cdbca',
};

function joinChannel(role) {
    // Create a client
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    // Initialize the client
    rtc.client.init(option.appID, function () {
        console.log("init success");

        // Join a channel
        rtc.client.join(option.token ?
            option.token : null,
            option.channel, option.uid ? +option.uid : null, function (uid) {
                console.log("join channel: " + option.channel + " success, uid: " + uid);
                rtc.params.uid = uid;
                if (role === "host") {
                    rtc.client.setClientRole("host");
                    // Create a local stream
                    rtc.localStream = AgoraRTC.createStream({
                        streamID: rtc.params.uid,
                        audio: true,
                        video: true,

                    })

                    // Initialize the local stream
                    rtc.localStream.init(function () {
                        console.log("init local stream success");
                        rtc.localStream.play("local_stream");
                        rtc.client.publish(rtc.localStream, function (err) {
                            console.log("publish failed");
                            console.error(err);
                        })
                    }, function (err) {
                        console.error("init local stream failed ", err);
                    });

                    rtc.client.on("connection-state-change", function (evt) {
                        console.log("audience", evt)
                    })


                }
                if (role === "audience") {
                    rtc.client.on("connection-state-change", function (evt) {
                        console.log("audience", evt)
                    })

                    rtc.client.on("stream-added", function (evt) {
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        if (id !== rtc.params.uid) {
                            rtc.client.subscribe(remoteStream, function (err) {
                                console.log("stream subscribe failed", err);
                            })
                        }
                        console.log('stream-added remote-uid: ', id);
                    });

                    rtc.client.on("stream-removed", function (evt) {
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        console.log('stream-removed remote-uid: ', id);
                    });

                    rtc.client.on("stream-subscribed", function (evt) {
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        remoteStream.play("remote_video_");
                        console.log('stream-subscribed remote-uid: ', id);
                    })

                    rtc.client.on("stream-unsubscribed", function (evt) {
                        var remoteStream = evt.stream;
                        var id = remoteStream.getId();
                        remoteStream.pause("remote_video_");
                        console.log('stream-unsubscribed remote-uid: ', id);
                    })
                }
            }, function (err) {
                console.error("client join failed", err)
            })

    }, (err) => {
        console.error(err);
    });
}

function leaveEventHost(params) {
    rtc.client.unpublish(rtc.localStream, function (err) {
        console.log("publish failed");
        console.error(err);
    })
    rtc.client.leave(function (ev) {
        console.log(ev)
    })
}

function leaveEventAudience(params) {
    rtc.client.leave(function () {
        console.log("client leaves channel");
        //……
    }, function (err) {
        console.log("client leave failed ", err);
        //error handling
    })
}


function Agora(props) {
    return (
        <div>
            <button onClick={() => joinChannel('host')}>Join Channel as Host</button>
            <button onClick={() => joinChannel('audience')}>Join Channel as Audience</button>
            <button onClick={() => leaveEventHost('host')}>Leave Event Host</button>
            <button onClick={() => leaveEventAudience('audience')}>Leave Event Audience</button>
            <div id="local_stream" className="local_stream" style={{ width: "400px", height: "400px" }}></div>
            <div
                id="remote_video_"
                style={{ width: "400px", height: "400px" }}
            />
        </div>
    );
}

export default Agora;
