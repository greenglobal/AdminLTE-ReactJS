import React from 'react';
import {MainLayout} from 'components/layouts';
import {CategoryForm} from 'components/category';
import {Categories} from 'base/api';

class AddCategory extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  cb(response) {
    // Back to categories list
    this.props.history.push('/categories');
  }

  render() {
    return (
      <MainLayout>
        <div>
          Add New Category
          <CategoryForm fnSubmit={Categories.actions.add} cb={this.cb.bind(this)}/>
        </div>
      </MainLayout>
    );
  }
}

AddCategory.contextTypes = {
  router: React.PropTypes.object
};

export default AddCategory;
