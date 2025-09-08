# 0x04. TypeScript

## Project Overview
This project introduces **TypeScript** concepts and how to use them effectively in frontend development.  
You will practice working with interfaces, classes, generic types, namespaces, ambient declarations, and nominal typing.

The tasks are progressive, starting from simple interfaces and moving towards advanced TypeScript features.

---

## Learning Objectives
By the end of this project, you should be able to explain:

- Basic types in TypeScript  
- Interfaces, Classes, and functions  
- How to work with the DOM and TypeScript  
- Generic types  
- How to use namespaces  
- How to merge declarations  
- How to use an ambient Namespace to import an external library  
- Basic nominal typing with TypeScript  

---

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`  
- All files should end with a new line  
- All `.ts` files will be transpiled on **Ubuntu 18.04**  
- Code will be tested with **jest (24.9.\*)**  
- A `README.md` file is mandatory at the root of the project  
- TypeScript compiler should not show warnings or errors when compiling  
- Use the `.ts` extension whenever possible  

---

## Configuration Files
The following configuration files are provided and must be used:
- `package.json`  
- `.eslintrc.js`  
- `tsconfig.json`  
- `webpack.config.js`  

---

## Tasks

### 0. Creating an interface for a student
- Define a `Student` interface with:
  - `firstName` (string)  
  - `lastName` (string)  
  - `age` (number)  
  - `location` (string)  
- Create two students and add them to `studentsList`.  
- Render a table using Vanilla JS that displays each student's **first name** and **location**.

**Files:**  
- `task_0/js/main.ts`  
- `task_0/package.json`  
- `task_0/.eslintrc.js`  
- `task_0/tsconfig.json`  
- `task_0/webpack.config.js`  

---

### 1. Teacher interface
- Create a `Teacher` interface with:
  - `firstName` (string, readonly)  
  - `lastName` (string, readonly)  
  - `fullTimeEmployee` (boolean, required)  
  - `yearsOfExperience?` (optional number)  
  - `location` (string, required)  
  - Support extra attributes such as `contract: boolean`  

**File:** `task_1/js/main.ts`  

---

### 2. Directors interface
- Create a `Directors` interface extending `Teacher`.  
- Add required attribute `numberOfReports` (number).  

**File:** `task_1/js/main.ts`  

---

### 3. Printing teachers
- Write a function `printTeacher(firstName, lastName)` → returns `J. Doe`.  
- Create an interface `printTeacherFunction` for the function.  

**File:** `task_1/js/main.ts`  

---

### 4. Writing a StudentClass
- Create `StudentClass` with:
  - `constructor(firstName, lastName)`  
  - `workOnHomework()` → `"Currently working"`  
  - `displayName()` → first name  
- Use interfaces to describe constructor and class.  

**File:** `task_1/js/main.ts`  

---

### 5. Advanced types Part 1
- Create `DirectorInterface` and `TeacherInterface`.  
- Implement `Director` and `Teacher` classes.  
- Write `createEmployee(salary)` that returns a `Teacher` if `< 500`, otherwise a `Director`.  

**Files:** `task_2/js/main.ts`, configs  

---

### 6. Employee-specific functions
- `isDirector(employee)` → type predicate  
- `executeWork(employee)` → calls `workDirectorTasks` or `workTeacherTasks`  

**File:** `task_2/js/main.ts`  

---

### 7. String literal types
- Create a type `Subjects = "Math" | "History"`.  
- Implement `teachClass(todayClass)` that returns:  
  - `"Teaching Math"` if `Math`  
  - `"Teaching History"` if `History`  

**File:** `task_2/js/main.ts`  

---

### 8. Ambient Namespaces
- Create `RowID` type and `RowElement` interface.  
- Write `crud.d.ts` for external `crud.js`.  
- Use `insertRow`, `updateRow`, `deleteRow` with typing.  

**Files:**  
- `task_3/js/main.ts`  
- `task_3/js/interface.ts`  
- `task_3/js/crud.d.ts`  

---

### 9. Namespace & Declaration merging
- Define `Subjects.Teacher` and `Subjects.Subject`.  
- Extend `Teacher` with new properties in `Cpp.ts`, `Java.ts`, `React.ts`.  
- Implement methods:
  - `getRequirements()`  
  - `getAvailableTeacher()`  

**Files:** `task_4/js/subjects/*.ts`  

---

### 10. Using Subjects in main.ts
- Export constants for each subject.  
- Create `cTeacher` and test all subjects.  

**File:** `task_4/js/main.ts`  

---

### 11. Brand convention & Nominal typing
- Create `MajorCredits` and `MinorCredits` with brand properties.  
- Implement `sumMajorCredits` and `sumMinorCredits`.  

**Files:**  
- `task_5/js/main.ts`  
- `task_5/package.json`  
- `task_5/webpack.config.js`  
- `task_5/tsconfig.json`  

---

## Repository
- **GitHub repo:** `alx-frontend-javascript`  
- **Directory:** `0x04-TypeScript`  

---
