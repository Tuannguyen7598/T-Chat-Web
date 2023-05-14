import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatIcon from '@mui/icons-material/Chat';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import GroupsIcon from '@mui/icons-material/Groups';
import ImageIcon from '@mui/icons-material/Image';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ShareIcon from '@mui/icons-material/Share';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Avatar, Box, Button, ButtonBase, Card, Container, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";
import { Header } from "../../Component/Header";
import { IPageProps, connectContainer } from "../../ContainerBase";
import { ClientRouter } from '../../Routers';
import { Navigation } from '../../Component/Navigation';
import RecipeReviewCard from '../../Component/Card';
import SwipeableTextMobileStepper from '../../Component/Carosel';
export interface IState {
      value: number
}
export class LiveRaw extends React.Component<IPageProps, IState> {
      constructor(props: IPageProps) {
            super(props)
            this.state = {
                  value: 0
            }
      }
      componentDidMount() {

      }

      render() {
            return (
                  <>
                        <Header />
                        <Grid container component='main' height='100%' display='flex'>
                              <Navigation
                                    state={3}
                                    onClick={(type: any) => this.onChangeRoute(type)}
                              />
                              <Grid height='100%' boxShadow={1} width='95%' container >
                                    <SwipeableTextMobileStepper />
                              </Grid>
                        </Grid >
                  </>
            )
      }
      private onChangeRoute = (type: 'message' | 'call' | 'group' | 'live') => {
            this.props.history.push(ClientRouter[type])
      }
}
export const Live = connectContainer(LiveRaw)