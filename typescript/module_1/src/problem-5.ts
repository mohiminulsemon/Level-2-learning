{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    
    function calculateAverageGrade(student: Student): number {
    
        const sum = student.grades.reduce((total, current) => total + current, 0);
        return sum / student.grades.length;
    }
    
    
    // const student1: Student = {
    //     name: "Bob",
    //     age: 17,
    //     grades: [75, 80, 82, 88, 90]
    // };
    
    // const averageGradeForBob = calculateAverageGrade(student1);
    // console.log(averageGradeForBob); 
    
}