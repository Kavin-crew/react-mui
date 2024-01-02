import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Container,
  Box,
} from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MuiDrawer from './MuiDrawer';

function MuiNavBar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ padding: 0, justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <PhoneAndroidIcon />
          </IconButton>
          <Box
            component="span"
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
          >
            <Typography variant="h4" component="span" fontWeight="600">
              G-UP
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Box component="nav" sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Categories</Button>
              <Button color="inherit">Blogs</Button>
              <Button color="inherit">Profiles</Button>
            </Box>
            <Button variant="contained" sx={btnReportOptions}>
              Report a Number
            </Button>
            <Box variant="span" sx={{ display: { xs: 'block', md: 'none' } }}>
              <MuiDrawer />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const btnReportOptions = {
  borderRadius: '55px',
  color: '#3F6FF9',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#3F6FF9',
    color: '#fff',
  },
};

export default MuiNavBar;
