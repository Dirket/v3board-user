export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    name: '仪表盘',
    icon: 'dashboard',
    component: './Welcome',
  },
  {
    path: '/subscribe',
    name: '我的订阅',
    icon: 'crown',
    component: './Welcome',
  },
  {
    path: '/plan',
    name: '购买订阅',
    icon: 'shopping-cart',
    component: './Welcome',
  },
  {
    path: '/order',
    name: '我的订单',
    icon: 'unordered-list',
    component: './Welcome',
  },
  {
    path: '/invite',
    name: '我的邀请',
    icon: 'usergroup-delete',
    component: './Welcome',
  },
  {
    path: '/user',
    name: '个人中心',
    icon: 'user',
    component: './Welcome',
  },
  {
    path: '/ticket',
    name: '我的工单',
    icon: 'mail',
    component: './Welcome',
  },
  {
    path: '/traffic',
    name: '流量明细',
    icon: 'area-chart',
    component: './Welcome',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
