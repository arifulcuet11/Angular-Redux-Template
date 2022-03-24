import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Prefered_Courses, preferredCoursesFactory } from './preferred-course';

const Course_Book = new Course('Angular js', 'Angular');

@Component({
  selector: 'app-user-factory',
  templateUrl: './user-factory.component.html',
  styleUrls: ['./user-factory.component.scss'],
  providers:[CourseService,
  {provide:Course, useValue: Course_Book},
  {provide: Prefered_Courses, useFactory: preferredCoursesFactory(4), deps: [Course, CourseService]}
]
})
export class UserFactoryComponent implements OnInit {

  constructor(@Inject(Prefered_Courses) public preferredCourses: string) { }
  ngOnInit(): void {
  }

}
