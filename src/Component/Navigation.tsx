import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

type Iprop = {
      onClick: (type: string) => void
      state: number
}

export const Navigation = (props: Iprop): JSX.Element => {
      const [state, setState] = useState(props.state)

      return (
            <Box height='115%' style={{ backgroundColor: 'rgb(240, 240, 240)' }} width='5%' >
                  <Tabs

                        orientation="vertical"
                        style={{ MozOrient: 'vertical' }}
                        value={state}
                        TabIndicatorProps={{
                              style: {
                                    left: 0,
                                    transform: 'translateX(-0%)'
                              }
                        }}
                        onChange={(e, newValue) => setState(newValue)}

                        sx={{ padding: 0, margin: 0, display: 'flex' }}
                  >
                        <Tab label={
                              <Box display='flex' alignItems='center' height='150%' width='150%' flexDirection='column'>
                                    <ChatIcon />
                                    <Typography typography='h4' textTransform='none' style={{ marginTop: 5 }}>Message</Typography>
                              </Box>
                        } onClick={() =>
                              setTimeout(() => props.onClick('message'), 300
                              )}
                        />

                        <Tab label={
                              <Box display='flex' alignItems='center' height='150%' width='150%' flexDirection='column'>
                                    <PhoneOutlinedIcon />
                                    <Typography typography='h4' textTransform='none' style={{ marginTop: 5 }}>Call</Typography>
                              </Box>
                        } onClick={() =>
                              setTimeout(() => props.onClick('call'), 300
                              )}
                        />

                        <Tab label={
                              <Box display='flex' alignItems='center' height='150%' width='150%' flexDirection='column'>
                                    <GroupsIcon />
                                    <Typography typography='h4' textTransform='none' style={{ marginTop: 5 }}>Group</Typography>
                              </Box>
                        } onClick={() =>
                              setTimeout(() => props.onClick('group'), 300
                              )}
                        />

                        <Tab label={
                              <Box display='flex' alignItems='center' height='150%' width='150%' flexDirection='column'>
                                    <AspectRatioIcon />
                                    <Typography typography='h4' textTransform='none' style={{ marginTop: 5 }}>Live</Typography>
                              </Box>
                        } onClick={() =>
                              setTimeout(() => props.onClick('live'), 300
                              )}
                        />


                  </Tabs>
            </Box>
      )
}