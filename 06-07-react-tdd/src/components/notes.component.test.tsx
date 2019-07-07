import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NotesComponent, mapStateToProps, mapDispatchToProps } from './notes.component';
import { NotesState } from '../@store/notes/notes.state';
import { NoteModel } from '../models/note-model';

configure({adapter: new Adapter()});
describe('NotesComponent', () => {

     let component: any;
     let res, expRes;
     const mockNotes = [{
        title: 'mockTitleValue',
        text: 'mockTextValue',
        done: false,
        archieved: false,
        id: 3
     }]
     const searckMock='mock';
     const updateNoteMock = jest.fn();
     const deleteNoteMock = jest.fn();

     beforeEach(() => {
         component = shallow(
             <NotesComponent
                notes={mockNotes}
                error={null}
                search={searckMock}
                updateNote={updateNoteMock}
                deleteNote={deleteNoteMock}
             />
         )
     })

     it('should render component', () => {
        expect(component).toMatchSnapshot();
    })

    it('should update note state on complete', () => {
        component.find('NoteItemComponent').prop('onNoteComplete')(mockNotes[0]);
        expect(updateNoteMock).toHaveBeenCalledWith({
            ...mockNotes[0], 
            done: true
        })
    })

    it('should update note state on uncomplete', () => {
        component.find('NoteItemComponent').prop('onNoteUncomplete')(mockNotes[0]);
        expect(updateNoteMock).toHaveBeenCalledWith({
            ...mockNotes[0], 
            done: false
        })
    })

    it('should update note state on archieve', () => {
        component.find('NoteItemComponent').prop('onNoteArchieve')(mockNotes[0]);
        expect(updateNoteMock).toHaveBeenCalledWith({
            ...mockNotes[0], 
            archieved: true
        })
    })

    it('should delete note', () => {
        component.find('NoteItemComponent').prop('onNoteDelete')(10);
        expect(deleteNoteMock).toHaveBeenCalledWith(10)
    })

    it('should not dearchieve note', () => {
        const res = component.find('NoteItemComponent').prop('onNoteDearchieve')();
        expect(res).toEqual(undefined);
    })

    it('should map state to props', () => {
        const mockState = {
            notes: [],
            error: null,
            search: 'mockSearch'
        }
        
        expRes = {
            notes: mockState.notes,
            error: mockState.error,
            search: mockState.search
        }
        res = mapStateToProps(mockState as NotesState);

        expect(res).toEqual(expRes);
    })

    it('should not show archieved notes', () => {
        const mockArchievedNotes = [{
            title: 'mockTitleValue',
            text: 'mockTextValue',
            done: false,
            archieved: true,
            id: 3
         }]

         const component = shallow(
            <NotesComponent
               notes={mockArchievedNotes}
               error={null}
               search={searckMock}
               updateNote={updateNoteMock}
               deleteNote={deleteNoteMock}
            />
        )

        res = component.find('NoteItemComponent').exists();

        expect(res).toBeFalsy;
    })

    it('should not show notes that do not match search query', () => {
         const component = shallow(
            <NotesComponent
               notes={mockNotes}
               error={null}
               search={'randomQuery'}
               updateNote={updateNoteMock}
               deleteNote={deleteNoteMock}
            />
        )

        res = component.find('NoteItemComponent').exists();

        expect(res).toBeFalsy;
    })

    it('should map updateNote dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).updateNote({} as NoteModel);
        
        expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    })

    it('should map deleteNote dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).deleteNote(3);
        
        expect(typeof dispatch.mock.calls[0][0]).toBe('function');
    })

})