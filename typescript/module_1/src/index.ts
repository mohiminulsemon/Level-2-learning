{
    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    
    function calculateAverageGrade(student: Student): number {
    
        let averrage = 0;
        const sum = student.grades.reduce((total, current) =>  total + current, 0);
        averrage = sum / student.grades.length;
        return averrage;
    }
    
    
    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    
    console.log(calculateAverageGrade(student1)); 
    
}