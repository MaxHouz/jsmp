import * as React from 'react';
import { connect } from 'react-redux';
import { NotesState } from '../@store/notes/notes.state';

export class NotesComponent extends React.Component<NotesState, any> {
    render() {
        const notes = this.props.notes;
        const error = this.props.error || 'No Error';
        
        return (
            <div>
                <h1>{error}</h1>
                {notes.map(note => <div>{note.text}</div>)}
            </div>
        )
    }
}

function mapStateToProps(state: NotesState): NotesState {
    return {
      notes: state.notes,
      error: state.error
    }
}

export default connect(mapStateToProps)(NotesComponent);