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
import { Header } from "../../Component/Header";
import { IPageProps, connectContainer } from "../../ContainerBase";
import { ClientRouter } from '../../clientRoute';
import { Navigation } from '../../Component/Navigation';
export interface IState {
      value: number
}
export class GroupRaw extends React.Component<IPageProps, IState> {
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
                        <Grid container component='main' height='100%'>
                              <Navigation
                                    state={2}
                                    onClick={(type: any) => this.onChangeRoute(type)}
                              />
                              <Grid item xs={2} height='100%' boxShadow={1}>

                                    <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' justifyContent='space-between'>
                                          <Box display='flex' alignItems='center'>
                                                <Box sx={{ ml: 1, mr: 1, border: 1, borderColor: 'black', background: '#6a5acd', width: '30px', borderRadius: 1, height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                      <GroupsIcon style={{ color: 'white' }} />
                                                </Box>
                                                <Typography typography='h3' ml={1} >Group</Typography>
                                                <ButtonBase style={{ height: '50%' }}><ArrowDropDownIcon /></ButtonBase>
                                          </Box>
                                          <Box display='flex' alignItems='center' mr={1}>
                                                <ButtonBase style={{ height: '50%' }}><FilterListIcon /></ButtonBase>
                                          </Box>

                                    </Box>

                                    <Box height='100%' mt='2px'>
                                          <ButtonBase style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                                                <Box display='flex' alignItems='center' width='100%' height='100%' pl={1} justifyContent='space-between' mr={1}>
                                                      <Box display='flex' alignItems='center'>
                                                            <Box borderRadius={2} display='flex' height='40px' width='40px' sx={{ backgroundColor: '#c6ff00' }} alignItems='center' justifyContent='center'>
                                                                  <Typography>T</Typography>
                                                            </Box>
                                                            <Box ml={1}>
                                                                  <Typography typography='h4'>Anh em trộm chó</Typography>
                                                            </Box>
                                                      </Box>

                                                      <CheckCircleOutlinedIcon style={{ marginLeft: 50, color: 'green' }} />
                                                </Box>
                                          </ButtonBase>

                                          <ButtonBase style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                                                <Box display='flex' alignItems='center' width='100%' height='100%' pl={1} justifyContent='space-between' mr={1}>
                                                      <Box display='flex' alignItems='center'>
                                                            <Box borderRadius={2} display='flex' height='40px' width='40px' sx={{ backgroundColor: '#ff9100' }} alignItems='center' justifyContent='center'>
                                                                  <Typography>T</Typography>
                                                            </Box>
                                                            <Box ml={1}>
                                                                  <Typography typography='h4'>Anh em trộm chó</Typography>
                                                            </Box>
                                                      </Box>

                                                      <CheckCircleOutlinedIcon style={{ marginLeft: 50, color: 'green' }} />
                                                </Box>
                                          </ButtonBase>


                                    </Box>

                              </Grid>


                              <Grid item xs height='100%' >
                                    <Box width='100%' boxShadow={1} display='flex' alignItems='center' height='50px' >
                                          <Box display='flex' alignItems='center' ml={2} width='15%'>
                                                <Box borderRadius={2} display='flex' height='40px' width='40px' minWidth='50px' sx={{ backgroundColor: '#c6ff00' }} alignItems='center' justifyContent='center'>
                                                      <Typography>T</Typography>
                                                </Box>
                                                <Box ml={1} width='100%'>
                                                      <Typography typography='h4'>Anh em trộm chó</Typography>
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
                                          <Grid container width='100%' height='6%' style={{ display: 'flex', alignItems: 'center' }} >
                                                <Grid item xs >
                                                      <ButtonBase ><AttachFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase ><ShareIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase ><UploadFileIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase ><ImageIcon style={{ width: '50px' }} /></ButtonBase>
                                                      <ButtonBase ><SentimentSatisfiedAltIcon style={{ width: '50px' }} /></ButtonBase>
                                                </Grid>
                                                <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                      <ButtonBase ><SendIcon style={{ width: '40px' }} /></ButtonBase>
                                                </Grid>
                                          </Grid>
                                          <TextField
                                                placeholder='Nhập tin nhắn mới'
                                                variant='outlined'
                                          />
                                          <Box display='flex' height='100%' flexDirection='column-reverse' alignItems='center' overflow='auto'>
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
}
export const Group = connectContainer(GroupRaw)