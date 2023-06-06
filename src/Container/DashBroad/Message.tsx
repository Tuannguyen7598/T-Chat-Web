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
import { toastError } from '../../Component/ToastMessage';
import { IPageProps, connectContainer } from "../../ContainerBase";
import { ClientRouter, ServerRouter } from '../../Routers';
import { UserDto } from '../../type';
import { BoxChatPersonal, MessageDetail } from '../../type/message.interface';


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
      position: ${(props: propsAvatar) => (props.online ? 'absolute' : 'none')};
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #2ecc71;
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
      listIdUserOnline: Array<ListSocketOnConnect>
      listUser: Array<Omit<UserDto, 'credentials'>>
      isOnChatWithOneUser: boolean
      userChattingId: string
      historyMessage: Array<MessageDetail>
      newMessage: MessageDetail
      boxChatCurrent: BoxChatPersonal & { listMessage: Array<MessageDetail> }
      listUserIsNewMessage: Array<string>
}
export class MessageRaw extends React.Component<IPageProps, IState> {
      constructor(props: IPageProps) {
            super(props)
            this.state = {
                  value: 0,
                  listIdUserOnline: [],
                  listUser: [],
                  isOnChatWithOneUser: false,
                  historyMessage: [],
                  userChattingId: '',
                  newMessage: MessageDetail.createObj(),
                  boxChatCurrent: { ...BoxChatPersonal.createObj(), listMessage: [] },
                  listUserIsNewMessage: []


            }
      }
      async componentDidMount() {

            const listUser = await Axios.get<Array<Omit<UserDto, 'credentials'>>>(ServerRouter.getUser)
            const getListUserIsNewMessage = this.props.appState.socket.emit('get-is-seen', (data: Array<string>) => {
                  this.setState({
                        listUserIsNewMessage: data
                  })

            })

            this.setState({
                  listUser: listUser.data.filter((x) => x.id !== this.props.appState.userCurrent.id),
            })

      }

