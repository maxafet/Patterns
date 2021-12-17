class Car {
	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
};

class CarFactory {
	create(type) {
		if (type === 'model1')
			return new Car(type, 100, 100);
		if (type === 'model2')
			return new Car(type, 200, 200);
	}
};

let factory = new CarFactory();

let model1 = factory.create('model1');
let model2 = factory.create('model2');

console.log(model1);
console.log(model2);
