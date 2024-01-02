import { Stack } from '@mui/material';
import MuiNavBar from '../components/MuiNavBar';
import MuiCardList from '../components/MuiCardList';

function Homepage() {
  return (
    <Stack>
      <MuiNavBar />
      <MuiCardList />
    </Stack>
  );
}

export default Homepage;
