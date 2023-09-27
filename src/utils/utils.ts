import { Approved, Course, NewStudentEntry, Presence, Score } from "../types";

const isString = (string: string): boolean => {
    return typeof string === "string"
}

const isNumber = (number: number): boolean => {
    return typeof number === "number"
}

const parseName = (nameFromRequest: any): string => {
    if (!isString(nameFromRequest)) {
        throw new Error('Nombre incorrecto o faltante');
    }
    return nameFromRequest;
}

const parsePresence = (presenceFromRequest: any): Presence => {
    if (!isNumber(presenceFromRequest)) {
        throw new Error('Asistencia incorrecta o faltante');
    }
    return presenceFromRequest;
}

const parseScore = (scoreFromRequest: any): Score => {
    if (!isNumber(scoreFromRequest)) {
        throw new Error('Calificacion incorrecta o faltante');
    }
    return scoreFromRequest;
}

const parseCourse = (courseFromRequest: any): Course => {
    if (!isNumber(courseFromRequest)) {
        throw new Error('Curso incorrecta o faltante');
    }
    return courseFromRequest;
}

const parseApproved = (approvedFromRequest: any): Approved => {
    if (!isNumber(approvedFromRequest)) {
        throw new Error('Aprovado incorrecta o faltante');
    }
    return approvedFromRequest;
}

const toNewStudentEntry = (object: any): NewStudentEntry => {
    const newStudent: NewStudentEntry = {
        name: parseName(object.name),
        presence: parsePresence(object.presence),
        score: parseScore(object.score),
        course: parseCourse(object.curso),
        approved: parseApproved(object.approved),
    }
    return newStudent
}
export default toNewStudentEntry;