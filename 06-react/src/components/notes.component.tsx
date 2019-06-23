import * as React from 'react';
import { connect } from 'react-redux';
import { NotesState } from '../@store/notes/notes.state';
import { NoteItemComponent } from './note-item.component';
import { Card } from 'semantic-ui-react';
import { NoteModel } from '../models/note-model';
import * as noteActions from '../@store/notes/notes.actions';

interface NotesComponentProps {
    notes: NoteModel[],
    error: string | null,
    updateNote: (note: NoteModel) => void,
    deleteNote: (id: number) => void
}

class NotesComponent extends React.Component<NotesComponentProps, any> {

    private completeNote(note: NoteModel): void {
        this.props.updateNote({
            ...note,
            done: true
        });
    }

    private archieveNote(note: NoteModel): void {
        this.props.updateNote({
            ...note,
            archieved: true
        });
    }

    private deleteNote(id: number): void {
        this.props.deleteNote(id);
    }

    render() {
        const { notes } = this.props;
        return (
            <Card.Group>
                {
                    notes.filter(note => !note.archieved)
                    .map(activeNote => {
                        return <NoteItemComponent 
                                    note={activeNote} 
                                    onNoteComplete={(note: NoteModel) => this.completeNote(note)}
                                    onNoteArchieve={(note: NoteModel) => this.archieveNote(note)}
                                    onNoteDearchieve={() => {}}
                                    onNoteDelete={(id: number) => this.deleteNote(id)}
                                    key={activeNote.id}
                                >
                                    {activeNote.text}
                                </NoteItemComponent>;
                    })
                }
            </Card.Group>
        )
    }
}

function mapStateToProps(state: NotesState): NotesState {
    return {
      notes: state.notes,
      error: state.error
    }
}

function mapDispatchToProps(dispatch: any) {
    const actions = {
        updateNote: (note: NoteModel) => dispatch(noteActions.updateNote(note)),
        deleteNote: (id: number) => dispatch(noteActions.deleteNote(id))
    }

    return { ...actions };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
(NotesComponent);