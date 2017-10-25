import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';

const ContactText = () => (
    <p style={s.p}>
      This is an example page. Refresh the page or copy/paste the url to
      test out the redirect functionality (this same page should load
        after the redirect).
    </p>
  );

class Contact extends React.Component {
    render(){
        return (
          <Switch>
            <Route
              exact path="/contact"
              render={() => (
                <div>
                  <ContactText />
                  <form action="https://formspree.io/tjmacu@gmail.com" method="POST">
                    <input type="text" name="name" />
                    <input type="email" name="_replyto" />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        );
    }
}

export default Contact;