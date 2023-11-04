import { Injectable } from '@angular/core';
import { Student } from './student.model';
//  decorator that used to declare that a class (Student) is available for dependency injection.
@Injectable
(
  {
    providedIn: 'root',
  }
)
export class StudentService 
{
  // Array of Student objects. students will hold the student data in memory.
  private students : Student[] = [];
  // Save the students data into the browser's local storage using JSON.
  private saveToLocalStorage () 
  {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  constructor () 
  {
    // retrieve data from the local storage with the key 'students'.
    const studentsData = localStorage.getItem('students');
    if (studentsData) 
    {
      this.students = JSON.parse(studentsData);
    }
  }
  //  Returns the list of students (array) that the service holds in memory.
  getStudents () : Student[] 
  {
    return this.students;
  }
  // Assigns a unique id to the student, adds it to the array, and then saves the updated data to local storage.
  addStudent (student : Student) 
  {
    student.id = this.students.length + 1;
    this.students.push(student);
    this.saveToLocalStorage();
  }
  // Finds the student with a matching id in the students array and updates it, also updates the data in local storage. 
  updateStudent (student : Student) 
  {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) 
    {
      this.students[index] = student;
      this.saveToLocalStorage();
    }
  }
  // Removes a student with a specific id from the students array and updates the local storage.
  deleteStudent (id : number) 
  {
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) 
    {
      this.students.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  // Retrieves a student by its id from the students array and returns it to use in StudentEditComponent, If no matching it returns undefined.
  getStudent (id : number) : Student | undefined 
  {
    return this.students.find((s) => s.id === id);
  }
}