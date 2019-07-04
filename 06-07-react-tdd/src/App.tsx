import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotesComponent from './components/notes.component';
import { Provider } from 'react-redux';
import ArchievedNotesComponent from './components/archieved-notes.component';
import { HeaderComponent } from './components/header.component';
import EditNoteCompenent from './components/edit-note.component';
import { store } from './index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderComponent/>
        <Switch>
          <Route
            path="/" 
            component={NotesComponent}
            exact
          />
          <Route
            path="/archieve" 
            component={ArchievedNotesComponent} 
          />
          <Route
            path="/edit/:id"
            component={EditNoteCompenent}
          />
        </Switch> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;
