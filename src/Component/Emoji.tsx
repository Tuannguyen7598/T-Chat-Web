import React from 'react';
import { Box, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { EmojiEmotions as EmojiIcon } from '@mui/icons-material';

export const emojiList = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇','🙂','🙃','🫠','😉','🥰','😗','😈','😍','❤️','👍','👋','☠️','🤡','💩'
  // Danh sách emoji có thể mở rộng
];

interface prop{
  onClickEmoji: (index:number)=> void
 
 
}
const EmojiPicker = (prop: prop) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
   
  };

  const handleEmojiClick = (index:number) => {
    prop.onClickEmoji(index)
  
  };

  return (
    <Box>
    <Grid container spacing={1} alignItems="center">
      <Grid item>
        <IconButton onClick={handleOpenMenu}>
          <EmojiIcon />
        </IconButton>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          style: { maxHeight: 300, width: 'auto' },
        }}
      >
        <Grid container spacing={1}>
          {emojiList.map((emoji, index) => (
            <Grid key={index} item xs={1}>
            <Typography
              variant="body1"
              onClick={() => handleEmojiClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {emoji}
            </Typography>
          </Grid>
          ))}
        </Grid>
      </Menu>
    </Grid>
    </Box>
  );
};

export default EmojiPicker;