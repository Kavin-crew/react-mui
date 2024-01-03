import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Stack,
  Tooltip,
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
          sx={{ minHeight: '600px' }}
          paddingTop={{ xs: '90px', md: '0' }}
        >
          <Box
            width={{ xs: '100%', md: '440px' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Typography variant="h6" color="white" fontWeight="600">
              Uncover Scammers:
            </Typography>
            <Typography variant="h2" color="white" fontWeight="600">
              Search, Verify, Protect!
            </Typography>
            <Typography variant="body1" color="white" my={2}>
              Explore Our Tool to Identify Scam Phone Numbers Instantly.
            </Typography>
            <Tooltip title="Scroll Down">
              <Link
                href="#"
                sx={{
                  transition: 'linear 0.3s',
                  '&:hover': {
                    opacity: 0.5,
                  },
                }}
              >
                <img
                  src="../images/thenounproject-2.svg"
                  alt="scrolldown icon"
                  width="29px"
                  height="66px"
                />
              </Link>
            </Tooltip>
          </Box>
          <Stack alignItems="center">
            <ImageList
              sx={{
                width: { xs: '100%', md: '527px' },
                height: { xs: 'auto', md: '423px' },
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
