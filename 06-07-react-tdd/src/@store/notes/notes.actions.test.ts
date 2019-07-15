import { NoteModel } from './../../models/note-model';
import * as NotesActionTypes from './notes.action-types';
import * as noteActions from './notes.actions';

describe('notes actions', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    afterEach(() => {
        jest.resetModules();
    })

    describe('get notes list', () => {

        it('should update notes list on resolve', async() => {
            jest.doMock('../../api/notes-api', () => ({
                getNotesList: () => Promise.resolve([]),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.getNotesList()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.GET_NOTES_LIST_SUCCESS
            });
        });

        it('should set error to state on reject', async() => {
            jest.doMock('../../api/notes-api', () => ({
                getNotesList: () => Promise.reject('ERR'),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.getNotesList()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 'Notes loading failed',
                type: NotesActionTypes.NotesActions.GET_NOTES_LIST_ERROR
            });
        })

    })


    describe('add note', () => {
        
        it('should update state with new note on resolve', async() => {
            jest.doMock('../../api/notes-api', () => ({
                addNote: () => Promise.resolve([]),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.addNote()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.ADD_NOTE_SUCCESS
            });
        });

        it('should set error to state on reject', async() => {
            jest.doMock('../../api/notes-api', () => ({
                addNote: () => Promise.reject('ERR'),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.addNote()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 'Adding Note Failed',
                type: NotesActionTypes.NotesActions.ADD_NOTE_ERROR
            });
        })

    })

    describe('update note', () => {

        it('should update state with updated on resolve', async() => {
            jest.doMock('../../api/notes-api', () => ({
                updateNote: () => Promise.resolve([]),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.updateNote()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.UDPATE_NOTE_SUCCESS
            });
        });

        it('should set error to state on reject', async() => {
            jest.doMock('../../api/notes-api', () => ({
                updateNote: () => Promise.reject('ERR'),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.updateNote()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 'Note Update Failed',
                type: NotesActionTypes.NotesActions.UPDATE_NOTE_ERROR
            });
        })

    })

    describe('delete note', () => {


        it('should delete note from state on resolve', async() => {
            jest.doMock('../../api/notes-api', () => ({
                deleteNote: () => Promise.resolve([]),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.deleteNote(2)(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 2,
                type: NotesActionTypes.NotesActions.DELETE_NOTE_SUCCESS
            });
        });

        it('should set error to state on reject', async() => {
            jest.doMock('../../api/notes-api', () => ({
                deleteNote: () => Promise.reject('ERR'),
            }));
            const noteActions = require('./notes.actions')

            await noteActions.deleteNote(2)(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 'Note Delete Failed',
                type: NotesActionTypes.NotesActions.DELETE_NOTE_ERROR
            });
        })

    })

    it('should return add note success action', () => {
        expect(noteActions.addNoteSuccess({} as NoteModel)).toEqual({
            type: NotesActionTypes.NotesActions.ADD_NOTE_SUCCESS,
            payload: {}
        });
    })

    it('should return add note error action', () => {
        expect(noteActions.addNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.ADD_NOTE_ERROR,
            payload: 'Adding Note Failed'
        });
    })

    it('should return update note success action', () => {
        expect(noteActions.updateNoteSuccess({} as NoteModel)).toEqual({
            type: NotesActionTypes.NotesActions.UDPATE_NOTE_SUCCESS,
            payload: {}
        });
    })

    it('should return update note error action', () => {
        expect(noteActions.updateNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.UPDATE_NOTE_ERROR,
            payload: 'Note Update Failed'
        });
    })


    it('should return delete note success action', () => {
        expect(noteActions.deleteNoteSuccess(3)).toEqual({
            type: NotesActionTypes.NotesActions.DELETE_NOTE_SUCCESS,
            payload: 3
        });
    })

    it('should return delete note error action', () => {
        expect(noteActions.deleteNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.DELETE_NOTE_ERROR,
            payload: 'Note Delete Failed'
        });
    })

    it('should return search action', () => {
        expect(noteActions.search('mockSearch')).toEqual({
            type: NotesActionTypes.NotesActions.SEARCH,
            payload: 'mockSearch'
        });
    })
})