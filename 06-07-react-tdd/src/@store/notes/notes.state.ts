import { NoteModel } from '../../models/note-model';

export interface NotesState {
    notes: NoteModel[],
    error: string | null,
    search: string
}

export const NotesInitialState: NotesState = {
    notes: [],
    error: null,
    search: ''
}
