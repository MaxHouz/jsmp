import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

jest.mock('./index', () => {
    return { store: {
        subscribe: jest.fn(),
        dispatch: jest.fn(),
        getState: jest.fn()
    }}; 
});
import { store } from './index';

jest.mock('./index');

configure({adapter: new Adapter()});
describe('App', () => {
    let component: any;

    beforeEach(() => {
        component = shallow(<App/>);
    })

    afterAll(() => {
        jest.unmock('./index');
    })

    it('should render component', () => {
        expect(component).toMatchSnapshot();
    })
})