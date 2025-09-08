
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


function printTeacher({ firstName, lastName }): string {
  firstName = firstName.charAt(0); // make firstName the initial
  return `${firstName}. ${lastName}`;
};

// Example
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
