import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { groupPropType } from '../constants';

export default class GroupForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            devices: [],
            selectedDevices: []
        }
    }

    render() {
        return (<div>Group Form</div>);
    }
}

GroupForm.defaultProps = {
    group: {
        name: '',
        devices: []
    }
};

GroupForm.propTypes = {
    group: groupPropType,
    onSubmit: PropTypes.func.isRequired
};
