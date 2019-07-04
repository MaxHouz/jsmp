import { NoteModel } from './../../models/note-model';
import * as NotesActionTypes from './notes.action-types';
import * as noteActions from './notes.actions';

describe('notes actions', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    describe('get notes list', () => {

        it('should update notes list on resolve', async() => {
            await noteActions.getNotesList()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.GET_NOTES_LIST_SUCCESS
            });
        })

    })


    describe('add note', () => {
        
        it('should update state with new note on resolve', async() => {
            await noteActions.addNote({} as NoteModel)(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.ADD_NOTE_SUCCESS
            });
        })

    })

    describe('update note', () => {

        it('should update state with updated on resolve', async() => {
            await noteActions.updateNote({} as NoteModel)(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.UDPATE_NOTE_SUCCESS
            });
        })

    })

    describe('delete note', () => {

        it('should delete note from state on resolve', async() => {
            await noteActions.deleteNote(3)(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: 3,
                type: NotesActionTypes.NotesActions.DELETE_NOTE_SUCCESS
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