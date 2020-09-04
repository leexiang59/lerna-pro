/*
 * @Description:
 * @Author: will
 * @Date: 2020-08-27 16:16:58
 * @LastEditors: will
 * @LastEditTime: 2020-09-01 11:36:29
 */
export default [
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     {
  //       name: 'login',
  //       path: '/user/login',
  //       component: './user/login',
  //     },
  //   ],
  // },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/analysis',
      },
      {
        path: '/analysis',
        name: 'dashboard.analysis',
        icon: 'pie-chart',
        component: './Analysis',
      },
      {
        path: '/list',
        name: 'list.lengku',
        icon: 'search',
        routes: [
          {
            path: '/list',
            component: './List',
            hideInMenu: true,
          },
          // 进出库查询
          {
            path: '/list/in-out',
            name: 'in-out-list',
            component: './InOut',
            hideInMenu: true,
          },
        ],
      },
      // {
      //   path: '/admin',
      //   name: 'admin',
      //   icon: 'crown',
      //   component: './Admin',
      //   authority: ['admin'],
      //   routes: [
      //     {
      //       path: '/admin/sub-page',
      //       name: 'sub-page',
      //       icon: 'smile',
      //       component: './Welcome',
      //       authority: ['admin'],
      //     },
      //   ],
      // },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
