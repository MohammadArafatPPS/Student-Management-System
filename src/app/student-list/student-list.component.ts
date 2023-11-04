import { Component , OnInit  } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
@Component
(
  {
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
  }
)
export class StudentListComponent implements OnInit 
{
  // declare students as an array of Student objects to store the list of students.
  students : Student[] = [];
  constructor (private studentService : StudentService) 
  {
  }
  // Retrieve the list of students from studentService and assign it to the students property. 
  ngOnInit () 
  {
    this.students = this.studentService.getStudents();
  }
  // Call the deleteStudent method of the studentService to delete the student with the specified ID.
  onDelete (studentId : number) 
  {
    this.studentService.deleteStudent(studentId);
    // Refresh the students array by fetching the updated list of students from the studentService.
    this.students = this.studentService.getStudents();
  }
}