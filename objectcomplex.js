// add object complex traversing assignemnt

const studentData = {
  students: [
    {
      name: "Dolon",
      courses: [
        { name: "Math", grade: 95 },
        { name: "English", grade: 67 },
        { name: "Science", grade: 87 }
      ]
    },
    {
      name: "Sahaved",
      courses: [
        { name: "Math", grade: 79 },
        { name: "English", grade: 90 },
        { name: "Science", grade: 42 }
      ]
    },
    {
      name: "Aditya",
      courses: [
        { name: "Math", grade: 95 },
        { name: "English", grade: 37 },
        { name: "Science", grade: 76 }
      ]
    }
  ]
};

studentData.students.forEach(student => {
  console.log(`Student: ${student.name}`);
  
  let total = 0;

  student.courses.forEach(course => {
    console.log(`${course.name}: ${course.grade}`);
    total += course.grade;
  });

  let avg = total / student.courses.length;
  console.log(`Average: ${avg.toFixed(2)}\n`);
});