// bai24 placeholder
// ...existing code...
abstract class Appliance {
  constructor(public brand: string) {}
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log(`Fan (${this.brand}) starts spinning.`);
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log(`AirConditioner (${this.brand}) starts cooling.`);
  }
}

// Demo (optional)
// const fan = new Fan("Panasonic");
// const ac = new AirConditioner("Daikin");
// fan.turnOn();
// ac.turnOn();

export { Appliance, Fan, AirConditioner };