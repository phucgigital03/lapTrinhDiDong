// bai30 placeholder

// School with new StudentB30 & TeacherB30 classes

class StudentB30 {
  constructor(public id: number, public name: string, public grade: number) {}
  info(): string {
    return `Student #${this.id} ${this.name} (grade: ${this.grade})`;
  }
}

class TeacherB30 {
  constructor(public id: number, public name: string, public subject: string) {}
  introduce(): string {
    return `Teacher #${this.id} ${this.name} teaches ${this.subject}`;
  }
}

class School {
  private students: StudentB30[] = [];
  private teachers: TeacherB30[] = [];

  addStudent(s: StudentB30): void {
    this.students.push(s);
  }

  addTeacher(t: TeacherB30): void {
    this.teachers.push(t);
  }

  displayInfo(): void {
    console.log("Teachers:");
    this.teachers.forEach(t => console.log(" - " + t.introduce()));
    console.log("Students:");
    this.students.forEach(s => console.log(" - " + s.info()));
  }
}



export { StudentB30, TeacherB30, School };

