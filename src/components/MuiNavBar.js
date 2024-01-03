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
    <AppBar position="static" sx={appNavBarOptions}>
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
              <Button color="inherit" sx={{ textTransform: 'initial' }}>
                Home
              </Button>
              <Button color="inherit" sx={{ textTransform: 'initial' }}>
                Categories
              </Button>
              <Button color="inherit" sx={{ textTransform: 'initial' }}>
                Blogs
              </Button>
              <Button color="inherit" sx={{ textTransform: 'initial' }}>
                Profiles
              </Button>
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

const appNavBarOptions = {
  background:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #3F6FF9;',
  borderBottom: '2px solid #fff',
  boxShadow: 'unset',
  minHeight: '100px',
  justifyContent: 'center',
};

const btnReportOptions = {
  textTransform: 'initial',
  borderRadius: '55px',
  color: 'primary.main',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: 'primary.main',
    color: '#fff',
  },
};

export default MuiNavBar;
