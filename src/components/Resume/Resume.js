import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/exampleComponent.style';

const ResumeText = () => (
    <p style={s.p}>
      Here be my resume.
    </p>
  );

class Resume extends React.Component {
    render(){
        return (
          <Switch>
            <Route
              exact path="/resume"
              render={() => (
                <div>
                  <ResumeText />
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

export default Resume;