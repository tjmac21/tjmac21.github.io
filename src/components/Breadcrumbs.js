import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Interactive from 'react-interactive';
import s from '../styles/style';

const breadCrumbTitles = {
  '': 'Home',
  'example': 'Example',
  'two-deep': 'Two Deep',
  'sandbox': 'Sandbox',
  'about': 'About',
  'projects': 'Projects',
  'solar-mate': 'Solar Mate',
  'reflow-oven': 'Reflow Oven',
  'trump-wall': 'Trump Wall',
  '2-dof-heli': '2 DoF Helicopter',
  'magnet-car': 'Magnetic Tethering Remote Control Car',
  'watch-the-throne': 'Watch The Throne',
  'contact': 'Contact',
};

function BreadcrumbsItem({ match }) {
  const title = breadCrumbTitles[match.url.split('/').slice(-1)];
  const to = title === undefined ? '/' : match.url;

  return (
    <span>
      <Interactive
        as={Link}
        {...s.link}
        to={to}
      >{title || 'Page Not Found'}</Interactive>
      {!match.isExact && title && ' / '}
      {title &&
        <Route path={`${match.url === '/' ? '' : match.url}/:path`} component={BreadcrumbsItem} />
      }
    </span>
  );
}

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};

export default function Breadcrumbs() {
  return (
    <Route path="/" component={BreadcrumbsItem} />
  );
}
