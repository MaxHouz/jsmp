import { NotesState, NotesInitialState } from "./notes.state";
import { NoteActionsType, NotesActions } from "./notes.action-types";

export function NotesReducer(state: NotesState = NotesInitialState, action: NoteActionsType): NotesState {
    switch(action.type) {
        case NotesActions.GET_NOTES_LIST: {
            return {
                ...state
            }
        }
        case NotesActions.GET_NOTES_LIST_SUCCESS: {
            console.log(action.payload);
            return {
                ...state,
                notes: action.payload
            }
        }
        case NotesActions.GET_NOTES_LIST_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}