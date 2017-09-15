import React from 'react';
import {MainLayout} from 'components/layouts';
import {BusinessForm} from 'components/business';
import {Businesses} from 'base/api';

class EditBusiness extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  cb(response) {
    // Back to categories list
    this.props.history.push('/businesses');
  }

  render() {
    return (
      <MainLayout>
        <div>
          Update business
          <BusinessForm fnSubmit={Businesses.actions.update} cb={this.cb.bind(this)} businessId={this.props.params.id}/>
        </div>
      </MainLayout>
    );
  }
}

EditBusiness.contextTypes = {
  router: React.PropTypes.object
};

export default EditBusiness;
