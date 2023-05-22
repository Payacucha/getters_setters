"use strict";
//Setter
class Students {
    constructor(_name, _semester, _course) {
        this._name = _name;
        this._semester = _semester;
        this._course = _course;
    }
    get name() {
        return this._name;
    }
    set semester(thesem) {
        this._semester = thesem;
    }
    set course(thecourse) {
        this._course = thecourse;
    }
}
let student2 = new Students("Andrea", 1, "A");
student2.semester = 3;
student2.course = "Software";
console.log(student2);
//Getter 
class Student {
    constructor(_name, _semester, _course) {
        this._name = _name;
        this._semester = _semester;
        this._course = _course;
    }
    get name() {
        return this._name;
    }
}
let student = new Student("Sebastian Donoso", 3, "A");
let value = student.name;
console.log(value);
