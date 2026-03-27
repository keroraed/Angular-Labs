import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Student {
  id: number;
  name: string;
  age: number;
  photoUrl: string;
}

@Component({
  selector: 'app-student',
  imports: [MatCardModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  students: Student[] = [
    {
      id: 1,
      name: 'Ahmed Ali',
      age: 20,
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
    },
    {
      id: 2,
      name: 'Mona Saad',
      age: 22,
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300'
    },
    {
      id: 3,
      name: 'Youssef Nabil',
      age: 21,
      photoUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300'
    }
  ];
}
