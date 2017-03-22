import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionCode from 'material-ui/svg-icons/action/code';
import DeviceDeveloperMode from 'material-ui/svg-icons/device/developer-mode';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import {blue500, blue600, blue400} from 'material-ui/styles/colors';

import HomeComp from './HomeComp';
import ProjectsComp from './ProjectsComp';
import ResumeComp from './ResumeComp';

injectTapEventPlugin();


class MainComp extends Component {

    render() {

    const styles = {
        headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
        },
        paper: {
            minHeight: '300px',
            width: '90%',
            margin: '20px 5%',
            display: 'inline-block',
        },
        projectTab: {
            width: '50%',
            height: '70px',
            backgroundColor: blue600
        }
    };

    return (
        <Tabs initialSelectedIndex={1}>

            <Tab label="HOME" icon={<ActionHome />} >
                <Paper style={styles.paper} zDepth={1}>
                    <HomeComp />
                </Paper>
            </Tab>

            <Tab label="Projects" style={styles.projectTab} icon={<DeviceDeveloperMode />} >
                <Paper style={styles.paper} zDepth={1}>
                    <ProjectsComp />
                </Paper>
            </Tab>

            <Tab label="Resume" icon={<ActionDescription />} >
                <Paper style={styles.paper} zDepth={1}>
                    <ResumeComp data={this.props.data.resume} />
                </Paper>
            </Tab>

        </Tabs>
        );
    }
}

export default MainComp;
