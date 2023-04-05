const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName
    },
  };

  console.log(person.firstName);
  console.log(person["lastName"]);
  console.log(person.fullName());


  //Getters and Setters
  const personX = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

  const personY = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

  console.log(personX.lang);

  function Student (name, age, regNo) {
    this.name = name,
    this.age = age,
    this.regNo = regNo
  }

  const yara = new Student("Yara", 25, 1915)
  console.log(yara.age);