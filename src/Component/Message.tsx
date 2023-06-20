import { Avatar, Box, Typography } from "@mui/material";
import { MessageDetail, TypeMessage } from "../type/message.interface";

export interface Prop {
    message: MessageDetail,
    isBoxChatOwner: boolean
    loactionSeen: boolean
    onDownload: (link: string) => void
}

export const MessageBoxChat = (prop: Prop): JSX.Element => {

    return (

        <>
            {prop.isBoxChatOwner === true ?
                <>
                    {prop.loactionSeen &&
                        <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' ><Avatar
                            style={{ height: '15px', width: '15px' }}
                            src='' />
                        </Box>
                    }
                    {prop.message.type === TypeMessage.Text ?
                        <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' mb={1} mt={1}>

                            <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>

                                <Typography typography='h5'>{prop.message.content}</Typography>
                            </Box>

                        </Box> :
                        prop.message.type === TypeMessage.Image ?
                            <Box minHeight='20%' width='100%' display='flex' alignItems='center' justifyContent='flex-end' mb={1} mt={1}>

                                <Box height='100%' minWidth='5%' maxWidth='100%' borderRadius={2} display='table-row' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                    {prop.message.pathImg.map((x) =>
                                            <img
                                                src={x}
                                                height={100}
                                                onClick={() => prop.onDownload(x)}
                                            />
                                       
                                    )}
                                    <Typography typography='h5'>{prop.message.content}</Typography>
                                </Box>

                            </Box> :
                            <Box>loaij khac</Box>
                    }
                </> :
                <>

                    {prop.message.type === TypeMessage.Text ?
                        <Box minHeight='5%' width='100%' display='flex' alignItems='center' justifyContent='flex-start' mb={1} mt={1}>

                            <Box height='100%' minWidth='5%' maxWidth='30%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>

                                <Typography typography='h5'>{prop.message.content}</Typography>
                            </Box>

                        </Box> :
                        prop.message.type === TypeMessage.Image ?
                            <Box minHeight='20%' width='100%' display='flex' alignItems='center' justifyContent='flex-start' mb={1} mt={1}>

                                <Box height='100%' minWidth='5%' maxWidth='100%' borderRadius={2} display='flex' alignItems='center' p='8px' sx={{ background: 'hsl(214, 100%, 91%)' }}>
                                    {prop.message.pathImg.map((x) =>
                                       
                                            <img
                                                src={x}
                                                height={100}
                                            />
                                       
                                    )}
                                    <Typography typography='h5'>{prop.message.content}</Typography>
                                </Box>

                            </Box> :
                            <Box>loaij khac</Box>
                    }
                </>

            }


        </>
    );
};
