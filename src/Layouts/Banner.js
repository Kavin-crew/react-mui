import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from '@mui/material';

function Banner() {
  return (
    <Box
      component="section"
      sx={{
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #3F6FF9;',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Box width={{ xs: '100%', md: '440px' }}>
            <Typography variant="h6" color="white" fontWeight="600">
              Uncover Scammers:
            </Typography>
            <Typography variant="h2" color="white" fontWeight="600">
              Search, Verify, Protect!
            </Typography>
            <Typography variant="body1" color="white" my={2}>
              Explore Our Tool to Identify Scam Phone Numbers Instantly.
            </Typography>
          </Box>
          <Stack alignItems="center">
            <ImageList
              sx={{
                width: '527px',
                height: '423px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1486768801215-35f4fdd73abc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="human eye"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
