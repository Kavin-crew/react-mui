import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MuiCardList from '../components/MuiCardList';

function Bottom() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#F8F8F8',
      }}
    >
      <Container>
        <Stack
          textAlign="center"
          sx={{ minHeight: '618px', paddingBlock: '40px' }}
        >
          <Typography
            fontSize={60}
            fontWeight={600}
            sx={{
              color: '#181818',
              marginBottom: '38px',
              fontSize: { xs: '40px', md: '60px' },
            }}
          >
            Check It Now
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            gap={3}
            sx={{ marginBottom: '70px' }}
            alignItems="center"
          >
            <TextField
              placeholder="09123456789"
              fontSize={20}
              fontWeight={600}
              sx={{
                borderRadius: '200px',
                maxWidth: '308px',
              }}
            />
            <Button variant="contained" disableElevation sx={btnSearchOptions}>
              Search Now
            </Button>
          </Stack>
          <MuiCardList />
        </Stack>
      </Container>
    </Box>
  );
}

const btnSearchOptions = {
  textTransform: 'initial',
  fontSize: '20px',
  fontWeight: '600',
  maxWidth: '198px',
  width: '100%',
  borderRadius: '55px',
  backgroundColor: 'primary.main',
  color: '#fff',
  '&:hover': {
    color: 'primary.main',
    backgroundColor: '#fff',
  },
};

export default Bottom;
