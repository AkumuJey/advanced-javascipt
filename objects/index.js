// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullName: function () {
//         return this.firstName + " " + this.lastName
//     },
//   };

//   console.log(person.firstName);
//   console.log(person["lastName"]);
//   console.log(person.fullName());


//   //Getters and Setters
//   const personX = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };

//   const personY = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(lang) {
//       this.language = lang;
//     }
//   };

//   console.log(personX.lang);

//   function Student (name, age, regNo) {
//     this.name = name,
//     this.age = age,
//     this.regNo = regNo
//   }

//   const yara = new Student("Yara", 25, 1915)
//   console.log(yara.age);

  class Car {
    constructor(wheels, year) {
      this.wheels = wheels
      this.year = year
    }
  }

  class Model extends Car{
    constructor(wheels, year, company) {
      super(wheels, year)
      this.company = company
    }
    show () {
      return `The ${this.company} has ${this.wheels} wheels. It was made in ${this.year}`
    }
    get name () {
      return this.company
    }
    set newName (x) {
      this.company = x
    }
  }

  let myCar = new Model(4, 1997, "Mercedes")

  console.log(myCar.show());
  console.log(myCar.name);
  myCar.newName = "BMW";
  console.log(myCar.name);
  console.log((myCar.show()));

  //Static methods can only be used in the Class object


