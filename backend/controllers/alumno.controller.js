import { ModelStudent } from "../../models/alumnos.model.js";

ModelStudent.create([
    {
        "name": "Bicoin",
        "apepat": "Reyes",
        "apemat": "Martinez",
        "age": 21,
        "major": "IT",
    },
    {
        "name": "Anita",
        "apepat": "Barrera",
        "apemat": "Figueroa",
        "age": 21,
        "major": "IT",
    },
    {
        "name": "Sergio",
        "apepat": "Valles",
        "apemat": "Rojas",
        "age": 23,
        "major": "IT",
    },
    {
        "name": "El Mayo",
        "apepat": "Muñoz",
        "apemat": "Dominguez",
        "age": 23,
        "major": "IT",
    },
    {
        "name": "Alberto",
        "apepat": "Esparza",
        "apemat": "Martinez",
        "age": 38,
        "major": "IT",
    },
]);

export const test = () => console.log("Si jala")