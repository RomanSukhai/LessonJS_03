class Student{
    
    constructor( yearOfStuding,facultyName){
        this.yearOfStuding = yearOfStuding;
        this.facultyName = facultyName;
    }
    info(){
        console.log("YearOfStuding: "+this.yearOfStuding+" FacultyName: "+this.facultyName);
    }
}

let persons = [new Student(2012,"Юрист"),
    new Student(2014,"Програміст"),
    new Student(2015,"Економіст"),
    new Student(2016,"Психолог"),
    new Student(2013,"Інженер"),
    new Student(2014,"Механік"),
    new Student(2018,"Сантехнік"),
    new Student(2019,"Юрист"),
    new Student(2020,"Пілот"),
    new Student(2010,"Лікар"),
]
let masFacultyName = [];
let index = 0;
function greatNewMas(masFacultyName,persons,index) {
    for (let i = 0; i < persons.length; i++) {
        masFacultyName[index]=persons[i].facultyName;
        console.log("________________________________");
        console.log("   >"+masFacultyName[index]);
        
        index++;

    }
}
greatNewMas(masFacultyName,persons,index);
function sumYearOfStuding(persons) {
    let masSecondNumber =[]
    let index2= 0
    let count = 0
    let count2 = 0
    let sum = 0
   for (let i = 0; i < persons.length; i++) {
        count = persons[i].yearOfStuding/100
        let count2 = count%2*100
       masSecondNumber[index2]=count2
       sum +=  masSecondNumber[index2]
        index2++
   }
   console.log(" ");
   console.log("_____________________________________");
   console.log("Сума всіх років студентів: "+(2000+Math.trunc(sum))+" років");
}
sumYearOfStuding(persons)



