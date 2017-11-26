import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  linkedIn:  PropTypes.string.isRequired,
  github:  PropTypes.string.isRequired,
};

export default class Collab extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { name, linkedIn, github } = this.props;
        return (
            <span className="collab-name">{name}
                <ul className="social-icons icon-circle list-inline"> 
                    <li><a href={github} target="_blank"><i className="fa fa-github"></i></a></li> 
                    <li><a href={linkedIn} target="_blank"><i className="fa fa-linkedin"></i></a></li> 
                </ul>
            </span>
        );
    }
}

Collab.propTypes = propTypes;