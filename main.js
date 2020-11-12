const student = {
    fname: "Lamin",
    lname :"Jabbi",
    department: "ICT",
    programe: "Computer Science",
    class: "21",
    admittedDate: "2017",
    completedDate: "2021",
};

//add a new property 'course'
student.course = [
    'Java','Web','Programming','Database','Networking','PLD'
];
//delete the class
delete students.class;

//update the admitted date
students.admittedDate = '2020';

//add grades
students.grades =[
    {
        code:"wx202",
        title:"coding",
        creditHrs:"1",
        grade:"B",
    },
    {
        code:"GR401",
        title:"database",
        creditHrs:"4",
        grade:"C",
    }
];

console.table(students);

//greetings method
function greetings(greet){
    return 'Peace, I am ${greet.fname}. Hello to You!'
}
console.log(greetings(students));