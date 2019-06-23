import { NoteModel } from '../models/note-model';
import axios, { AxiosPromise } from 'axios';

const NOTES_URL = 'http://localhost:4000/notes';

export function getNotesList(): AxiosPromise {
    return axios.get(NOTES_URL);
}

export function getNote(id: number): AxiosPromise {
    return axios.get(`${NOTES_URL}/${id}`);
}

export function addNote(note: NoteModel): AxiosPromise {
    return axios.post(NOTES_URL, note);
}

export function updateNote(note: NoteModel): AxiosPromise {
    return axios.put(`${NOTES_URL}/${note.id}`, note);
}

export function deleteNote(id: number): AxiosPromise {
    return axios.delete(`${NOTES_URL}/${id}`);
}