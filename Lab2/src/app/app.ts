import { Component } from '@angular/core';
import { Courses } from './components/courses/courses';

@Component({
  selector: 'app-root',
  imports: [Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
