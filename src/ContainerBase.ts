import { RouteComponentProps, StaticContext, withRouter } from "react-router";
import { Action } from "./appState/Action";
import { AppState } from "./appState/AppState";
import { __connect, __connectWithStore } from "./AppContext";

export { __connect as connect, __connectWithStore as connectWithStore };

export interface IStoreProps {
    appState: AppState;

    /** Mounted automatically by connect(...)(...) */
    dispatch: React.Dispatch<Action>;
}

/**
 * Use this as base for creating your container's props type if you use {@link connectWithStore} to create the HoC.
 *
 * @template P is the template for the route's parameters.
 *             https://reacttraining.com/react-router/web/example/url-params
 * @template C is the template for the static context.
 * @template S is the template for the location state object, which is used to pass information throught routes.
 *             https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md
 */
export type IRouterProps<
    // eslint-disable-next-line @typescript-eslint/ban-types
    P extends { [K in keyof P]?: string } = {},
    C extends StaticContext = StaticContext,
    // LocationState is no longer exported in react-routers
    S = any
> = RouteComponentProps<P, C, S>;

export type IPageProps<
    // eslint-disable-next-line @typescript-eslint/ban-types
    TMatch extends { [K in keyof TMatch]?: string } = {},
    C extends StaticContext = StaticContext,
    S = any
> = IRouterProps<TMatch> & IStoreProps;

export const connectContainer = <TProps, T extends React.ComponentType<TProps>>(cp: T) => withRouter(__connectWithStore(cp));
