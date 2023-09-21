"use strict";
class AudioPlayer {
    play() {
        console.log("Đang phát Audio ...");
    }
}
class VideoPlayer {
    play() {
        console.log("Đang phát Video ...");
    }
}
class Main {
    main() {
        const audioPlayer = new AudioPlayer();
        const videoPlayer = new VideoPlayer();
        audioPlayer.play();
        videoPlayer.play();
    }
}
