import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { groupPropType } from '../constants';
import { getDevices } from '../api';

export default class GroupForm extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            devices: [],
            selectedDevices: []
        }
    }

    componentDidMount() {
        this.loadDevices();
    }

    loadDevices = async () => {
        // TODO: add devices from group to selectedDevices
        this.setState({
            devices: await getDevices()
        })
    }

    addDevice = (event) => {
        const {devices, selectedDevices} = this.state;
        const deviceId = event.target.value;
        const index = devices.findIndex(device => device.id === deviceId);
        const selectedDevice = devices.splice(index, 1);
        event.target.value = null;
        this.setState({
            devices: [...devices],
            selectedDevices: [...selectedDevices, selectedDevice[0]]
        });
    }

    removeDevice = (id) => {
        const {devices, selectedDevices} = this.state;
        const index = selectedDevices.findIndex(device => device.id === id);
        const removedDevice = selectedDevices.splice(index, 1);

        this.setState({
            devices: [...devices, removedDevice[0]],
            selectedDevices: [...selectedDevices]
        });
    };

    handleCancel = () => {
        window.history.back();
    }

    addGroup = () => {
        // updating groups logic
        window.history.back();
    }

    render() {
        const {group} = this.props;
        const {devices, selectedDevices} = this.state;

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="deviceName">Device Name</label>
                    <input type="text"
                            className="form-control"
                            id="groupName"
                            name="groupName"
                            placeholder="Group Name"
                            required
                            defaultValue={group.name}
                    />
                </div>
                <div className="form-group">
                    <label>Add devices to group</label>
                    <select className="form-control"
                            onChange={this.addDevice}
                    >
                        <option value={null}>
                            Select device
                        </option>
                        {   
                            devices.filter(device => !device.groupId)
                                .map(device => {
                                    return (
                                        <option
                                            value={device.id}
                                            key={device.id}
                                        >
                                            {device.name}
                                        </option>
                                    )
                                })
                        }
                    </select>
                </div>
                <ul className="list-group" style={{marginBottom:'1.5rem'}}>
                    {
                        !!selectedDevices.length && selectedDevices.map((device, index) =>
                        <li className="list-group-item" key={index}>
                            {device.name}
                            <button type="button" 
                                    className="close" 
                                    index={index} 
                                    aria-label="Close" 
                                    onClick={() => {this.removeDevice(device.id)}}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    )}
                </ul>

                <div className="float-right">
                    <button 
                            type="submit" 
                            className="btn btn-primary mr-2"
                            onClick={this.addGroup}
                    >
                        Submit  
                    </button>
                    <button type="button" 
                            className="btn btn-default" 
                            onClick={this.handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        );
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
