import { NoteModel } from './../../models/note-model';
import * as notesApi from './__mocks__/notes-api';
import * as NotesActionTypes from './notes.action-types';
import { getNotesList, addNoteSuccess, addNoteError, updateNoteSuccess, updateNoteError, deleteNoteSuccess, deleteNoteError, search } from './notes.actions';

describe('notes actions', () => {

    describe('get notes list', () => {

        it('should update notes list on resolve', async() => {
            const dispatch = jest.fn();
            const getState = jest.fn();

            await getNotesList()(dispatch, getState, undefined);

            expect(dispatch).toHaveBeenCalledWith({
                payload: undefined,
                type: NotesActionTypes.NotesActions.GET_NOTES_LIST_SUCCESS
            });
        })

    })

    it('should return add note success action', () => {
        expect(addNoteSuccess({} as NoteModel)).toEqual({
            type: NotesActionTypes.NotesActions.ADD_NOTE_SUCCESS,
            payload: {}
        });
    })

    it('should return add note error action', () => {
        expect(addNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.ADD_NOTE_ERROR,
            payload: 'Adding Note Failed'
        });
    })

    it('should return update note success action', () => {
        expect(updateNoteSuccess({} as NoteModel)).toEqual({
            type: NotesActionTypes.NotesActions.UDPATE_NOTE_SUCCESS,
            payload: {}
        });
    })

    it('should return update note error action', () => {
        expect(updateNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.UPDATE_NOTE_ERROR,
            payload: 'Note Update Failed'
        });
    })


    it('should return delete note success action', () => {
        expect(deleteNoteSuccess(3)).toEqual({
            type: NotesActionTypes.NotesActions.DELETE_NOTE_SUCCESS,
            payload: 3
        });
    })

    it('should return delete note error action', () => {
        expect(deleteNoteError()).toEqual({
            type: NotesActionTypes.NotesActions.DELETE_NOTE_ERROR,
            payload: 'Note Delete Failed'
        });
    })

    it('should return search action', () => {
        expect(search('mockSearch')).toEqual({
            type: NotesActionTypes.NotesActions.SEARCH,
            payload: 'mockSearch'
        });
    })
})