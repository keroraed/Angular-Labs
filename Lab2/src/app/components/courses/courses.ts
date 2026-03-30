import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Course, CourseCategory } from '../../models/icourse';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click.directive';
import { CoursesService } from '../../services/courses.service';

type CategoryFilter = 'All' | CourseCategory;

@Component({
  selector: 'app-courses',
  imports: [FormsModule, NgClass, RouterLink, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  private readonly coursesService = inject(CoursesService);

  selectedCategory: CategoryFilter = 'All';
  readonly registrationMessage = signal<string | null>(null);

  readonly categories: CategoryFilter[] = [
    'All',
    'Programming',
    'Design',
    'Marketing',
    'Business',
  ];

  courses: Course[] = this.coursesService.getAllCourses();

  get filteredCourses(): Course[] {
    if (this.selectedCategory === 'All') {
      return this.courses;
    }

    return this.coursesService.getCoursesByCatID(this.getCategoryId(this.selectedCategory));
  }

  register(courseId: number): void {
    const selectedCourse = this.coursesService.getCourseByID(courseId);

    if (!selectedCourse || selectedCourse.seats === 0) {
      return;
    }

    selectedCourse.seats -= 1;
    this.registrationMessage.set(`You registered for ${selectedCourse.title}.`);
  }

  private getCategoryId(category: CourseCategory): number {
    const categoryMap: Record<CourseCategory, number> = {
      Programming: 1,
      Design: 2,
      Marketing: 3,
      Business: 4,
    };

    return categoryMap[category];
  }
}
