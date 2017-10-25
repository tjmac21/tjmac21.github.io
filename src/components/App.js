import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import Resume from './Resume/Resume';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>TJ's Portfolio</h1>
      <Interactive
        as="a"
        href="https://github.com/tjmac21/tjmac21.github.io"
        style={s.repoLink}
        {...s.link}
      >Link to the source code of this site</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>

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
