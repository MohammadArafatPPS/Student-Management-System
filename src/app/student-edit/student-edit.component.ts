import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
@Component
(
  {
    selector: 'app-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css']
  }
)
export class StudentEditComponent implements OnInit 
{
  //  Initialized a new Student object with empty fields, providing a template for editing.
  student: Student = new Student(0, '', '', '', '', '', '');
  studentId: number = 0;
  constructor
  (
    private studentService: StudentService,
    // Instance of ActivatedRoute, used to access route parameters.
    private route: ActivatedRoute,
    // Instance of Router, which allows to navigate to different routes.
    private router: Router
  ) 
  {
  }
  ngOnInit () 
  {
    // This ID is used to identify the student being edited.
    this.studentId = +this.route.snapshot.params['id'];
    // To retrieve the student data based on the ID. 
    const student = this.studentService.getStudent(this.studentId);
    if (student) 
    {
      this.student = student;
    } 
  }
  onSubmit () 
  {
    // Using the studentService to update the student's information.
    this.studentService.updateStudent(this.student);
    //  To navigate back to the student list page.
    this.router.navigate(['/students']);
  }
}