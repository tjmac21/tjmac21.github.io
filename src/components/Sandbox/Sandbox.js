import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import s from '../../styles/exampleComponent.style';

const SandboxText = () => (
    <p style={s.p}>
      Here you'll find some of my on-going projects and other unfinished projects that I may or may not attempt to complete.
    </p>
  );

class Sandbox extends React.Component {
    render(){
        return (
          <Switch>
            <Route
              exact path="/sandbox"
              render={() => (
                <div>
                  <SandboxText />
                </div>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        );
    }
}

export default Sandbox;