'use strict';
import React from 'react';
import {Link} from 'react-router-dom';
import {MultiLevelMenu, MenuItem} from 'components/UI/Menu';
import {connect} from 'react-redux';

class ASide extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={require("assets/images/user2-160x160.jpg")} className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <MenuItem to='/categories' label='Categories Manager'/>
                <MenuItem to='/businesses' label='Businesses Manager'/>
                <MenuItem to='#' label='Menu with icons' right={
                  <span className="pull-right-container">
                    <small className="label pull-right bg-yellow">12</small>
                    <small className="label pull-right bg-green">16</small>
                    <small className="label pull-right bg-red">5</small>
                  </span>
                }/>
              </ul>
            </li>
            <MultiLevelMenu/>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>UI Components</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
            </li>
            <MenuItem to='/notifications' label='Notifications'/>
            <MenuItem to='/validators' label='Validators'/>
          </ul>
        </section>
      </aside>
    );
  }
}

export default connect()(ASide);
