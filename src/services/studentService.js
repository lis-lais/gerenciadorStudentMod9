const studentRepository = require('../repositories/studentRepository');
const {generateRegistration} = require('../utils/registrationGenerator');

const createStudent = async (data) => {
    if (!data.name || !data.course || !data.year) {
        throw new Error('Missing required fields: name, course, year');
    }
    data.registration = generateRegistration(data.course);
    return await studentRepository.createStudent(data);
};

const findAllStudents = async () => await studentRepository.findAllStudents();

const updateStudent = async (id, data) => {
    if (!id) {
        throw new Error('Missing student ID');
    }
    return await studentRepository.updateStudentById(id, data);
};

const deleteStudent = async (id) => {
    if (!id) {
        throw new Error('Missing student ID');
    }
    return await studentRepository.deleteStudentById(id);
};

const searchStudents = async (query) => {
    const filters = {};
    if (query.name) {
        filters.name = new RegExp(query.name, 'i');
    }
    if (query.registration) {
        filters.registration = query.registration;
    }
    if (query.course) {
        filters.course = query.course;
    }
    return await studentRepository.searchStudent(filters);
};

module.exports = {
    createStudent,
    findAllStudents,
    updateStudent,
    deleteStudent,
    searchStudents,
};