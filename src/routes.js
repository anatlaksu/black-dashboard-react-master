/* eslint-disable no-unused-vars */
/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dash from "views/Dash.js";
import Dashboard from "views/Dashboard.js";
import Report from "views/Report.js";
import ReportRekem from "views/ReportRekem.js";
import RegistHamal from "views/RegistHamal.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import HamalPage from "views/Hamal/HamalPage.js"


export  const routes = [
  {
    path: "/report",
    name: "דיווח אירוע חריג",
    icon: "tim-icons icon-paper",
    component: Report,
    layout: "/admin"
  },
  {
    path: "/reportrekem",
    name: "דיווח אירוע רק'ם",
    icon: "tim-icons icon-paper",
    component: ReportRekem,
    layout: "/admin"
  },
  {
    path: "/rehamal",
    name: "התחברות חמ'ל",
    icon: "tim-icons icon-badge",
    component: RegistHamal,
    layout: "/admin"
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile", 
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  {
    path: "/dash",
    // name: "Dash",
    // rtlName: "لوحة القيادة",
    // icon: "tim-icons icon-notes",
    component: Dash,
    layout: "/admin"
  },
  {
    path: "/hamalpage",
    // name: "טבלאות אירועים",
    // icon: "tim-icons icon-paper",
    component: HamalPage,
    layout: "/admin"
  }

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
  // {
  //   path: "/hamalpage",
  //   name: "טבלאות אירועים",
  //   icon: "tim-icons icon-paper",
  //   component: HamalPage,
  //   layout: "/adminHamal"
  // }
];

// export const routeshamal = [
//   {
//     path: "/hamalpage",
//     name: "טבלאות אירועים",
//     icon: "tim-icons icon-paper",
//     component: HamalPage,
//     layout: "/admin"
//   }
// ];

