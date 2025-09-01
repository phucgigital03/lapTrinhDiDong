

// Simple base class + two subclasses with one specific method each
class Employee {
  constructor(public id: number, public name: string) {}
  describe(): string {
    return `Employee ${this.id}: ${this.name}`;
  }
}

class Manager extends Employee {
  scheduleMeeting(topic: string): void {
    console.log(`Manager ${this.name} schedules meeting about ${topic}`);
  }
}

class Developer extends Employee {
  writeCode(feature: string): void {
    console.log(`Developer ${this.name} writes code for ${feature}`);
  }
}

export { Employee, Manager, Developer };

