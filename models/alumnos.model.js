import { Schema, model } from 'mongoose'

const SchemaStudents = new Schema({
    name: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    },
    apemat: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

export const ModelStudent = new model("Alumnos Reprobados", SchemaStudents)