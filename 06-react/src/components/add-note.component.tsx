import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import * as noteActions from '../@store/notes/notes.actions';
import { NoteModel } from '../models/note-model';

interface AddNoteComponentProps {
    addNote: (note: NoteModel) => void
}

interface AddNoteComponentState {
    titleValue: string;
    textValue: string
}

export class AddNoteComponent extends React.Component<AddNoteComponentProps, AddNoteComponentState> {

    constructor(props: AddNoteComponentProps) {
        super(props);
        this.state = {
            titleValue: '',
            textValue: ''
        };
      }
    
    private updateTitleValue(event: any): void {
        this.setState({
            titleValue: event.target.value
        });
    }

    private updateTextValue(event: any): void {
        this.setState({
            textValue: event.target.value
        });
    }
    
    private addNote(): void {
        this.props.addNote(
            new NoteModel(
                this.state.titleValue,
                this.state.textValue,
                false,
                false
            )
        )
        this.setState({
            titleValue: '',
            textValue: ''
        })
    }

    render() {
        return (
            <Form>
                <Form.Group>
                <Form.Field
                    id='note-form-title'
                    control={Input}
                    placeholder='Title'
                    className='add-note__title'
                    value={this.state.titleValue}
                    onChange={(evt: any) => this.updateTitleValue(evt)}
                />
                </Form.Group>
                <Form.Field
                    id='note-form-text'
                    control={TextArea}
                    placeholder='Note body'
                    className='add-note__text'
                    value={this.state.textValue}
                    onChange={(evt: any) => this.updateTextValue(evt)}
                />
                <Button primary
                    onClick={() => this.addNote()}
                    disabled={!this.state.titleValue || !this.state.textValue}
                >
                    Add Note    
                </Button>
            </Form>
        )
    }
}

export function mapDispatchToProps(dispatch: any) {
    const actions = {
        addNote: (note: NoteModel) => dispatch(noteActions.addNote(note))
    }

    return { ...actions };
}

export default connect(
    undefined, 
    mapDispatchToProps)
(AddNoteComponent);