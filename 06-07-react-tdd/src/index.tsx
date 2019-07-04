import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { configureStore } from './@store/configure-store';
import { NotesInitialState } from './@store/notes/notes.state';
import { getNotesList } from './@store/notes/notes.actions';

export const store = configureStore(NotesInitialState);
store.dispatch<any>(getNotesList());

ReactDOM.render(<App/>, document.getElementById('root'));
