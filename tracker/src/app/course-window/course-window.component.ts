import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-window',
  imports: [CommonModule, CourseComponent, FormsModule],
  templateUrl: './course-window.component.html',
  styleUrl: './course-window.component.scss'
})
export class CourseWindowComponent {

}
