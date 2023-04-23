import React from "react";
import { withRouter } from "react-router";

/**
 * We just need the reference to the AppContext.
 * Initialization is done via AppContext.Provider so, we skip setting value and state type here.
 */
export const AppContext = React.createContext({}) as any;

/**
 * Don't let other containers import this file.
 * !!!Use ContainerBase.ts instead!!!
 * @param component component to connect with store
 */
export function __connectWithStore<TProps>(component: React.ComponentType<TProps>): React.FunctionComponent {
    const hoc = (props: TProps) => {
        // TODO: remove any
        return (
            <AppContext.Consumer>
                {(bswpm:any) =>
                    React.createElement(component as any, {
                        ...props,
                        ...bswpm,
                    })
                }
            </AppContext.Consumer>
        );
    };

    // TODO: remove any
    return hoc as any;
}

export function __connect<TProps>(component: React.ComponentType<TProps>): React.ComponentClass<TProps> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return withRouter(__connectWithStore(component) as any) as any;
}
