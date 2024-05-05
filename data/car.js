class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }

  go() {
    this.speed = this.isTrunkOpen ? this.speed : this.speed += 5;
    this.speed = this.speed > 200 ? 200 : this.speed;
  }

  brake() {
    this.speed -= 5;
    this.speed = this.speed < 0 ? 0 : this.speed;
  }

  openTrunk() {
    this.isTrunkOpen = this.speed === 0 ? true : false;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}


class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Acceleration: ${this.acceleration}`);
  }

  go() {
    this.speed += this.acceleration;
    this.speed = this.speed > 300 ? 300 : this.speed;
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

console.log(car1);
console.log(car2);

car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.displayInfo();
car2.openTrunk();
car2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
