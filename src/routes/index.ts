// the list of pages and layouts.
import { ComponentType } from "react";
// Layouts
import PortfolioLayout from "@/layout/Portfolio";

// Pages
import Portfolio from "@/pages/Portfolio";
import Article from "@/pages/Portfolio/Article";
import { renderRoutes } from "./generate-routes";

export interface RouteProps {
  name: string;
  title: string;
  component?: ComponentType;
  path?: string;
  routes?: RouteProps[];
  isPublic?: boolean;
}

export interface LayoutProps {
  layout: ComponentType;
  isPublic: boolean;
  routes: RouteProps[];
}

export const routes: LayoutProps[] = [
  {
    layout: PortfolioLayout,
    isPublic: true,
    routes: [
      {
        name: "portfolio",
        title: "Portfolio",
        component: Portfolio,
        path: "/portfolio/dataengineer/",
      },
      {
        name: "project exhibition",
        title: "Project Exhibition",
        component: Article,
        path: "/portfolio/dataengineer/article/:articleId",
      },
    ],
  },
  // {
  //   layout: MainLayout,
  //   // By default
  //   isPublic: false,
  //   routes: [
  //     {
  //       name: 'visitor-survey',
  //       title: '使用者背景調查',
  //       component: VisitorSurvey,
  //       path: '/survey',
  //     },
  //     {
  //       name: 'stage-one',
  //       title: 'Stage One Page',
  //       routes: [
  //         {
  //           name: 'preview',
  //           title: '前情提要',
  //           component: Preview,
  //           path: '/one'
  //         },
  //         {
  //           name: 'quick-explore',
  //           title: '發掘能力亮點',
  //           component: QuickExplore,
  //           path: '/one/quick-explore'
  //         },
  //         {
  //           name: 'narrow-explore',
  //           title: '發掘能力亮點',
  //           component: NarrowExplore,
  //           path: '/one/narrow-explore'
  //         },
  //         {
  //           name: 'certificate',
  //           title: '能力調查結果',
  //           component: Certificate,
  //           path: '/one/certificate'
  //         },
  //         {
  //           name: 'follow-up',
  //           title: '接收最新資訊',
  //           component: FollowUp,
  //           path: '/one/followup'
  //         },
  //         {
  //           name: 'closure',
  //           title: '敬請期待',
  //           component: Closure,
  //           path: '/one/closure'
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   layout: MainLayout,
  //   isPublic: true,
  //   routes: [
  //     {
  //       name: 'report',
  //       title: 'Report',
  //       component: Report,
  //       path: '/one/report',
  //     }
  //   ]
  // },
];

// 把我的路由結構傳入 renderRoutes() 進行路由結構炫染
export const Routes = renderRoutes(routes);
