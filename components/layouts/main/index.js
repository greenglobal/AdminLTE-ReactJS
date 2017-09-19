import React from 'react';
import {Link} from 'react-router';

import Header from './Header.jsx';
import ASide from './ASide.jsx';
import Footer from '../../Footer';
import {ShowIf} from 'components/utils';
import {connect} from 'react-redux';

class MainLayout extends React.Component {
  state = {};

  closeNotification() {
    this.props.dispatch({
      type: 'CLOSE_NOTIFICATION'
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));

    return (
      <div className="wrapper">
        <Header/>
        <ASide/>
        <div className="content-wrapper" style={{minHeight: 600}}>
          <div className="box box-default">
            <div className="box-body">
              <ShowIf condition={this.props.notification.type == 'error'}>
                <div className="alert alert-danger alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.closeNotification.bind(this)}>×</button>
                  <h4><i className="icon fa fa-ban" /> {this.props.notification.title}</h4>
                  {this.props.notification.message}
                </div>
              </ShowIf>

              <ShowIf condition={false}>
                <div className="alert alert-info alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <h4><i className="icon fa fa-info" /> Alert!</h4>
                  Info alert preview. This alert is dismissable.
                </div>
              </ShowIf>

              <ShowIf condition={false}>
                <div className="alert alert-warning alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <h4><i className="icon fa fa-warning" /> Alert!</h4>
                  Warning alert preview. This alert is dismissable.
                </div>
              </ShowIf>

              <ShowIf condition={false}>
                <div className="alert alert-success alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <h4><i className="icon fa fa-check" /> Alert!</h4>
                  Success alert preview. This alert is dismissable.
                </div>
              </ShowIf>
            </div>
          </div>

          <section className="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          <section className="content">
          {childrenWithProps}
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}

const bindReduxStateToComponentProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(bindReduxStateToComponentProps)(MainLayout);
