import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course, CourseCategory } from '../../models/icourse';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click.directive';

type CategoryFilter = 'All' | CourseCategory;

@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  selectedCategory: CategoryFilter = 'All';
  readonly registrationMessage = signal<string | null>(null);

  readonly categories: CategoryFilter[] = [
    'All',
    'Programming',
    'Design',
    'Marketing',
    'Business',
  ];

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'Sara Ahmed',
      price: 120,
      seats: 5,
      Image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'UI Design Essentials',
      instructor: 'Nourhan Samir',
      price: 95,
      seats: 2,
      Image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      catId: 2,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Digital Marketing Basics',
      instructor: 'Karim Adel',
      price: 85,
      seats: 0,
      Image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80',
      catId: 3,
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Business Strategy 101',
      instructor: 'Mona Youssef',
      price: 150,
      seats: 7,
      Image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      catId: 4,
      category: 'Business',
    },
    {
      id: 5,
      title: 'TypeScript for Developers',
      instructor: 'Omar Hassan',
      price: 110,
      seats: 1,
      Image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 6,
      title: 'Advanced Brand Design',
      instructor: 'Reem Fathi',
      price: 130,
      seats: 4,
      Image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
      catId: 2,
      category: 'Design',
    },
  ];

  get filteredCourses(): Course[] {
    if (this.selectedCategory === 'All') {
      return this.courses;
    }

    return this.courses.filter((course) => course.category === this.selectedCategory);
  }

  register(courseId: number): void {
    const selectedCourse = this.courses.find((course) => course.id === courseId);

    if (!selectedCourse || selectedCourse.seats === 0) {
      return;
    }

    selectedCourse.seats -= 1;
    this.registrationMessage.set(`You registered for ${selectedCourse.title}.`);
  }
}
