import React from 'react';
// 导入路由
import fileRoute from 'src/pages/routes';

interface ROUTE_ITEM {
  title: string;
  path: string;
  element: React.FC<any>;
}

export const routeConfig: ROUTE_ITEM[] = [...fileRoute];
