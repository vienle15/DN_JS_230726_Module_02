interface Playable {
  play(): void;
}

class AudioPlayer implements Playable {
  play(): void {
    console.log("Đang phát Audio ...");
  }
}

class VideoPlayer implements Playable {
  play(): void {
    console.log("Đang phát Video ...");
  }
}
