import { Stack } from '@mui/material';
import MuiNavBar from '../components/MuiNavBar';
import MuiCardList from '../components/MuiCardList';
import Banner from '../Layouts/Banner';

function Homepage() {
  return (
    <Stack>
      <MuiNavBar />
      <Banner />
      <MuiCardList />
    </Stack>
  );
}

export default Homepage;
