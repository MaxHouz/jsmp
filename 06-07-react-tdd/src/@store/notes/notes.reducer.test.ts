import { NotesState, NotesInitialState } from './notes.state';
import { NotesActions, NoteActionsType } from './notes.action-types';
import { NotesReducer } from './notes.reducer';

describe('NotesReducer', () => {

    let res, expRes;
    let mockAction;
    let mockState;

    it('should update notes list and clear error on notes get success', () => {
        mockAction = {
            type: NotesActions.GET_NOTES_LIST_SUCCESS,
            payload: { data: 'mockPayload' }
        }

        expRes = {
            notes: mockAction.payload,
            error: null
        }
        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should set error on get notes error', () => {
        mockAction = {
            type: NotesActions.GET_NOTES_LIST_ERROR,
            payload: 'mockError'
        }

        expRes = {
            error: 'mockError'
        }
        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should set error on add note error', () => {
        mockAction = {
            type: NotesActions.ADD_NOTE_ERROR,
            payload: 'mockError'
        }

        expRes = {
            error: 'mockError'
        }
        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should set error on update note error', () => {
        mockAction = {
            type: NotesActions.UPDATE_NOTE_ERROR,
            payload: 'mockError'
        }

        expRes = {
            error: 'mockError'
        }
        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should set error on delete note error', () => {
        mockAction = {
            type: NotesActions.DELETE_NOTE_ERROR,
            payload: 'mockError'
        }

        expRes = {
            error: 'mockError'
        }
        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    
    it('should add note to store on add note success', () => {
        mockState = {
            notes: [],
            error: null,
            search: ''
        };
        mockAction = {
            type: NotesActions.ADD_NOTE_SUCCESS,
            payload: 'mockNote'
        }

        expRes = {
            notes: ['mockNote'],
            error: null,
            search: ''
        }
        res = NotesReducer(mockState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should update in note to store on update note success', () => {
        mockState = {
            notes: [
                {
                    id: 2,
                    title: 'mockTitle1'
                }
            ],
            error: null,
            search: ''
        };
        mockAction = {
            type: NotesActions.UDPATE_NOTE_SUCCESS,
            payload: {
                id: 2,
                title: 'mockTitle2'
            }
        }

        expRes = {
            notes: [{
                id: 2,
                title: 'mockTitle2'
            }],
            error: null,
            search: ''
        }
        res = NotesReducer(mockState as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should delete note from store on delete note success', () => {
        mockState = {
            notes: [{
                id: 1
            }],
            error: null,
            search: ''
        };
        mockAction = {
            type: NotesActions.DELETE_NOTE_SUCCESS,
            payload: 'mockNote'
        }

        expRes = {
            notes: [],
            error: null,
            search: ''
        }
        res = NotesReducer(mockState as NotesState, mockAction as NoteActionsType);

        expect(res).toEqual(expRes);
    })

    it('should add search query to store on search action', () => {
        mockAction = {
            type: NotesActions.SEARCH,
            payload: 'mockQuery'
        }

        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);
        expRes = {
            search: 'mockQuery'
        }

        expect(res).toEqual(expRes);
    })

    it('should not change state on unknown action', () => {
        mockAction = {
            type: 'unknownAction'
        }

        res = NotesReducer({} as NotesState, mockAction as NoteActionsType);
        expRes = {}

        expect(res).toEqual(expRes);
    })

    it('should set initial state if state is undefined', () => {
        mockAction = {
            type: 'unknownAction'
        }

        res = NotesReducer(undefined, mockAction as NoteActionsType);
        expRes = NotesInitialState;

        expect(res).toEqual(expRes);
    })
    
})  