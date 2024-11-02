interface Iterator<T = unknown> {
  next(): T | undefined;
  hasNext(): boolean;
}

interface Iterable {
  createIterator(): Iterator;
}

interface Track {
  name: string;
  artistName: string;
}

class AppleMusicTrack implements Track {
  constructor(public name: string, public artistName: string) {}
}

class AppleMusicPlaylistIterator implements Iterator {
  private playlist: AppleMusicTrack[];
  private position: number;

  constructor(playlist: AppleMusicTrack[]) {
    this.playlist = playlist;
    this.position = 0;
  }

  next() {
    const track = this.playlist[this.position];
    this.position += 1;
    return track;
  }

  hasNext() {
    return this.position + 1 <= this.playlist.length;
  }
}

class AppleMusicPlaylist implements Iterable {
  private playlist: AppleMusicTrack[];

  constructor() {
    this.playlist = [];

    this.addTrack(new AppleMusicTrack("喜劇", "星野源"));
    this.addTrack(new AppleMusicTrack("桃太郎", "水曜日のカンパネラ"));
    this.addTrack(new AppleMusicTrack("エクレア", "岡崎体育"));
  }

  addTrack(track: AppleMusicTrack) {
    this.playlist.push(track);
  }

  createIterator() {
    return new AppleMusicPlaylistIterator(this.playlist);
  }
}

class SpotifyTrack implements Track {
  constructor(public name: string, public artistName: string) {}
}

class SpotifyPlaylistIterator {
  private playlist: Map<string, SpotifyTrack>;

  constructor(playlist: Map<string, SpotifyTrack>) {
    this.playlist = playlist;
  }

  next() {
    const trackName = Array.from(this.playlist.keys())[0];
    const track = this.playlist.get(trackName);
    this.playlist.delete(trackName);
    return track;
  }

  hasNext() {
    return this.playlist.size > 0;
  }
}

class SpotifyPlaylist implements Iterable {
  private playlist: Map<string, SpotifyTrack>;

  constructor() {
    this.playlist = new Map();

    this.addTrack(new SpotifyTrack("旅路", "藤井風"));
    this.addTrack(new SpotifyTrack("inside you", "milet"));
    this.addTrack(new SpotifyTrack("HOPE", "TENDRE"));
  }

  addTrack(track: SpotifyTrack) {
    this.playlist.set(track.name, track);
  }

  createIterator() {
    return new SpotifyPlaylistIterator(this.playlist);
  }
}

class PlaylistCollection {
  constructor(
    private appleMusicPlaylist: AppleMusicPlaylist,
    private spotifyPlaylist: SpotifyPlaylist
  ) {}

  play() {
    const appleMusicPlaylistIterator = this.appleMusicPlaylist.createIterator();
    const spotifyPlaylistIterator = this.spotifyPlaylist.createIterator();

    console.log("Switch to Apple Music playlist...");
    this._play(appleMusicPlaylistIterator);

    console.log("\nSwitch to Spotify playlist...");
    this._play(spotifyPlaylistIterator);
  }

  private _play(iterator: Iterator<Track>) {
    while (iterator.hasNext()) {
      const track = iterator.next()!;
      console.log(`Now playing ${track.name} by ${track.artistName}`);
    }
  }
}

class Demo {
  static run() {
    const appleMusicPlaylist = new AppleMusicPlaylist();
    const spotifyPlaylist = new SpotifyPlaylist();

    const playlistCollection = new PlaylistCollection(
      appleMusicPlaylist,
      spotifyPlaylist
    );

    playlistCollection.play();
  }
}

export default Demo;
