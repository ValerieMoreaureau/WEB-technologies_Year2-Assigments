class Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseSalary = baseSalary;
        this.experience = experience;
    }

    countedSalary() {
        let salary = this.baseSalary;
        if (this.experience > 5) {
            salary = this.baseSalary * 1.2 + 500;
        } else if (this.experience > 2) {
            salary = this.baseSalary + 200;
        }
        return salary;
    }
}

class Developer extends Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        super(firstName, lastName, baseSalary, experience);
    }
}

class Designer extends Employee {
    constructor(firstName, lastName, baseSalary, experience, effCoeff) {
        super(firstName, lastName, baseSalary, experience);
        this.effCoeff = effCoeff;
    }

    countedSalary() {
        return super.countedSalary() * this.effCoeff;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, baseSalary, experience, team) {
        super(firstName, lastName, baseSalary, experience);
        this.team = team;
    }

    countedSalary() {
        let salary = super.countedSalary();
        if (this.team.length > 10) {
            salary += 300;
        } else if (this.team.length > 5) {
            salary += 200;
        }
        let developerCount = this.team.filter(member => member instanceof Developer).length;
        let designerCount = this.team.filter(member => member instanceof Designer).length;
        if (developerCount > this.team.length / 2) {
            salary *= 1.1;
        }
        return salary;
    }
}

class Department {
    constructor(managers) {
        this.managers = managers;
    }


    giveSalary() {
        for (let manager of this.managers) {
            for (let member of manager.team) {
                console.log(`${member.firstName} ${member.lastName} отримав ${member.countedSalary()} шекелів.`);
            }
            console.log(`${manager.firstName} ${manager.lastName} отримав ${manager.countedSalary()} шекелів.`);
        }
    }
}


const developer1 = new Developer("Іван", "Величко", 2000, 3);
const developer2 = new Developer("Петро", "Петрик", 3600, 6);
const designer1 = new Designer("Марія", "Бігун", 5000, 4, 0.8);
const manager1 = new Manager("Олег", "Степанчук", 6000, 3, [developer1, developer2, designer1]);

const department = new Department([manager1]);
department.giveSalary();