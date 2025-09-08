interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Wanjiru",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Brian",
  lastName: "Otieno",
  age: 24,
  location: "Mombasa",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render table using vanilla JS
const table = document.createElement("table");
const tableHeader = table.insertRow();

// Add header cells
const headerCell1 = tableHeader.insertCell();
headerCell1.textContent = "First Name";
const headerCell2 = tableHeader.insertCell();
headerCell2.textContent = "Location";

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append table to body
document.body.appendChild(table);