import React from 'react';
import { Route, Switch } from 'react-router';
import App from './pages/Home';
import Profile from './pages/Profile';
import PostAJob from './component/PostAJob';
import NavigationHeader from './component/NavigationHeader';
import JobsCard from './pages/JobsCard';
import EmployeeCard from './pages/EmployeeCard';
import MessageAndRedirectCard from './component/MessageAndRedirectCard';
import MessageAfterJobPost from './component/MessageAfterJobPost';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <NavigationHeader>
                    <Route exact path="/" component={App} />
                    <Route exact path="/job" component={JobsCard} />
                    <Route exact path="/employee" component={EmployeeCard} />
                    <Route exact path="/submit/message" component={MessageAndRedirectCard} />
                    <Route exact path="/submit/afterjobpost" component={MessageAfterJobPost} />
                    <Route exact path="/postjob" component={PostAJob} />
                    <Route exact path="/profile" component={Profile} />
                </NavigationHeader>
            </Switch>
        );
    }
};
export default Routes;
