function Student(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks;

    this.printTop3Subjects = function () {
        
        const subjectMarks = Object.entries(this.marks_of_5_subjects);

        
        const sortedSubjects = subjectMarks.sort((a, b) => b[1] - a[1]);

        
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${sortedSubjects[i][0]} - ${sortedSubjects[i][1]}`);
        }
    };

    this.printReportCard = function () {
        
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, marks) => total + marks, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}|`);
        console.log(`| Roll no. - ${this.roll_no}|`);
        console.log(`| Class    - ${this.class}  |`);
        console.log(`| Section  - ${this.section}|`);

        
        Object.entries(this.marks_of_5_subjects).forEach(([subject, marks]) => {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${marks}      |`);
        });

        console.log(`| Percentage - ${percentage.toFixed(1)}%  |`);
        console.log("+--------------------+");
    };
}


const student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

student1.printTop3Subjects();
student1.printReportCard();