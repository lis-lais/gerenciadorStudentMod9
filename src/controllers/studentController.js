const studentService = require('../services/studentService');

const createStudent = async (req, res, next) => {
    try {
        const newStudent = await studentService.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        next(error);
    }
};


const findAllStudents = async (req, res, next) => {
    try {
        const students = await studentService.findAllStudents();
        res.json(students);
    } catch (error) {
        next(error);
    }
};

const updateStudent = async (req, res, next) => {
    try {
        const updatedStudent = await studentService.updateStudent(req.params.id, req.body);
        res.status(200).json(updatedStudent);
    } catch (error) {
        next(error);
    }
};

const deleteStudent = async (req, res, next) => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

const searchStudents = async (req, res, next) => {
    try {
        const results = await studentService.searchStudents(req.query);
        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createStudent,
    findAllStudents,
    updateStudent,
    deleteStudent,
    searchStudents,
};