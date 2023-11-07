const {Student} = require("./Student");
const {Course} = require("./Course");
const {CourseService} = require("./СourseService");
const {StudentService} = require("./StudentService");


const eugene = new Student("Eugene");

const service = new StudentService();
service.register(eugene);

const it = new Course('IT')
const courseService = new CourseService();
courseService.startCourse(eugene, it);
