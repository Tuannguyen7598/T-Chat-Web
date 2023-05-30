import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Socket } from "socket.io-client";
import { DraphonyToast } from "./Component/Toast";
import { Call } from "./Container/DashBroad/Call";
import { Group } from "./Container/DashBroad/Group";
import { Live } from "./Container/DashBroad/Live";
import { Message } from "./Container/DashBroad/Message";
import { Login } from "./Container/Login/Login";
import { IPageProps, connectContainer } from "./ContainerBase";
import { ClientRouter } from "./Routers";
import "./app.scss";


export interface IState {
    email: string;
    loading: boolean;
}



class AppRoutesRaw extends React.Component<IPageProps, IState> {
    socket: Socket
    constructor(props: IPageProps) {
        super(props);
        this.state = {
            email: '',
            loading: false,


        }

    }
    componentDidMount() {

    }
    // componentWillMount(): void {
    //     this.props.dispatch({
    //         type: UserActionType.signout
    //     })
    // }
    render(): JSX.Element {
        console.log('kiem tra appstate', this.props.appState.user)
        const socket = this.props.appState.socket

        return (
            <>

                <Router history={this.props.history}>
                    <Switch>
                        <Redirect exact from="/" to={ClientRouter.login} />
                        <Route exact path={ClientRouter.login} component={Login} />

                        {this.props.appState.isLogin &&
                            <>
                                <Route exact path={ClientRouter.message} component={Message} />
                                <Route exact path={ClientRouter.call} component={Call} />
                                <Route exact path={ClientRouter.group} component={Group} />
                                <Route exact path={ClientRouter.live} component={Live} />
                            </>

                        }
                    </Switch>
                    <DraphonyToast />
                </Router>
                {/* {
                    <Router history={this.props.history}>
                        <Switch>
                            <Route exact path={ClientRouter.message} component={Message} />
                            <Route exact path={ClientRouter.call} component={Call} />
                            <Route exact path={ClientRouter.group} component={Group} />
                            <Route exact path={ClientRouter.live} component={Live} />
                        </Switch>
                       
                    </Router>
                } */}


            </>
        );
    }
}

export const AppRoutes = connectContainer(AppRoutesRaw);
