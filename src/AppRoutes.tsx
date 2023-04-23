import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Call } from "./Container/DashBroad/Call";
import { Message } from "./Container/DashBroad/Message";
import { Login } from "./Container/Login/Login";
import { IPageProps, connectContainer } from "./ContainerBase";
import "./app.scss";
import { ClientRouter } from "./clientRoute";
import { Group } from "./Container/DashBroad/Group";
import { Live } from "./Container/DashBroad/Live";



export interface IState {
    email: string;
    pass: string;
    loading: boolean;
}



class AppRoutesRaw extends React.Component<IPageProps> {
    constructor(props: IPageProps) {
        super(props);
    }
    componentDidMount() {
        console.log("heloo");


    }
    render() {


        return (
            <Router history={this.props.history}>
                <Switch>
                    <Redirect exact from="/" to={ClientRouter.login} />
                    <Route exact path={ClientRouter.login} component={Login} />
                    <Route exact path={ClientRouter.message} component={Message} />
                    <Route exact path={ClientRouter.call} component={Call} />
                    <Route exact path={ClientRouter.group} component={Group} />
                    <Route exact path={ClientRouter.live} component={Live} />
                </Switch>
            </Router>
        );


    }
}

export const AppRoutes = connectContainer(AppRoutesRaw);
