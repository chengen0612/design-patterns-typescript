interface PlayerState {
  handle(player: MusicPlayer): void;
}

class PlayingState implements PlayerState {
  handle(player: MusicPlayer) {
    player.setState(new PausedState());
    console.log("Music is now Paused.");
  }
}

class PausedState implements PlayerState {
  handle(player: MusicPlayer) {
    player.setState(new PlayingState());
    console.log("Music is now Playing.");
  }
}

class MusicPlayer {
  private currentState: PlayerState;

  constructor() {
    this.currentState = new PausedState();
  }

  setState(state: PlayerState) {
    this.currentState = state;
  }

  pressPlayPause() {
    this.currentState.handle(this);
  }
}

class Demo {
  static run() {
    const player = new MusicPlayer();

    player.pressPlayPause();
    player.pressPlayPause();
    player.pressPlayPause();
  }
}

export default Demo;
