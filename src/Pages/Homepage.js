import { Stack } from '@mui/material';
import MuiNavBar from '../components/MuiNavBar';
import Banner from '../Layouts/Banner';
import Bottom from '../Layouts/Bottom';
import Footer from '../Layouts/Footer';

function Homepage() {
  return (
    <Stack>
      <MuiNavBar />
      <Banner />
      <Bottom />
      <Footer />
    </Stack>
  );
}

export default Homepage;
