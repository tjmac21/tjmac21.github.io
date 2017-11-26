import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import SolarMate from './SolarMate';
import ReflowOven from './ReflowOven';
import TrumpWall from './TrumpWall';
import TwoDoFHeli from './TwoDoFHeli';
import MagnetCar from './MagnetCar';
import WatchThrone from './WatchThrone';
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
                  <TrumpWall location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/reflow-oven"
              render={({ location }) => (
                <div>
                  <ReflowOven location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/2-dof-heli"
              render={({ location }) => (
                <div>
                  <TwoDoFHeli location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/magnet-car"
              render={({ location }) => (
                <div>
                  <MagnetCar location={location} />
                </div>
              )}
            />
            <Route
              exact path="/projects/watch-the-throne"
              render={({ location }) => (
                <div>
                  <WatchThrone location={location} />
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
                    >2 Degrees of Freedom Helicopter</Interactive>
                  </div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/magnet-car"
                    >Magnetic Tethering Remote Control Car</Interactive>
                  </div>
                  <div style={s.pageLinkContainer}>
                    <Interactive
                      as={Link}
                      {...s.link}
                      to="/projects/watch-the-throne"
                    >Watch the Throne</Interactive>
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