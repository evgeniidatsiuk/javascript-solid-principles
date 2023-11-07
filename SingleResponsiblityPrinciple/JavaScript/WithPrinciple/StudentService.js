class StudentService {
    constructor() {}

    register(student) {
        console.log(`Welcome ${student.name}, you have successfully registered. Please choose a course.`)
        this.notify(student)
    }


    notify(student) {
        // emit an event about registration to other services
        console.log(`${student.name} has successfully registered`);
    }
}

module.exports = { StudentService }