import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import SolarMate from './SolarMate';
import ReflowOven from './ReflowOven';
import TrumpWall from './TrumpWall';
import TwoDoFHeli from './TwoDoFHeli';
import PageNotFound from '../PageNotFound';
import s from '../../styles/exampleComponent.style';

const ProjectsText = () => (
    <p style={s.p}>
      This is an example page. Refresh the page or copy/paste the url to
      test out the redirect functionality (this same page should load
        after the redirect).
    </p>
  );

class Projects extends React.Component {
    render(){
        return (
          <Switch>
            <Route
              exact path="/projects/solar-mate"
              render={({ location }) => (
                <div>
                  <SolarMate location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/trump-wall"
              render={({ location }) => (
                <div>
                  <ProjectsText />
                  <TrumpWall location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/reflow-oven"
              render={({ location }) => (
                <div>
                  <ProjectsText />
                  <ReflowOven location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/2-dof-heli"
              render={({ location }) => (
                <div>
                  <ProjectsText />
                  <TwoDoFHeli location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects"
              render={() => (
                <div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/solar-mate"
                    >Solar Mate</Interactive>
                  </div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/trump-wall"
                    >Trump Wall</Interactive>
                  </div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/reflow-oven"
                    >Reflow Oven</Interactive>
                  </div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/2-dof-heli"
                    >2 degrees of freedom helicopter</Interactive>
                  </div>
                </div>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        );
    }
}

export default Projects;