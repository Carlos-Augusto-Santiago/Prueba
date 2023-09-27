import { AlumnosEntry, NewStudentEntry } from "../types";
import alumnosData from "./alumnos.json";

var alumnos: Array<AlumnosEntry> = alumnosData as Array<AlumnosEntry>;

export const getEntries = (): AlumnosEntry[] => alumnos;

export const findById = (id: number): AlumnosEntry | undefined => {
    const entry = alumnos.find(a => a.id === id);
    return entry;
}

export const addStudent = (newStudentEntry: NewStudentEntry): AlumnosEntry => {
    const newStudent = {
        id: Math.max(...alumnosData.map(a => a.id)) + 1,
        ...newStudentEntry
    }

    alumnos.push(newStudent);
    return newStudent;
};

export const deleteStudent = (id: number): AlumnosEntry | undefined => {
    const student = findById(id);
    if (student) {
        alumnos.splice(student.id, 1);
    }
    return student;
}

export const updateStudent = (id: number, studentEntry: AlumnosEntry): AlumnosEntry | undefined => {
    var student = findById(id);
    if (student) {
        const alumnosCopy = alumnos.map(a => a.id === id ?
            {
                ...a, name: studentEntry.name ? studentEntry.name : a.name
                , presence: studentEntry.presence ? studentEntry.presence : a.presence,
                score: studentEntry.score ? studentEntry.score : a.score,
                course: studentEntry.course ? studentEntry.course : a.course
            }
            : a);
        student = alumnosCopy.find(a => a.id === id);
        alumnos = alumnosCopy;
    }
    return student
}

export const findByCourse = (course: string): AlumnosEntry[] | undefined => {
    var entry: Array<AlumnosEntry> = [];
    alumnos.map(a => a.course === course ? entry.push(a) : a);
    return entry;
}