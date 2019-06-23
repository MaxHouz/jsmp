import * as React from 'react';
import { NoteModel } from '../models/note-model';
import { Card, Button } from 'semantic-ui-react'

interface NoteProps {
    note: NoteModel,
    onNoteComplete: (note: NoteModel) => void,
    onNoteArchieve: (note: NoteModel) => void,
    onNoteDearchieve: (note: NoteModel) => void,
    onNoteDelete: (id: number) => void
}

export class NoteItemComponent extends React.Component<NoteProps> {
    render() {
        const { title, text, done, archieved, id } = this.props.note;

        return (
            <Card>
                <Card.Content>
                <Card.Header textAlign="center">{title}</Card.Header>
                <Card.Description>{text}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button
                        onClick={() => this.props.onNoteComplete(this.props.note)}
                        icon="check" 
                        color="green" 
                        disabled={done}>
                    </Button>
                    {
                        archieved 
                        ? (<Button
                                onClick={() => this.props.onNoteDearchieve(this.props.note)} 
                                icon="archive" 
                                color="teal" 
                                label="Dearchieve">
                          </Button>)
                        : (<Button
                                onClick={() => this.props.onNoteArchieve(this.props.note)} 
                                icon="archive" 
                                color="teal" 
                                label="Archieve">
                          </Button>)
                    }
                    <Button
                    onClick={() => this.props.onNoteDelete(id as number)} 
                        icon="remove" 
                        color="red" 
                        floated="right">
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}