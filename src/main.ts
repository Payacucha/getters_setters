//Setter

class Students{
    private _name:     string 
    private _semester: number;
    private _course:   string;
        
        constructor(_name:string,_semester:number,_course:string){
            this._name     = _name;
            this._semester = _semester;
            this._course   = _course;
}
    public get name(){
        return this._name
    }
    public set semester(thesem: number){
        this._semester = thesem;
    }
    public set course(thecourse: string){
        this._course = thecourse
    }
}
let student2 = new Students("Andrea",1,"A");

student2.semester = 3;
student2.course = "Software";
console.log(student2)

//Getter 
class Student{
    private _name       :string 
    private _semester   :number;
    private _course     :string;
    
    constructor(_name:string, _semester:number, _course:string){
        this._name     = _name;
        this._semester = _semester;
        this._course   = _course;
}
        public get name(){
        return this._name
    }
}
let student = new Student("Sebastian Donoso",3,"A");
let value = student.name;
console.log(value);