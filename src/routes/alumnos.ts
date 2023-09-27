import express from "express";
import * as alumnoServices from "../services/alumnosServices"
import toNewStudentEntry from "../utils/utils";

const router = express.Router();

// Devuelve todos los datos de alumnos
router.get("/", (_req, res) => {
    res.send(alumnoServices.getEntries());
});

// Devuleve alumno por id
router.get("/:id", (req, res) => {
    const alumno = alumnoServices.findById(+req.params.id);
    return alumno != null ? res.send(alumno) : res.sendStatus(404)
});

// Agregar nuevo alumno
router.post("/", (req, res) => {

    try {

        const newStudenEntry = toNewStudentEntry(req.body);
        const addedStudentEntry = alumnoServices.addStudent(newStudenEntry);
        res.json(addedStudentEntry);

    } catch (error: any) {
        res.status(404).send(error.message);
    }
});

// Borrar alumno
router.delete("/:id", (req, res) => {
    const alumno = alumnoServices.deleteStudent(+req.params.id);
    return alumno != null ? res.send(alumno) : res.sendStatus(404);
});

// Actualizar Alumno
router.put("/:id", (req, res) => {
    const alumnos = alumnoServices.updateStudent(+req.params.id, req.body);
    return alumnos != null ? res.send(alumnos) : res.sendStatus(404);
});

// Lista de alumnos por tipo de curso
router.get("/:course", (req, res) => {
    const alumnos = alumnoServices.findByCourse(req.params.course);
    return alumnos != null ? res.send(alumnos) : res.sendStatus(404);
});

export default router;