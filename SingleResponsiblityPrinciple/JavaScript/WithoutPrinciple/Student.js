class Student {
    constructor(name) {
        this.name = name;
    }

    register() {
        console.log(`Welcome ${this.name}, you have successfully registered. Please choose a course.`)
        this.notify(`${this.name} has successfully registered`)
    }

    startCourse(name) {
        console.log(`You have started a course ${name}. Good luck`);
        this.notify(`${this.name} has started course: ${name}`)

    }

    notify(event) {
        // emit an event about registration to other services
        console.log(event)
    }
}

const Eugene = new Student("Eugene");
Eugene.register();
Eugene.startCourse("IT");
Eugene.notify();
