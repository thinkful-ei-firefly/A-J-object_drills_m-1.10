function enrollInSummerSchool(students) {
    return students.map(student => { 
      return {
    name : student.name,
    status : "In Summer school", 
    course : student.course
    };
  });
  }