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
import EventConfigForm from "components/EventConfiguration/EventConfigForm"
import ManageEvents from "components/EventConfiguration/ManageEvents"
import ExhibitorsList from 'components/EventConfiguration/ExhibitorsList'
import CreateExhibitor from 'components/EventConfiguration/CreateExhibitor'
import ManageExhibitor from 'components/EventConfiguration/ManageExhibitor'

import Login from 'views/pages/Login';
import Register from 'views/pages/Register';
import Reports from "components/EventConfiguration/Reports";
import CreateEventActivity from "components/EventConfiguration/CreateEventActivity";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    sideNav:true,
    requiredPrivileges:["Admin","Exhibitor"]
  },
  {
    path: "/create-event",
    name: "Create Event",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: EventConfigForm,
    layout: "/admin",
    sideNav:false,
    requiredPrivileges:["Admin"]
  },
  {
    path: "/create-eventActivity/:eventId",
    name: "Create Event Activity",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: CreateEventActivity,
    layout: "/admin",
    sideNav:false,
    requiredPrivileges:["Admin"]
  },
  {
    path: "/manage-event",
    name: "Manage Events",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ManageEvents,
    layout: "/admin",
    sideNav:true,
    requiredPrivileges:["Admin"]

  },
  {
    path: "/reports",
    name: "Reports",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: Reports,
    layout: "/admin",
    sideNav:true,
    requiredPrivileges:["Admin","Exhibitor"]

  },
  {
    path: "/edit-exhibitor/:exhibitorId",
    name: "Manage Events",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ManageExhibitor,
    layout: "/admin",
    sideNav:false,
    requiredPrivileges:["Admin"]

  },
  {
    path: "/exhibitors-list/:eventId",
    name: "Exhibitors List",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: ExhibitorsList,
    layout: "/admin",
    sideNav:false,
    requiredPrivileges:["Admin"]

  },
  {
    path: "/create-exhibitor",
    name: "Create Exhibitor",
    rtlName: "الرموز",
    icon: "tim-icons icon-notes",
    component: CreateExhibitor,
    layout: "/admin",
    sideNav:false,
    requiredPrivileges:["Admin"]
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
        sideNav:false,
        requiredPrivileges:[]
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: Register,
        layout: "/auth",
        sideNav:false,
        requiredPrivileges:[]
      }
    ]
  },
];
export default routes;
