import { NotesState, NotesInitialState } from "./notes.state";
import { NoteActionsType, NotesActions } from "./notes.action-types";

export function NotesReducer(state: NotesState = NotesInitialState, action: NoteActionsType): NotesState {
    switch(action.type) {
        case NotesActions.GET_NOTES_LIST_SUCCESS: {
            return {
                ...state,
                notes: action.payload,
                error: null
            }
        }
        case NotesActions.GET_NOTES_LIST_ERROR:
        case NotesActions.ADD_NOTE_ERROR:
        case NotesActions.UPDATE_NOTE_ERROR:
        case NotesActions.DELETE_NOTE_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case NotesActions.ADD_NOTE_SUCCESS: {
            state.notes.push(action.payload);

            return {
                ...state,
                notes: [...state.notes],
                error: null
            }
        }
        case NotesActions.UDPATE_NOTE_SUCCESS: {
            const updatedNote = action.payload;
            const index = state.notes.findIndex(note => note.id === updatedNote.id);
            state.notes.splice(index, 1, updatedNote);
            return {
                ...state,
                notes: [...state.notes],
                error: null
            }
        }
        case NotesActions.DELETE_NOTE_SUCCESS: {
            const index = state.notes.findIndex(note => note.id === action.payload);
            state.notes.splice(index, 1);
            return {
                ...state,
                notes: [...state.notes],
                error: null
            }
        }
        default: {
            return state;
        }
    }
}