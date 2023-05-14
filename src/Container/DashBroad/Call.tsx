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
import { Avatar, Box, Button, ButtonBase, Container, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";
import { Header, Search, SearchIconWrapper, StyledInputBase } from "../../Component/Header";
import { IPageProps, connectContainer } from "../../ContainerBase";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from "@mui/icons-material/Search";
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { ClientRouter } from '../../Routers';
import { Navigation } from '../../Component/Navigation';

export interface IState {
      value: number
}
export class CallRaw extends React.Component<IPageProps, IState> {
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
                        <Grid container component='main' height='99%'>
                              <Navigation
                                    state={1}
                                    onClick={(type: any) => this.onChangeRoute(type)}
                              />
                              <Grid item xs={2} height='100%' >
                                    <Box height='50px' width='100%' display='flex' boxShadow={1} alignItems='center'>
                                          <Box sx={{ ml: 1, mr: 1, border: 1, borderColor: 'black', background: '#6a5acd', width: '30px', borderRadius: 1, height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <LocalPhoneIcon sx={{ color: 'white' }} />
                                          </Box>
                                          <Typography typography='h3'>Cuộc gọi</Typography>
                                    </Box>


                                    <Box height='100%' mt='10px'>
                                          <Search style={{
                                                backgroundColor: 'rgb(240, 240, 240)', width: '90%', borderRadius: 10, marginLeft: 5
                                          }}>
                                                < SearchIconWrapper >
                                                      <SearchIcon style={{ color: 'black' }} />
                                                </SearchIconWrapper>
                                                <StyledInputBase
                                                      style={{ color: 'black' }}
                                                      placeholder="Search…"
                                                      inputProps={{ "aria-label": "search" }}
                                                />
                                          </Search>
                                          <Box display='flex' alignItems='center' m={1}>
                                                <Avatar src="" />
                                                <Typography typography='h4' style={{ marginLeft: 5, marginRight: 20 }}> Nguyễn Quang Tuấn</Typography>
                                                <ButtonBase sx={{ mr: 1 }}>
                                                      <VideocamOutlinedIcon />
                                                </ButtonBase>
                                                <ButtonBase>
                                                      <LocalPhoneOutlinedIcon />
                                                </ButtonBase>
                                          </Box>
                                          <Box display='flex' alignItems='center' m={1}>
                                                <Avatar src="" />
                                                <Typography typography='h4' style={{ marginLeft: 5, marginRight: 20 }}> Nguyễn Quang Tuấn</Typography>
                                                <ButtonBase sx={{ mr: 1 }}>
                                                      <VideocamOutlinedIcon />
                                                </ButtonBase>
                                                <ButtonBase>
                                                      <LocalPhoneOutlinedIcon />
                                                </ButtonBase>
                                          </Box>
                                          <Box display='flex' alignItems='center' m={1}>
                                                <Avatar src="" />
                                                <Typography typography='h4' style={{ marginLeft: 5, marginRight: 20 }}> Nguyễn Quang Tuấn</Typography>
                                                <ButtonBase sx={{ mr: 1 }}>
                                                      <VideocamOutlinedIcon />
                                                </ButtonBase>
                                                <ButtonBase>
                                                      <LocalPhoneOutlinedIcon />
                                                </ButtonBase>
                                          </Box>
                                    </Box>

                              </Grid >


                              <Grid item xs height='100%' >
                                    <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' >
                                          <Typography typography='h3' style={{ marginLeft: 5 }}> Lịch sử </Typography>

                                          <Box sx={{ height: '100%', width: '90%' }} >
                                                <Tabs sx={{ height: '100%' }} value={this.state.value} onChange={(e: React.SyntheticEvent, newValue: number) => this.setState({ value: newValue })} aria-label="basic tabs example">
                                                      <Tab sx={{ width: '8%' }} label={<Typography typography='h5'> Tất cả </Typography>} />
                                                      <Tab label={<Typography typography='h5'>Cuộc gọi nhỡ</Typography>} />
                                                      <Tab label={<Typography typography='h5'>Cuộc gọi đến</Typography>} />
                                                </Tabs>
                                          </Box>
                                    </Box>
                                    <Box boxShadow={1} height='100%' width='100%' style={{ display: 'flex', flexDirection: 'column' }}>
                                          <Box marginX={2} marginY='5px' border={1} borderRadius={4} sx={{ background: 'hsl(214, 100%, 91%)' }} width='95%' display='flex' height='7%' alignItems='center' justifyContent='space-between'>
                                                <Box display='flex' alignItems='center' ml={1}>
                                                      <Avatar src="" />
                                                      <Box>
                                                            <Typography typography='h5'>NguyễN Quang Tuấn</Typography>
                                                            <Box display='flex' alignItems='center'>
                                                                  <CallTwoToneIcon sx={{ height: '20px' }} />
                                                                  <Typography typography='h5'>Cuộc gọi đi</Typography>
                                                            </Box>
                                                      </Box>
                                                </Box>
                                                <Box mr={2}>
                                                      <Typography typography='h5'>Thứ sáu</Typography>
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

}
export const Call = connectContainer(CallRaw)