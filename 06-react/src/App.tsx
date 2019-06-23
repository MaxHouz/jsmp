import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NotesComponent from './components/notes.component';
import { configureStore } from './@store/configure-store';
import { Provider } from 'react-redux';
import { getNotesList } from './@store/notes/notes.actions';
import { NotesInitialState } from './@store/notes/notes.state';
import AddNoteCompenent from './components/add-note.component';

const store = configureStore(NotesInitialState);
store.dispatch<any>(getNotesList());
console.log(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <AddNoteCompenent/>
      <BrowserRouter>
        <Route
          path="/" 
          component={NotesComponent} 
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
