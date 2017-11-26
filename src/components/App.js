import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import Sandbox from './Sandbox/Sandbox';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>
    <div style={s.root}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
          <div style={s.creditLine}>
              Made in React.js by&nbsp;
            <Interactive
              as="a"
              href="https://github.com/tjmac21/"
              interactiveChild
              focus={{}}
              touchActive={{}}
              touchActiveTapOnly
            ><span {...s.childLink}>TJ Macalanda</span>
            </Interactive>
          </div>
    </div>
  );
}
