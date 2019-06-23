import { NoteModel } from '../../models/note-model';
import { NotesState } from './notes.state';
import * as notesApi from '../../api/notes-api';
import * as NotesActionTypes from './notes.action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';


export function getNotesList(): ThunkAction<Promise<Action>, NotesState, void, Action> {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const res = await notesApi.getNotesList();

            return dispatch(getNotesListSuccess(res.data));
        } catch {
            return dispatch(getNotesListError())
        }
    }
}

export function getNotesListSuccess(payload: NoteModel[]): NotesActionTypes.GetNotesListSuccess {
    return {
        type: NotesActionTypes.NotesActions.GET_NOTES_LIST_SUCCESS,
        payload
    }
}

export function getNotesListError(): NotesActionTypes.GetNotesListError {
    return {
        type: NotesActionTypes.NotesActions.GET_NOTES_LIST_ERROR,
        payload: 'Notes loading failed'
    }
}