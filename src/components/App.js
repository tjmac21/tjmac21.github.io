import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import Resume from './Resume';
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
      >https://github.com/tjmac21/tjmac21.github.io</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route path="/resume" component={Resume} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="https://github.com/tjmac21/"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Made in React.js
        </Interactive>
      </div>
    </div>
  );
}
