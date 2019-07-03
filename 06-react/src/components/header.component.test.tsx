import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HeaderComponent } from './header.component';

configure({adapter: new Adapter()});
describe('HeaderComponent', () => {

    it('should render component', () => {
        const component = shallow(<HeaderComponent/>);

        expect(component).toMatchSnapshot();
    })

    it('should toggle open note state', () => {
        const component = shallow(<HeaderComponent/>);
        component.find('.add-note__button').simulate('click');
        component.update();

        expect(component.state().addNoteOpen).toEqual(true);
    })
})