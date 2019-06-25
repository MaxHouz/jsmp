import * as React from 'react';
import { connect } from 'react-redux';
import { getNote } from '../api/notes-api';
import { NoteModel } from '../models/note-model';
import { RouteComponentProps } from 'react-router';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import * as noteActions from '../@store/notes/notes.actions';

interface EditNoteParams {
    id: string;
}

interface EditNoteComponentProps extends RouteComponentProps<EditNoteParams> {
    editNote: (note: NoteModel) => void,
}

interface EditNoteCompenentState {
    note: NoteModel;
    titleValue: string;
    textValue: string;
}

export class EditNoteCompenent extends React.Component<EditNoteComponentProps, EditNoteCompenentState> {

    constructor(props: EditNoteComponentProps) {
        super(props);
    
        this.state = {
            // @ts-ignore
            note: null,
            titleValue: '',
            textValue: ''
        };
      }

    componentDidMount() {
        const id =  this.props.match.params.id;

        getNote(parseInt(id))
            .then(res => this.setState(
                {   
                    note: res.data,
                    titleValue: res.data.title,
                    textValue: res.data.text
                }
            ));
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

    private editNote(): void{
        const { done, archieved, id } = this.state.note;

        this.props.editNote(
            new NoteModel(
                this.state.titleValue,
                this.state.textValue,
                done,
                archieved,
                id
            )
        )

        this.props.history.push('/');
    }
    render() {
        return (
            <Form className="edit-note-form">
                <h1>Edit note</h1>
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
                    onClick={() => this.editNote()}
                    disabled={!this.state.titleValue || !this.state.textValue}
                >
                    Save   
                </Button>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    const actions = {
        editNote: (note: NoteModel) => dispatch(noteActions.updateNote(note))
    }

    return { ...actions };
}

export default connect(
    undefined, 
    mapDispatchToProps)
(EditNoteCompenent);