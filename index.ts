import inquirer from "inquirer";

class Student {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

const programStart = async (person: Person) => {
  do {
    console.log("Welcome Guest!!");
    const ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: "Whom would you like to talk to?",
      choices: ["myself", "Student"]
    });

    if (ans.select === "myself") {
      console.log("I am talking to myself");
      console.log("My name's Kulsoom Khan, and I am from Karachi");
    }

    if (ans.select === "Student") {
      const ansStudent = await inquirer.prompt({
        name: "Student",
        type: "input",
        message: "Which Student do you wanna talk to?",
      });

      const student = persons.students.find(val => val.name === ansStudent.Student);

      if (!student) {
        const newStudent = new Student(ansStudent.Student);
        persons.addStudent(newStudent);
        console.log(`Hello I am ${newStudent.name}, and I am doing good..`);
        console.log(persons.students);
      } else {
        console.log(`Hello I am ${student.name}, and I am fine............`);
        console.log(persons.students);
      }
    }
  } while (true);
};

programStart(persons);

