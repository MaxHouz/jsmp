import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchComponent, mapStateToProps, mapDispatchToProps } from './search.component';
import { NotesState } from '../@store/notes/notes.state';
import * as NotesActionTypes from '../@store/notes/notes.action-types';

configure({adapter: new Adapter()});
describe('SearchComponent', () => {
    let component: any;
    let res, expRes;
    const mockSearchString = 'mockSearchQuery';
    const mockSearch = jest.fn();
    const mockEvent = {
        target: {
            value: 'mockValue'
        }
    }

    beforeEach(() => {
        component = shallow(
            <SearchComponent
                searchString={mockSearchString}
                search={mockSearch}
            />
        )
    })

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    })

    it('should update search value on change', () => {
        component.find('input').simulate('change', mockEvent);
        component.update();

        expect(component.state().searchValue).toBe(mockEvent.target.value);
    })

    it('should perform search', () => {
        component.state().searchValue = 'mockSearchValue';
        component.find('Button').at(0).simulate('click');

        expect(mockSearch).toHaveBeenCalledWith('mocksearchvalue');
    })

    it('should clear search state', () => {
        component.state().searchValue = 'mockSearchValue';
        component.find('Button').at(1).simulate('click');

        expect(mockSearch).toHaveBeenCalledWith('');
    })

    it('should hide clear button if there is no search in store', () => {
        const component = shallow(
            <SearchComponent
                searchString={''}
                search={mockSearch}
            />
        )
        
        res = component.find('Button').at(1).exists();

        expect(res).toBeFalsy();
    })

    it('should map state to props', () => {
        const mockState = {
            search: 'mockSearch'
        }
        
        expRes = {
            searchString: mockState.search
        }
        res = mapStateToProps(mockState as NotesState);

        expect(res).toEqual(expRes);
    })
    
    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).search('mockQuery');
        
        expRes = {
            type: NotesActionTypes.NotesActions.SEARCH,
            payload: 'mockQuery'
        }
        res = dispatch.mock.calls[0][0];

        expect(res).toEqual(expRes);
    })

})