      render() {
            let count = 0
            const updateNewMessageIsSeen = this.props.appState.socket.on('new-message-is-not-seen', (data: Array<string>) => {
                  this.setState({ listUserIsNewMessage: data })


            })
            this.props.appState.socket.on('newUserOnline', (data: Array<ListSocketOnConnect>) => {
                  this.setState({ listIdUserOnline: data })
            })
            this.props.appState.socket.on('recive-message', (data: { listMessage: Array<MessageDetail>, listMessageIsNotSeen: Array<string> }) => {

                  if (!data.listMessage) {
                        this.setState({ listUserIsNewMessage: data.listMessageIsNotSeen })
                        return
                  }
                  this.setState({
                        listUserIsNewMessage: data.listMessageIsNotSeen,
                        historyMessage: data.listMessage,
                  })


            })


            const listUserOnline = this.state.listUser.filter((user) => this.state.listIdUserOnline.findIndex((data) => data.userId === user.id) !== -1)

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
                                          <ButtonBase style={{ height: '50%', marginLeft: 110 }} onClick={() => console.log(this.state.listUserIsNewMessage)}><FilterListIcon /></ButtonBase>
                                    </Box>

                                    <Box height='100%' mt='2px'>

                                          {this.state.listUser.map((x) =>
                                                <ButtonBase key={x.id} onClick={(e) => {
                                                      if (e.ctrlKey === true) {
                                                            return
                                                      }
                                                      this.onClicktOneUser(x.id)
                                                }} style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'flex-start' }} >
                                                      <Box display='flex' alignItems='center' width='100%' height='100%' pl={1} >
                                                            <CustomAvatarWrapper online={listUserOnline.findIndex((y) => y.id === x.id) !== -1 ? true : false} src='./assets/tesst.png' />
                                                            <Box ml={1} width='75%'>
                                                                  <Typography typography='h4' align='left'>{x.username}</Typography>
                                                                  <Typography typography='h5' style={{ display: 'flex', marginTop: 4 }}>{ }</Typography>
                                                            </Box>
                                                            <StatusIndicator online={this.state.listUserIsNewMessage.findIndex((z) => x.id === z) !== -1 ? true : false} />
                                                      </Box>
                                                </ButtonBase>
                                          )}




                                    </Box>

                              </Grid>


                              <Grid item xs height='100%' >
                                    {this.state.isOnChatWithOneUser ?
                                          (<>
                                                <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' >
                                                      <Box display='flex' alignItems='center' ml={2} width='15%' marginLeft={15}>
                                                            <Avatar
                                                                  style={{ marginLeft: 10 }}
                                                                  src='' />
                                                            <Box ml={1} width='100%'>
                                                                  <Typography typography='h4'>{this.state.listUser.find((x) => x.id === this.state.userChattingId)?.username}</Typography>
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
                                                                  <ButtonBase disableTouchRipple ><AttachFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                                  <ButtonBase disableTouchRipple><ShareIcon style={{ width: '50px' }} /></ButtonBase>
                                                                  <ButtonBase disableTouchRipple><UploadFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                                  <ButtonBase disableTouchRipple><ImageIcon style={{ width: '50px' }} /></ButtonBase>
                                                                  <ButtonBase disableTouchRipple><SentimentSatisfiedAltIcon style={{ width: '50px' }} /></ButtonBase>
                                                            </Grid>
                                                            <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                  <ButtonBase ><SendIcon style={{ width: '40px' }} /></ButtonBase>
                                                            </Grid>
                                                      </Grid>
                                                      <TextField onKeyPress={(e) => {
                                                            if (e.key === 'Enter') {
                                                                  this.onSendMessage()
                                                            }
                                                      }}
                                                            value={this.state.newMessage.content}
                                                            onChange={(e) => this.setState({
                                                                  newMessage: {
                                                                        ...this.state.newMessage,
                                                                        boxChatId: this.state.boxChatCurrent.id,
                                                                        from: this.props.appState.userCurrent.id ?? '',
                                                                        to: this.state.userChattingId,
                                                                        content: e.currentTarget.value,
                                                                        createAt: new Date(),
                                                                  }
                                                            })}
                                                            placeholder='Nhập tin nhắn mới'
                                                            variant='outlined'
                                                      />
                                                      <Box display='flex' height='70%' flexDirection='column-reverse' alignItems='center' overflow='auto'>
                                                            {this.state.historyMessage.map((message, index) => {
                                                                  if (message.isSeen && count === index && message.from === this.props.appState.userCurrent.id) {

                                                                        return <>
                                                                              <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' ><Avatar
                                                                                    style={{height:'15px',width:'15px'}}
                                                                                    src='' /></Box>
                                                                              <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' mb={1}>

                                                                                    <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                                                                          <Typography typography='h5'>{message.content}11221</Typography>
                                                                                    </Box>

                                                                              </Box>

                                                                        </>
                                                                  }
                                                                  if (message.from === this.props.appState.userCurrent.id) {
                                                                        if (!message.isSeen) {
                                                                              count++
                                                                        }
                                                                        return <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' mb={2}>
                                                                              <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                                                                    <Typography typography='h5'>{message.content}</Typography>
                                                                              </Box>

                                                                        </Box>
                                                                  }
                                                                  return <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-start' mb={2}>
                                                                        <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                                                              <Typography typography='h5'>{message.content}</Typography>
                                                                        </Box>
                                                                  </Box>


                                                            })}



                                                      </Box>
                                                </Box>
                                          </>) :
                                          <Box marginX='30%' marginY='20%' borderRadius={4} sx={{ background: 'hsl(120, 100%, 91%)' }} width='30%' display='flex' height='7%' alignItems='center' justifyContent='center'>
                                                CLICK AT ONE USER TO START CHAT
                                          </Box>

                                    }
                              </Grid>
                        </Grid >
                  </>
            )
      }
      private onChangeRoute = (type: 'message' | 'call' | 'group' | 'live') => {
            this.props.history.push(ClientRouter[type])
      }
      private onClicktOneUser = async (userId: string) => {

            this.props.appState.socket.emit('get-box-chat', userId, (data: BoxChatPersonal & { listMessage: Array<MessageDetail>, listMessageIsNotSeen: Array<string> }) => {
                  if (typeof data === 'string') {
                        toastError('erroor')
                        return
                  }
                  this.setState({
                        boxChatCurrent: data,
                        userChattingId: userId,
                        historyMessage: data.listMessage,
                        isOnChatWithOneUser: true,
                        listUserIsNewMessage: data.listMessageIsNotSeen

                  })


            })
      }
      private onSendMessage = async () => {
            if (this.state.newMessage.content === '') {
                  return
            }
            this.props.appState.socket.emit('send-message', this.state.newMessage, (data: any) => {
                  if (!data || data === 'error') {
                        toastError('Gửi tin nhắn thất bại')
                        return
                  }

                  this.setState({
                        newMessage: MessageDetail.createObj(),
                        historyMessage: data as Array<MessageDetail>
                  })
            })

      }
}
export const Message = connectContainer(MessageRaw)