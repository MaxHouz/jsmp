import mockAxios from 'axios';
import * as notesApi from './notes-api';

describe('Notes API', () => {
    const mockNote = {
        title: 'mockTitle',
        text: 'mockText',
        done: true,
        archieved: true,
        id: 3
    };

    describe('get notes list', () => {

        it('should make request for notes list', () => {
            notesApi.getNotesList();
    
            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:4000/notes');
        })

        it('should return promise', () => {
            expect(notesApi.getNotesList()).toEqual(Promise.resolve());
        })

    })

    describe('get note', () => {

        it('should make request for note', () => {
            notesApi.getNote(2);
    
            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:4000/notes/2');
        })

        it('should return promise', () => {
            expect(notesApi.getNote(2)).toEqual(Promise.resolve());
        })

    })

    describe('add note', () => {

        it('should make request to add note', () => {
            notesApi.addNote(mockNote);
    
            expect(mockAxios.post).toHaveBeenCalledWith('http://localhost:4000/notes', mockNote);
        })

        it('should return promise', () => {
            expect(notesApi.addNote(mockNote)).toEqual(Promise.resolve());
        })

    })

    describe('update note', () => {

        it('should make request to update note', () => {
            notesApi.updateNote(mockNote);
    
            expect(mockAxios.put)
                .toHaveBeenCalledWith(`http://localhost:4000/notes/${mockNote.id}`, mockNote);
        })

        it('should return promise', () => {
            expect(notesApi.updateNote(mockNote)).toEqual(Promise.resolve());
        })

    })

    describe('update note', () => {

        it('should make request to delete note', () => {
            notesApi.deleteNote(2);
    
            expect(mockAxios.delete).toHaveBeenCalledWith('http://localhost:4000/notes/2');
        })

        it('should return promise', () => {
            expect(notesApi.deleteNote(2)).toEqual(Promise.resolve());
        })

    })

})