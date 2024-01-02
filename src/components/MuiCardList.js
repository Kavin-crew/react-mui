import { Box, Container, Grid } from '@mui/material';
import MuiCard from './MuiCard';

function MuiCardList() {
  return (
    <Box component="main">
      <Container>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <MuiCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MuiCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MuiCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MuiCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MuiCardList;
