import React, { Component } from 'react';

let AMenu = (props) => {
  return (
    <ul className="treeview-menu">
      {props.menuItems.map(item => (
        <li>
          <a href="#">
            <i className="fa fa-circle-o" /> {item.name}
            {
              item.children && item.children.length > 0 ?
              (
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              ) :
              null
            }
          </a>
          {
            item.children && item.children.length > 0 ?
            (
              <AMenu menuItems={item.children}/>
            ) :
            null
          }
        </li>
      ))}
    </ul>
  )
}
class MultiLevelMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuRoutes : [
        {
          name: 'Level One',
          children: [
            {
              name: 'Level Two'
            },
            {
              name: 'Level Two'
            },
            {
              name: 'Level Two',
              children: [
                {
                  name: "Level Three"
                },
                {
                  name: "Level Three"
                },
                {
                  name: "Level Three"
                },
                {
                  name: "Level Three"
                },
                {
                  name: "Level Three"
                }
              ]
            }
          ]
        },
        {
          name: 'Level One'
        },
        {
          name: 'Level One'
        },
        {
          name: 'Level One'
        }
      ]
    }
  }

  render() {
    return (
      <li className="treeview">
        <a href="#">
          <i className="fa fa-share" /> <span>{this.props.name}</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <AMenu menuItems={this.state.menuRoutes}/>
      </li>
    );
  }
}

MultiLevelMenu.defaultProps = {
  name: 'MultiLevel Menu'
}

export default MultiLevelMenu;
