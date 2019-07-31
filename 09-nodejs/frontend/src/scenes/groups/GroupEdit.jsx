import React, { PureComponent } from 'react';
import GroupForm from '../../components/GroupForm';

export default class GroupEdit extends PureComponent {
    handleGroupEdit = async (group) => {

    };

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#/">Home</a></li>
                                <li className="breadcrumb-item"><a href="#/groups">Groups</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit group</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <GroupForm 
                            onSubmit={this.handleGroupEdit} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}
