/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import EventConfigForm from "components/EventConfiguration/EventConfigForm"
import ManageEvents from "components/EventConfiguration/ManageEvents"
import ExhibitorsList from 'components/EventConfiguration/ExhibitorsList'
import CreateExhibitor from 'components/EventConfiguration/CreateExhibitor'
import ManageExhibitor from 'components/EventConfiguration/ManageExhibitor'

import Login from 'views/pages/Login';
import Register from 'views/pages/Register';


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    sideNav:true
  },
  {
    path: "/create-event",
    name: "Create Event",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: EventConfigForm,
    layout: "/admin",
    sideNav:false

  },
  {
    path: "/manage-event",
    name: "Manage Events",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ManageEvents,
    layout: "/admin",
    sideNav:true

  },
  {
    path: "/edit-exhibitor/:exhibitorId",
    name: "Manage Events",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ManageExhibitor,
    layout: "/admin",
    sideNav:false

  },
  {
    path: "/exhibitors-list/:eventId",
    name: "Exhibitors List",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ExhibitorsList,
    layout: "/admin",
    sideNav:false

  },
  {
    path: "/create-exhibitor",
    name: "Create Exhibitor",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: CreateExhibitor,
    layout: "/admin",
    sideNav:false
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/login",
        name: "Login",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Login,
        layout: "/auth",
        sideNav:false
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: Register,
        layout: "/auth",
        sideNav:false
      }
    ]
  },
];
export default routes;
