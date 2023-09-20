class Fan {
  readonly SLOW = 1;
  readonly MEDIUM = 2;
  readonly FAST = 3;

  private speed: number;
  private status: boolean;
  private radius: number;
  private color: string;

  constructor(speed: number, status: boolean, color: string, radius: number) {
    this.speed = speed;
    this.status = status;
    this.color = color;
    this.radius = radius;
  }
  getSpeed(): number {
    switch (this.speed) {
      case this.FAST:
        return "fast";
    }
  }
  setSpeed(speed: number) {
    this.speed = speed;
  }
  getStatus(): boolean {
    return this.status;
  }
  setStatus(status: boolean) {
    this.status = status;
  }
  getColor(): string {
    return this.color;
  }

  getRadius(): number {
    return this.radius;
  }
  getInfo(speed: number, status: boolean, color: string, radius: number) {
    return {
      speed: this.speed,
      status: this.status,
      radius: this.radius,
      color: this.color,
    };
  }
}
