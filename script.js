/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


let john = {
  fullName: 'John Smith',
  mass: 63,
  height: 1.72,
  calcBMI: function() {
    return this.BMI = this.mass / (this.height * this.height);
  }
};

let mark = {
  fullName: 'Mark Hamill',
  mass: 67,
  height: 1.8,
  calcBMI: function() {
    return this.BMI = this.mass / (this.height * this.height);
  }
}

john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(john.fullName + ' BMI: ' + john.BMI);
} else if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' BMI: ' + mark.BMI);
} else {
  console.log('Mark and John have the same BMI of ' + john.BMI);
}