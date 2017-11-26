import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/exampleComponent.style';

const AboutText = () => (
    <p style={s.p}>
      This is an example page. Refresh the page or copy/paste the url to
      test out the redirect functionality (this same page should load
        after the redirect).
    </p>
  );

class About extends React.Component {
    render(){
        return (
          <Switch>
            <Route
              exact path="/about"
              render={() => (
                <div>
                  <AboutText />
                  <div style={s.pageLinkContainer}>
                    <a target="_blank" href="../pdf/TJ_MAC_resume.pdf" >CV</a>
                  </div>
                </div>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        );
    }
}

export default About;