import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Stack,
} from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function MuiNavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PhoneAndroidIcon />
        </IconButton>
        <Typography
          variant="h4"
          component="span"
          fontWeight="600"
          sx={{ flexGrow: 1 }}
        >
          G-UP
        </Typography>
        <Stack direction="row" spacing={4}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Profiles</Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: '55px',
              color: '#3F6FF9',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#3F6FF9',
                color: '#fff',
              },
            }}
          >
            Report a Number
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavBar;
