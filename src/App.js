import { Stack } from '@mui/material';
import CardUser from './components/CardUser';

function App() {
  return (
    <Stack direction="row" spacing={2}>
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
    </Stack>
  );
}

export default App;
