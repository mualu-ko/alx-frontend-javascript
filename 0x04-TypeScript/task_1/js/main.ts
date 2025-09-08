// Define the Teacher interface
interface Teacher {
  readonly firstName: string;          // readonly = cannot be modified after initialization
  readonly lastName: string;           // same here
  fullTimeEmployee: boolean;           // always required
  yearsOfExperience?: number;          // optional property
  location: string;                    // always required
  [key: string]: any;                  // index signature -> allows extra props like contract
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
