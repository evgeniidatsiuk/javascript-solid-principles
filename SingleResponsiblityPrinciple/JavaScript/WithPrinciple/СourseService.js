class CourseService {
    constructor() {
    }

    startCourse(student, course) {
        // find course
        console.log(`You have started  a course ${course.name}. Good luck`);
        this.notify(student, course);
    }

    notify(student, course) {
        // emit an event about registration to other services
        console.log(`${student.name} has started ${course.name}`);
    }
}

module.exports = {
    CourseService
}
