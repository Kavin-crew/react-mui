import { Container, Stack } from '@mui/material';
// import MuiImageList from './components/MuiImageList';
import Homepage from './Pages/Homepage';
import MuiNavBar from './components/MuiNavBar';
import MuiCard from './components/MuiCard';
import MuiCardList from './components/MuiCardList';
import Sample from './components/Sample';

function App() {
  return (
    <Stack>
      <MuiNavBar />
      {/* <Sample /> */}
      <MuiCardList />
      {/* <MuiImageList /> */}
    </Stack>
  );
}

export default App;
