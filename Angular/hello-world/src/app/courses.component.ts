import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //<courses>
    // template: '<h2>{{"Title: " + title}}</h2>'
    // template: '<h2>{{getTitle()}}</h2>'
    template: `
        <h2>{{getTitle()}}</h2>
        <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
        </ul>
        `


})


export class CoursesComponent {
    title = 'List of courses'
    courses;

    getTitle(){
        return this.title
    }

    constructor(service: CoursesService){
        // let service = new CoursesService(); //Tightly coupled
        this.courses = service.getCourses();
    }
}