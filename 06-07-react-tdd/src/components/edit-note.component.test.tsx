import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditNoteCompenent, mapDispatchToProps } from './edit-note.component';
import { NoteModel } from '../models/note-model';

configure({adapter: new Adapter()});
describe('EditNoteCompenent', () => {
    let component: any;
    const editNoteMock = jest.fn();
    const routerMock = {
        params: {
            id: 4
        }
    }
    const mockEvent = {
        target: {
            value: 'mockValue'
        }
    }
    const historyMock = {
        push: jest.fn()
    }

    beforeEach(() => {
        component = shallow(
            <EditNoteCompenent
                editNote={editNoteMock}
                // @ts-ignore
                match={routerMock}
                // @ts-ignore
                history={historyMock}
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

    it('should edit note', () => {
        component.state().titleValue = 'mockTitleValue';
        component.state().textValue = 'mockTextValue';
        component.state().note = {
            done: true,
            archieved: true,
            id: 3
        }

        component.find('Button').at(0).simulate('click');
        const newNoteMock = {
            title: 'mockTitleValue',
            text: 'mockTextValue',
            done: true,
            archieved: true,
            id: 3
        }

        expect(editNoteMock).toHaveBeenCalledWith(newNoteMock);
    })

    it('should navigate to home page after note edit', () => {
        component.state().note = {
            done: true,
            archieved: true,
            id: 3
        }

        component.find('Button').at(0).simulate('click');
        expect(historyMock.push).toHaveBeenCalledWith('/');
    })

    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).editNote({} as NoteModel);
        
        expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    })
    
})