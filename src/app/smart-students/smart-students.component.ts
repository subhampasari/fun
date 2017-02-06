import { Component, OnInit } from '@angular/core';

export class Student
{
	id : number;
	name : string;
	img_src : string;
}
const STUDENTS : Student[] = [
		{ id : 1, name : 'Subham' , img_src : '../../images/mark.jpg' },
		{ id : 2, name : 'Pasari' , img_src : '../../images/bill.jpg' },
		{ id : 3, name : 'Hitesh' , img_src : '../../images/trump.jpg' },
		{ id : 4, name : 'Gautam' , img_src : '../../images/superman.jpg' }
	];

@Component({
  selector: 'app-smart-students',
  templateUrl: './smart-students.component.html',
  styleUrls: ['./smart-students.component.css']
})
export class SmartStudentsComponent implements OnInit {

  constructor() { }
  

	students = STUDENTS;

	selectedStudent : Student;
  ngOnInit() {
  }

  onSelect(student : Student):void{
  	this.selectedStudent = student;
  }

  hide():void{
  	this.selectedStudent=null;
  }

}
