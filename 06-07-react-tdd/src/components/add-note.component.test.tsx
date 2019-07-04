import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddNoteComponent, mapDispatchToProps } from './add-note.component';
import { NoteModel } from '../models/note-model';
import * as noteActions from '../@store/notes/notes.actions';

configure({adapter: new Adapter()});
describe('AddNoteComponent', () => {
    let component: any;
    const onAddNoteMock = jest.fn();
    const mockEvent = {
        target: {
            value: 'mockValue'
        }
    }

    beforeEach(() => {
        component = shallow(
            <AddNoteComponent
                addNote={onAddNoteMock}
            />
        )
    })

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    })

    it('should update title value on change', () => {
        component.find('#note-form-title').simulate('change', mockEvent);
        component.update();

        expect(component.state().titleValue).toBe(mockEvent.target.value);
    })

    it('should update text value on change', () => {
        component.find('#note-form-text').simulate('change', mockEvent);
        component.update();

        expect(component.state().textValue).toBe(mockEvent.target.value);
    })

    it('should add note', () => {
        component.state().titleValue = 'mockTitleValue';
        component.state().textValue = 'mockTextValue';
        component.find('Button').at(0).simulate('click');
        const newNoteMock = {
            title: 'mockTitleValue',
            text: 'mockTextValue',
            done: false,
            archieved: false
        }

        expect(onAddNoteMock).toHaveBeenCalledWith(newNoteMock);
    })

    it('should set empty text value after note add', () => {
        component.state().titleValue = 'mockTitleValue';
        component.state().textValue = 'mockTextValue';
        component.find('Button').at(0).simulate('click');

        expect(component.state().textValue).toBe('');
    })

    it('should set empty title value after note add', () => {
        component.state().titleValue = 'mockTitleValue';
        component.state().textValue = 'mockTextValue';
        component.find('Button').at(0).simulate('click');

        expect(component.state().titleValue).toBe('');
    })

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).addNote({} as NoteModel);
        
        expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    })

})