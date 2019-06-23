import { NotesState } from './notes/notes.state';
import { createStore, applyMiddleware, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { NotesReducer } from './notes/notes.reducer';

export function configureStore(preloadedState: NotesState): Store<NotesState> {
    const store = createStore(NotesReducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

    console.log(store.getState());
    
    return store;
}