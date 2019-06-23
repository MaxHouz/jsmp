import { NoteModel } from '../../models/note-model';
import { Action } from 'redux';

export enum NotesActions {
    GET_NOTES_LIST = '[Notes] GET_NOTES_LIST',
    GET_NOTES_LIST_SUCCESS = '[Notes] GET_NOTES_LIST_SUCCESS',
    GET_NOTES_LIST_ERROR = '[Notes] GET_NOTES_LIST_ERROR',

    GET_NOTE = '[Notes] GET_NOTE',
    GET_NOTE_SUCCESS = '[Notes] GET_NOTE_SUCCESS',
    GET_NOTE_ERROR = '[Notes] GET_NOTE_ERROR',

    ADD_NOTE = '[Notes] ADD_NOTE',
    ADD_NOTE_SUCCESS = '[Notes] ADD_NOTE_SUCCES',
    ADD_NOTE_ERROR = '[Notes] ADD_NOTE_ERROR',

    UPDATE_NOTE = '[Notes] UPDATE_NOTE',
    UDPATE_NOTE_SUCCESS = '[Notes] UDPATE_NOTE_SUCCESS',
    UPDATE_NOTE_ERROR = '[Notes] UPDATE_NOTE_ERROR',

    DELETE_NOTE = '[Notes] UPDATE_NOTE',
    DELETE_NOTE_SUCCESS = '[Notes] UDPATE_NOTE_SUCCESS',
    DELETE_NOTE_ERROR = '[Notes] UPDATE_NOTE_ERROR',
}

export interface GetNotesList extends Action<NotesActions.GET_NOTES_LIST> {
    type: NotesActions.GET_NOTES_LIST
}

export interface GetNotesListSuccess extends Action<NotesActions.GET_NOTES_LIST_SUCCESS>  {
    type: NotesActions.GET_NOTES_LIST_SUCCESS,
    payload: NoteModel[]
}

export interface GetNotesListError extends Action<NotesActions.GET_NOTES_LIST_ERROR>  {
    type: NotesActions.GET_NOTES_LIST_ERROR,
    payload: string
}

export interface GetNote extends Action<NotesActions.GET_NOTE>  {
    type: NotesActions.GET_NOTE
    payload: number
}

export interface GetNoteSuccess extends Action<NotesActions.GET_NOTE_SUCCESS>  {
    type: NotesActions.GET_NOTE_SUCCESS,
    payload: NoteModel
}

export interface GetNoteError extends Action<NotesActions.GET_NOTE_ERROR>  {
    type: NotesActions.GET_NOTE_ERROR
}

export interface AddNote extends Action<NotesActions.ADD_NOTE>  {
    type: NotesActions.ADD_NOTE,
    payload: NoteModel
}

export interface AddNoteSuccess extends Action<NotesActions.ADD_NOTE_SUCCESS>  {
    type: NotesActions.ADD_NOTE_SUCCESS
}

export interface AddNoteError extends Action<NotesActions.ADD_NOTE_ERROR>  {
    type: NotesActions.ADD_NOTE_ERROR
}

export interface UpdateNote extends Action<NotesActions.UPDATE_NOTE>  {
    type: NotesActions.UPDATE_NOTE,
    payload: NoteModel
}

export interface UpdateNoteSuccess extends Action<NotesActions.UDPATE_NOTE_SUCCESS>  {
    type: NotesActions.UDPATE_NOTE_SUCCESS
}

export interface UpdateNoteError extends Action<NotesActions.UPDATE_NOTE_ERROR>  {
    type: NotesActions.UPDATE_NOTE_ERROR
}

export interface DeleteNote extends Action<NotesActions.DELETE_NOTE>  {
    type: NotesActions.DELETE_NOTE,
    payload: number
}

export interface DeleteNoteSuccess extends Action<NotesActions.DELETE_NOTE_SUCCESS>  {
    type: NotesActions.DELETE_NOTE_SUCCESS
}

export interface DeleteNoteError extends Action<NotesActions.DELETE_NOTE_ERROR>  {
    type: NotesActions.DELETE_NOTE_ERROR
}

export type NoteActionsType = GetNotesList
 | GetNotesListSuccess
 | GetNotesListError
 | GetNote
 | GetNoteSuccess
 | GetNoteError
 | AddNote
 | AddNoteSuccess
 | AddNoteError
 | UpdateNote
 | UpdateNoteSuccess
 | UpdateNoteError
 | DeleteNote
 | DeleteNoteSuccess
 | DeleteNoteError;