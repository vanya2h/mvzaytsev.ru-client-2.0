import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, Route } from 'react-router';
import { useInjection } from '~/react/hooks/use-injection';
import { ROUTES } from '~/consts';
import { IRoute } from '~/interfaces/route';
import { IndexPage } from '~/react/pages';

export const Router = (): React.ReactElement => {
  const routes = useInjection<IRoute[]>(ROUTES);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route key={route.key} {...route} />
        ))}
        <Route
          path="*"
          render={() => (
            <Redirect
              from="/*"
              to={IndexPage.key}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

Router.displayName = 'Router';
