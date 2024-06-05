class DVDPlayer {
  public on(): void {
    console.log("DVD Player is on");
  }

  public play(movie: string): void {
    console.log("Playing " + movie);
  }

  public off(): void {
    console.log("DVD Player is off");
  }
}

class Projector {
  public on(): void {
    console.log("Projector is on");
  }

  public setInput(input: string): void {
    console.log("Setting input to " + input);
  }

  public off(): void {
    console.log("Projector is off");
  }
}

class SoundSystem {
  public on(): void {
    console.log("Sound System is on");
  }

  public setVolume(volume: number): void {
    console.log("Setting volume to " + volume);
  }

  public off(): void {
    console.log("Sound System is off");
  }
}

class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private soundSystem: SoundSystem;

  constructor() {
    this.dvdPlayer = new DVDPlayer();
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
  }

  public watchMovie(movie: string): void {
    this.projector.on();
    this.projector.setInput("DVD");
    this.soundSystem.on();
    this.soundSystem.setVolume(10);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  public endMovie(): void {
    this.dvdPlayer.off();
    this.soundSystem.off();
    this.projector.off();
  }
}

const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
