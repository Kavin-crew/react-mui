import { Container, Stack } from '@mui/material';
// import MuiImageList from './components/MuiImageList';
import Homepage from './Pages/Homepage';
import MuiNavBar from './components/MuiNavBar';
import MuiCard from './components/MuiCard';
import MuiCardList from './components/MuiCardList';

function App() {
  return (
    <Stack>
      <MuiNavBar />
      <MuiCardList />
      {/* <MuiImageList /> */}
    </Stack>
  );
}

export default App;
