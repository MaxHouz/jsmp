import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditNoteCompenent, mapDispatchToProps } from './edit-note.component';
import { getNote } from './__mocks__/notes-api';

configure({adapter: new Adapter()});
describe('EditNoteCompenent', () => {
    let component: any;
    const editNoteMock = jest.fn();
    const routerMock = {
        params: {
            id: 4
        }
    }
    const mockResponse = {
        data: {
            title: 'mockTitle',
            text: 'mockText'
        }
    }

    beforeEach(() => {
        component = shallow(
            <EditNoteCompenent
                editNote={editNoteMock}
                // @ts-ignore
                match={routerMock}
            />
        )
    })

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    })

})