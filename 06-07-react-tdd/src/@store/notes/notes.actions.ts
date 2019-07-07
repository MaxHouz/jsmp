import { NoteModel } from '../../models/note-model';
import { NotesState } from './notes.state';
import * as notesApi from '../../api/notes-api';
import * as NotesActionTypes from './notes.action-types';
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';


export function getNotesList(): ThunkAction<Promise<Action>, NotesState, void, Action> {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const res = await notesApi.getNotesList();

            return dispatch(getNotesListSuccess(res.data));
        } catch {
            return dispatch(getNotesListError());
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

export function addNote(note: NoteModel): ThunkAction<Promise<Action>, NotesState, void, Action> {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const res = await notesApi.addNote(note);

            return dispatch(addNoteSuccess(res.data));
        } catch {
            return dispatch(addNoteError());
        }
    }
}

export function addNoteSuccess(payload: NoteModel): NotesActionTypes.AddNoteSuccess {
    return {
        type: NotesActionTypes.NotesActions.ADD_NOTE_SUCCESS,
        payload
    }
}

export function addNoteError(): NotesActionTypes.AddNoteError {
    return {
        type: NotesActionTypes.NotesActions.ADD_NOTE_ERROR,
        payload: 'Adding Note Failed'
    }
}

export function updateNote(note: NoteModel): ThunkAction<Promise<Action>, NotesState, void, Action> {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const res = await notesApi.updateNote(note);

            return dispatch(updateNoteSuccess(res.data));
        } catch {
            return dispatch(updateNoteError());
        }
    }
}

export function updateNoteSuccess(payload: NoteModel): NotesActionTypes.UpdateNoteSuccess {
    return {
        type: NotesActionTypes.NotesActions.UDPATE_NOTE_SUCCESS,
        payload
    }
}

export function updateNoteError(): NotesActionTypes.UpdateNoteError {
    return {
        type: NotesActionTypes.NotesActions.UPDATE_NOTE_ERROR,
        payload: 'Note Update Failed'
    }
}

export function deleteNote(id: number): ThunkAction<Promise<Action>, NotesState, void, Action> {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            await notesApi.deleteNote(id);

            return dispatch(deleteNoteSuccess(id));
        } catch {
            return dispatch(deleteNoteError());
        }
    }
}

export function deleteNoteSuccess(payload: number): NotesActionTypes.DeleteNoteSuccess {
    return {
        type: NotesActionTypes.NotesActions.DELETE_NOTE_SUCCESS,
        payload
    }
}

export function deleteNoteError(): NotesActionTypes.DeleteNoteError {
    return {
        type: NotesActionTypes.NotesActions.DELETE_NOTE_ERROR,
        payload: 'Note Delete Failed'
    }
}

export function search(payload: string): NotesActionTypes.Search {
    return {
        type: NotesActionTypes.NotesActions.SEARCH,
        payload
    }
}