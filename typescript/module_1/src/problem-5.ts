{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    
    function calculateAverageGrade(student: Student): number {
    
        let avg = 0;
        const totalgrades = student.grades.reduce((total, current) =>  total + current, 0);
        avg = totalgrades / student.grades.length;
        return avg;
    }
    
    
    // const student1: Student = {
    //     name: "Bob",
    //     age: 17,
    //     grades: [75, 80, 82, 88, 90]
    // };
    
    // console.log(calculateAverageGrade(student1)); 
    
}