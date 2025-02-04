const Student = require('../models/student');

const createStudent = async (studentData) => await Student.create(studentData);
const findAllStudents = async () => await Student.find ();
const findStudentById = async (id) => await Student.findById(id);
const updateStudentById = async (id, studentData) => await Student.findByIdAndUpdate(id, studentData, { new: true });
const deleteStudentById = async (id) => await Student.findByIdAndDelete(id);
const searchStudent = async (filters) => await Student.find(filters);

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudentById,
    deleteStudentById,
    searchStudent,  
};