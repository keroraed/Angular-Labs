import { Routes } from '@angular/router';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { CourseDetails } from './components/course-details/course-details';
import { Courses } from './components/courses/courses';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
	{ path: 'home', component: Home },
	{ path: 'about-us', component: AboutUs },
	{ path: 'contact-us', component: ContactUs },
	{ path: 'courses', component: Courses },
	{ path: 'course/:id', component: CourseDetails },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: NotFound },
];
