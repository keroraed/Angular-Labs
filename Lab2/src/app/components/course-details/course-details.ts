import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly coursesService = inject(CoursesService);

  readonly courseId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: NaN }
  );

  readonly course = computed(() => {
    const id = this.courseId();
    return Number.isFinite(id) ? this.coursesService.getCourseByID(id) : undefined;
  });
}