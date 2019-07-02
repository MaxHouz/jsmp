import { NotesState } from './notes/notes.state';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from './configure-store';
import { NotesReducer } from './notes/notes.reducer';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

describe('configure store', () => {

    beforeEach(() => {
        configureStore({} as NotesState);
    })

    it('should create store', () => {
        expect(createStore).toHaveBeenCalledWith(NotesReducer, {}, 'composed');
    })

    it('should compose middleware with dev tools', () => {
        expect(composeWithDevTools).toHaveBeenCalledWith('mockMiddleware');
    })

    it('should apply thunk middleware', () => {
        expect(applyMiddleware).toHaveBeenCalledWith(thunkMiddleware);
    })

    it('should return created store', () => {
        expect(configureStore({} as NotesState)).toBe('createdMockStore');
    })
})