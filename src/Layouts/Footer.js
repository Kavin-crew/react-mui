import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

function FooterArea() {
  return (
    <Box sx={{ backgroundColor: '#D9D9D9' }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems="center"
          sx={{ minHeight: '111px' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Typography
            variant="body1"
            sx={{ color: '#383838' }}
            fontSize={{ xs: '15px', md: '18px' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Copyright © {new Date().getFullYear()} G-UP. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Tooltip title="Faceebook">
              <Link href="#">
                <img src="../images/Facebook.svg" alt="facebook" />
              </Link>
            </Tooltip>
            <Tooltip title="Twitter">
              <Link href="#">
                <img src="../images/TwitterX.svg" alt="TwitterX" />
              </Link>
            </Tooltip>
            <Tooltip title="Instagram">
              <Link href="#">
                <img src="../images/Instagram.svg" alt="Instagram" />
              </Link>
            </Tooltip>
            <Tooltip title="YouTube">
              <Link href="#">
                <img src="../images/YouTube.svg" alt="YouTube" />
              </Link>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default FooterArea;
