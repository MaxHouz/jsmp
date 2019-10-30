import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar';
import Devices from './scenes/devices/Devices';
import DeviceAdd from './scenes/devices/DeviceAdd';
import DeviceEdit from './scenes/devices/DeviceEdit';
import DeviceLog from './scenes/devices/DeviceLog';
import Groups from './scenes/groups/Groups';
import GroupAdd from './scenes/groups/GroupAdd';
import GroupEdit from './scenes/groups/GroupEdit';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <NavBar />
                    </div>

                    <Switch>
                        <Route path="/devices" exact component={Devices} />
                        <Route path="/devices/add" exact component={DeviceAdd} />
                        <Route path="/devices/edit/:id" component={DeviceEdit} />
                        <Route path="/devices/log/:id" component={DeviceLog} />
                        <Route path="/groups" exact component={Groups} />
                        <Route path="/groups/add" exact component={GroupAdd} />
                        <Route path="/groups/edit/:id" exact component={GroupEdit} />
                        <Redirect from="/" to="/devices" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;