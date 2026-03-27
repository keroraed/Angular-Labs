export type CourseCategory = 'Programming' | 'Design' | 'Marketing' | 'Business';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  Image: string;
  catId: number;
  category: CourseCategory;
}
