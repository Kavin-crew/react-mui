import { Stack } from '@mui/material';
import MuiImageList from './components/MuiImageList';
import Homepage from './Pages/Homepage';
import MuiNavBar from './components/MuiNavBar';

function App() {
  return (
    <Stack>
      <MuiNavBar />
      <Homepage />
      {/* <MuiImageList /> */}
    </Stack>
  );
}

export default App;
