import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NoteItemComponent } from './note-item.component';

configure({adapter: new Adapter()});
describe('NoteItemComponents', () => {
    let component: any;
    const mockNote = {
        title: 'mockTitle',
        text: 'mockText',
        done: true,
        archieved: false,
        id: 4
    }
    const onNoteCompleteMock = jest.fn();
    const onNoteUncompleteMock = jest.fn();
    const onNoteArchieveMock = jest.fn();
    const onNoteDearchieveMock = jest.fn();
    const onNoteDeleteMock = jest.fn();

    beforeEach(() => {
        component = shallow(
            <NoteItemComponent 
                note={mockNote}
                onNoteComplete={onNoteCompleteMock}
                onNoteUncomplete={onNoteUncompleteMock}
                onNoteArchieve={onNoteArchieveMock}
                onNoteDearchieve={onNoteDearchieveMock}
                onNoteDelete={onNoteDeleteMock}
            />
        );
    })

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    })

    it('should complete note', () => {
        const mockUncompleteNote = {
            title: 'mockTitle',
            text: 'mockText',
            done: false,
            archieved: false,
            id: 4
        }
        const component = shallow(
            <NoteItemComponent 
                note={mockUncompleteNote}
                onNoteComplete={onNoteCompleteMock}
                onNoteUncomplete={onNoteUncompleteMock}
                onNoteArchieve={onNoteArchieveMock}
                onNoteDearchieve={onNoteDearchieveMock}
                onNoteDelete={onNoteDeleteMock}
            />
        );
        component.find('Button').at(0).simulate('click');

        expect(onNoteCompleteMock).toHaveBeenCalledWith(mockUncompleteNote);
    })

    it('should uncomplete note', () => {
        component.find('Button').at(0).simulate('click');

        expect(onNoteUncompleteMock).toHaveBeenCalledWith(mockNote);
    })

    it('should archieve note', () => {
        component.find('Button').at(1).simulate('click');

        expect(onNoteArchieveMock).toHaveBeenCalledWith(mockNote);
    })

    it('should dearchieve note', () => {
        const mockArchievedNote = {
            title: 'mockTitle',
            text: 'mockText',
            done: true,
            archieved: true,
            id: 4
        }
        const archievedNoteComponent = shallow(
            <NoteItemComponent 
                note={mockArchievedNote}
                onNoteComplete={onNoteCompleteMock}
                onNoteArchieve={onNoteArchieveMock}
                onNoteDearchieve={onNoteDearchieveMock}
                onNoteDelete={onNoteDeleteMock}
            />
            );
        archievedNoteComponent.find('Button').at(1).simulate('click');

        expect(onNoteDearchieveMock).toHaveBeenCalledWith(mockArchievedNote);
    })

    it('should delete note', () => {
        component.find('Button').at(2).simulate('click');

        expect(onNoteDeleteMock).toHaveBeenCalledWith(mockNote.id);
    })

})