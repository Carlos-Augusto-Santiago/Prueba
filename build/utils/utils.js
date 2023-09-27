"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const isString = (string) => {
    return typeof string === "string";
};
const isNumber = (number) => {
    return typeof number === "number";
};
const isPresence = (param) => {
    return Object.values(types_1.Presence).includes(param);
};
const isScore = (param) => {
    return Object.values(types_1.Score).includes(param);
};
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Nombre incorrecto o faltante');
    }
    return nameFromRequest;
};
const parsePresence = (presenceFromRequest) => {
    if (!isNumber(presenceFromRequest) || !isPresence(presenceFromRequest)) {
        throw new Error('Asistencia incorrecta o faltante');
    }
    return presenceFromRequest;
};
const parseScore = (scoreFromRequest) => {
    if (!isNumber(scoreFromRequest) || !isScore(scoreFromRequest)) {
        throw new Error('Calificacion incorrecta o faltante');
    }
    return scoreFromRequest;
};
const toNewStudentEntry = (object) => {
    const newStudent = {
        name: parseName(object.name),
        presence: parsePresence(object.presence),
        score: parseScore(object.score)
    };
    return newStudent;
};
exports.default = toNewStudentEntry;
