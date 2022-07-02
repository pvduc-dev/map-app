import React, {FC} from 'react';
import Routes from "./components/routes";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './style/index.css';
import { NotifierContextProvider } from 'react-headless-notifier';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <NotifierContextProvider
      config={{
        max: 3,
        duration: 200000,
        position: 'bottom',
      }}
    >
      <div
        className="relative w-full h-screen overflow-x-hidden"
      >
        <Router>
          <Switch>
            <Route
              path="/map"
            >
              <Routes/>
            </Route>
            <Redirect
              to="/map"
              from="/"
            />
          </Switch>
        </Router>
      </div>
    </NotifierContextProvider>
  </QueryClientProvider>
)

export default App;
