//  in this file we’re going to loop through our routes and generate routes and layouts.
import { RouteProps, LayoutProps } from "./index";
// 用來平行化巢狀結構陣列
import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NoMatch from "@/pages/NoMatch";
import { Helmet } from "react-helmet";

const generateFlattenRoutes = (routes?: RouteProps[]): RouteProps[] => {
  if (!routes) return [];
  // routes: subRoutes 的寫法是將 routes 重新命名為 subRoutes
  // ...rest： 這使用了擴展運算符（Spread Operator），將 routes 對象中除了 routes 鍵以外的所有鍵值對（key-value pairs）收集到一個名為 rest 的變數中。
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }: RouteProps) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

// mainRoutes 為父曾傳下來的路由結構
export const renderRoutes = (mainRoutes: LayoutProps[]) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const layouts = mainRoutes.map(
      ({ layout: Layout, isPublic, routes }: LayoutProps, index) => {
        // 把巢狀的 routes 陣列結構全部打平，以下範例：

        const subRoutes = generateFlattenRoutes(routes);
        return (
          <Route
            key={index}
            element={<Layout />}
          >
            {/* 在 ProtectedRoute 這一層 Route 用 isAuthorized 來判斷  */}
            <Route
              element={
                <ProtectedRoute
                  isPublic={isPublic}
                  isAuthorized={isAuthorized}
                />
              }
            >
              {subRoutes.map(
                ({ component: Component, title, path, name }: RouteProps) => {
                  return (
                    Component &&
                    path && (
                      <Route
                        key={name}
                        element={
                          <>
                            <Helmet>
                              <meta charSet="utf-8" />
                              <title>Steven's Portfolio - {title}</title>
                            </Helmet>
                            <Component />
                          </>
                        }
                        path={path}
                      />
                    )
                  );
                }
              )}
            </Route>
          </Route>
        );
      }
    );
    return (
      <ReactRoutes>
        <Route
          path="/"
          element={<Navigate to="/" />}
        />
        {layouts}
        {/* 全部路由都不匹配時使用 NoMatch component */}
        <Route
          path="*"
          element={<NoMatch />}
        />
      </ReactRoutes>
    );
  };
  return Routes;
};
