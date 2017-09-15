import App from 'components/app';
import Home from 'components/home';
import rest from "api/rest";

import {Login, ListCategories, AddCategory, EditCategory} from "pages";
import {ListBusinesses, AddBusiness, EditBusiness} from 'pages/businesses';
const {actions} = rest;

const routes = [
  {
    component: App,
    routes: [
      {
        component: Login,
        exact: true,
        path: '/',
      },
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/categories",
        exact: true,
        component: ListCategories
      },
      {
        path: "/categories/add",
        exact: true,
        component: AddCategory
      },
      {
        path: "/categories/edit/:id",
        exact: true,
        component: EditCategory
      },
      {
        path: "/businesses",
        exact: true,
        component: ListBusinesses
      },
      {
        path: "/businesses/add",
        exact: true,
        component: AddBusiness
      },
      {
        path: "/businesses/edit/:id",
        exact: true,
        component: EditBusiness
      }
    ]
  }
];

export default routes;
