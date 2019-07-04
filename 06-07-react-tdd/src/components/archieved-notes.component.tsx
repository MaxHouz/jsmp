import * as React from 'react';
import { connect } from 'react-redux';
import { NotesState } from '../@store/notes/notes.state';
import { NoteItemComponent } from './note-item.component';
import { Card } from 'semantic-ui-react';
import { NoteModel } from '../models/note-model';
import * as noteActions from '../@store/notes/notes.actions';

interface ArchievedNotesComponentProps {
    notes: NoteModel[],
    error: string | null,
    search: string,
    updateNote: (note: NoteModel) => void,
    deleteNote: (id: number) => void
}

export class ArchievedNotesComponent extends React.Component<ArchievedNotesComponentProps, any> {

    private completeNote(note: NoteModel): void {
        this.props.updateNote({
            ...note,
            done: true
        });
    }

    private dearchieveNote(note: NoteModel): void {
        this.props.updateNote({
            ...note,
            archieved: false
        });
    }

    private deleteNote(id: number): void {
        this.props.deleteNote(id);
    }

    render() {
        const { notes, search } = this.props;
        return (
            <Card.Group className='notes'>
                {
                    notes.filter(note => note.archieved && (note.text.includes(search) || note.title.includes(search)))
                    .map(archievedNote => {
                        return <NoteItemComponent 
                                    note={archievedNote} 
                                    onNoteComplete={(note: NoteModel) => this.completeNote(note)}
                                    onNoteArchieve={() => {}}
                                    onNoteDearchieve={(note: NoteModel) => this.dearchieveNote(note)}
                                    onNoteDelete={(id: number) => this.deleteNote(id)}
                                    key={archievedNote.id}
                                >
                                    {archievedNote.text}
                                </NoteItemComponent>;
                    })
                }
            </Card.Group>
        )
    }
}

export function mapStateToProps(state: NotesState): NotesState {
    return {
      notes: state.notes,
      error: state.error,
      search: state.search
    }
}

export function mapDispatchToProps(dispatch: any) {
    const actions = {
        updateNote: (note: NoteModel) => dispatch(noteActions.updateNote(note)),
        deleteNote: (id: number) => dispatch(noteActions.deleteNote(id))
    }

    return { ...actions };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(ArchievedNotesComponent);