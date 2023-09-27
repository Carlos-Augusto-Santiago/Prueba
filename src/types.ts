export type Presence = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
export type Score = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Course = "Por asistencia" | "Por calificacion" | "Mixto";
export type Approved = "Aprobado" | "No aprobado";

export interface AlumnosEntry {
    id: number;
    name: string;
    presence: Presence;
    score: Score;
    course: Course;
    approved: Approved;
}

export type NewStudentEntry = Omit<AlumnosEntry, 'id'>;
