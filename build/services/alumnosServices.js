"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = exports.findById = exports.getEntries = void 0;
const alumnos_json_1 = __importDefault(require("./alumnos.json"));
const alumnos = alumnos_json_1.default;
const getEntries = () => alumnos;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = alumnos.find(a => a.id === id);
    return entry;
};
exports.findById = findById;
const addStudent = (newStudentEntry) => {
    const newStudent = Object.assign({ id: Math.max(...alumnos_json_1.default.map(a => a.id)) + 1 }, newStudentEntry);
    alumnos.push(newStudent);
    return newStudent;
};
exports.addStudent = addStudent;
