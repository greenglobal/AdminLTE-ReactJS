import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {NavLink} from 'react-router-dom';

let MenuItem = (props) => {
  return (
    <li>
      <NavLink to={props.to}><i className={props.className || 'fa fa-circle-o'}></i>{props.label}
      {props.right}
      </NavLink>
      {props.children}
    </li>
  )
}

MenuItem.propTypes = {
  to: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
}

export default MenuItem;
