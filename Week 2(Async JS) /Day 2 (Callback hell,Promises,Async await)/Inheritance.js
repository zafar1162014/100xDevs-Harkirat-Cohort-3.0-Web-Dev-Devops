// Assignment #1 - Create a Circle class
// class Circle {
//    constructor(radius, color) {
//        this.radius = radius;  
//        this.color = color;
//    }

//    area() {
//       const area = this.radius * this.radius * Math.PI;
//        return area;
//    }
   
//    paint() {
// 			console.log(`Painting with color ${this.color}`);
//    }

// }

// const circle = new Circle(2, "red")
// const area = circle.area();
// console.log(area)
// 2nd 
// Assignment #2 - Create a base shape class
// Base class
class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}
// Rectangle class
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}
// Circle class
class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle = new Circle(20, "red");
console.log(`Created a circle: ${JSON.stringify(circle)}`);
console.log(circle.getDescription());
console.log(`Area of circle: ${circle.area()}`);

const rectangle = new Rectangle(10, 5, "blue");
console.log(`Created a rectangle: ${JSON.stringify(rectangle)}`);
console.log(rectangle.getDescription());
console.log(`Area of rectangle: ${rectangle.area()}`);
