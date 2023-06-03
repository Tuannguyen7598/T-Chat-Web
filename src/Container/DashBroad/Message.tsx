import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatIcon from '@mui/icons-material/Chat';
import FilterListIcon from '@mui/icons-material/FilterList';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ShareIcon from '@mui/icons-material/Share';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Avatar, Box, ButtonBase, Container, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import Axios from 'axios';
import React from "react";
import { Header } from "../../Component/Header";
import { Navigation } from '../../Component/Navigation';
import { IPageProps, connectContainer } from "../../ContainerBase";
import { ClientRouter, ServerRouter } from '../../Routers';
import { UserDto } from '../../type';
export interface propsAvatar {
      online: boolean
}
interface ListSocketOnConnect {
      socketId: string;
      userId: string;
}
const CustomAvatarWrapper = styled(Avatar)`
  &.MuiAvatar-root {
    position: relative;
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${(props: propsAvatar) => (props.online ? '#2ecc71' : '#ccc')};
      border: 2px solid #fff;
      bottom: 0px;
      right: 0px;
      transform: translate(20%, 20%);
    }
  }

 
    & img {
      border-radius: 50%;
      object-fit: cover;
    
  }
`;

const StatusIndicator = styled('div')`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props: propsAvatar) => (props.online ? '#0000ff' : '#fff')};
`;
export interface IState {
      value: number
      listIdFriendOnline: Array<ListSocketOnConnect>
      listUser: Array<Omit<UserDto, 'credentials'>>
}
export class MessageRaw extends React.Component<IPageProps, IState> {
      constructor(props: IPageProps) {
            super(props)
            this.state = {
                  value: 0,
                  listIdFriendOnline: [],
                  listUser: [],

            }
      }
      async componentDidMount() {
            this.props.appState.socket.on('newUserOnline', (data: Array<ListSocketOnConnect>) => {
                  this.setState({ listIdFriendOnline: data })
            })
            const listUser = await Axios.get<Array<Omit<UserDto, 'credentials'>>>(ServerRouter.getUser).catch(() => 300)


            if (typeof listUser === 'number') {
                  return
            }

            this.setState({
                  listUser: listUser.data
            })
      }

      render() {
           

            const listFrienfOnline = this.state.listUser.filter((user) => this.state.listIdFriendOnline.findIndex((data) => data.userId === user.id) !== -1)


            return (
                  <>
                        <Header />
                        <Grid component='main' height='100%' display='flex'>
                              <Navigation
                                    state={0}
                                    onClick={(type: any) => this.onChangeRoute(type)}
                              />
                              <Grid item xs={12} md={4} height='100%' boxShadow={1} width='16%'>

                                    <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' >
                                          <Box sx={{ ml: 1, mr: 1, border: 1, borderColor: 'black', background: '#6a5acd', width: '30px', borderRadius: 1, height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <ChatIcon style={{ color: 'white' }} />
                                          </Box>
                                          <Typography typography='h3' ml={1} >Message</Typography>
                                          <ButtonBase style={{ height: '50%' }}><ArrowDropDownIcon /></ButtonBase>
                                          <ButtonBase style={{ height: '50%', marginLeft: 110 }}><FilterListIcon /></ButtonBase>
                                    </Box>

                                    <Box height='100%' mt='2px'>

                                          {listFrienfOnline.map((x) =>
                                                <ButtonBase key={x.id} onClick={(e) => this.onClickChat()} style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'flex-start' }} >
                                                      <Box display='flex' alignItems='center' width='100%' height='100%' pl={1} >
                                                            <CustomAvatarWrapper online={true} src='./assets/tesst.png' />
                                                            <Box ml={1} width='75%'>
                                                                  <Typography typography='h4' align='left'>{x.username}</Typography>
                                                                  <Typography typography='h5' style={{ display: 'flex', marginTop: 4 }}>cuối cùngasasasasasa</Typography>
                                                            </Box>
                                                            <StatusIndicator online={true} />
                                                      </Box>
                                                </ButtonBase>
                                          )}




                                    </Box>

                              </Grid>


                              <Grid item xs height='100%' >
                                    <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' >
                                          <Box display='flex' alignItems='center' ml={2} width='15%'>
                                                <Avatar
                                                      style={{ marginLeft: 10 }}
                                                      src='' />
                                                <Box ml={1} width='100%'>
                                                      <Typography typography='h4'>{this.props.appState.userCurrent.username}</Typography>
                                                </Box>
                                          </Box>
                                          <Box sx={{ height: '100%', width: '90%' }} >
                                                <Tabs sx={{ height: '100%' }} value={this.state.value} onChange={(e: React.SyntheticEvent, newValue: number) => this.setState({ value: newValue })} aria-label="basic tabs example">
                                                      <Tab sx={{ width: 'auto' }} label={<Typography typography='h4' textTransform='none'> Trò chuyện </Typography>} />
                                                      <Tab label={<Typography typography='h4' textTransform='none'>Tệp</Typography>} />
                                                </Tabs>
                                          </Box>
                                    </Box>

                                    <Box component={Container} height='100%' style={{ display: 'flex', flexDirection: 'column-reverse', }}>
                                          <Grid container width='100%' height='50%' style={{ display: 'flex', height: '20%' }} >
                                                <Grid item xs mt={1}>
                                                      <ButtonBase disableTouchRipple onClick={(e)=> this.onClickChat()} ><AttachFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase disableTouchRipple><ShareIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase disableTouchRipple><UploadFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase disableTouchRipple><ImageIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase disableTouchRipple><SentimentSatisfiedAltIcon style={{ width: '50px' }} /></ButtonBase>
                                                </Grid>
                                                <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                      <ButtonBase ><SendIcon style={{ width: '40px' }} /></ButtonBase>
                                                </Grid>
                                          </Grid>
                                          <TextField
                                                placeholder='Nhập tin nhắn mới'
                                                variant='outlined'
                                          />
                                          <Box display='flex' height='70%' flexDirection='column-reverse' alignItems='center' overflow='auto'>
                                                <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' mb={2}>
                                                      <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                                            <Typography typography='h5'>Tin nhắn của bạnTin nhắn của bạnTin nhắn của bạnTin nhắn của bạn</Typography>
                                                      </Box>
                                                </Box>

                                                <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-start' mb={2}>
                                                      <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                                            <Typography typography='h5'>Tin nhắn của bạnTin nhắn của bạnTin nhắn của bạnTin nhắn của bạn</Typography>
                                                      </Box>
                                                </Box>

                                          </Box>
                                    </Box>
                              </Grid>
                        </Grid >
                  </>
            )
      }
      private onChangeRoute = (type: 'message' | 'call' | 'group' | 'live') => {
            this.props.history.push(ClientRouter[type])
      }
      private onClickChat = () => {
            console.log('username current in app state',this.props.appState.userCurrent.username);
            

      }
}
export const Message = connectContainer(MessageRaw)