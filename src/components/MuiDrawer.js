import { Box, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Sample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        aria-label="hamburger"
        edge="start"
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box p={2} width="280px" textAlign="center" role="presentation">
          <Typography variant="h4">G-UP</Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Sample;
