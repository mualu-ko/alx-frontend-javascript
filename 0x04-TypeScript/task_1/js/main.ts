
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


interface Director extends Teacher {
  numberOfReports: number;
}


const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);



interface printTeacherFunction {
  (names: { firstName: string; lastName: string }): string;
}


function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  firstName = firstName.charAt(0); // make firstName the initial
  return `${firstName}. ${lastName}`;
};

// Example
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
