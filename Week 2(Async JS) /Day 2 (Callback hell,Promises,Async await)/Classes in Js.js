// manually
let rect1 = {
    width: 20,
    height: 40,
    area: function () {
        return this.width * this.height;
    }

}
console.log(rect1.area());
// class
class Rectangle {
  constructor(width = 1, height = 1, color = 'black') {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

// Example usage:
const defaultRectangle = new Rectangle(); // Uses default values
console.log(defaultRectangle.area()); // Output: 1
defaultRectangle.paint(); // Output: Painting with color black

const customRectangle = new Rectangle(5, 3, 'blue'); // Uses provided values
console.log(customRectangle.area()); // Output: 15
customRectangle.paint(); // Output: Painting with color blue

// Some more classes
// Date
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format
console.log(now.getDay());
console.log(now.getFullYear());


// Maps
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));