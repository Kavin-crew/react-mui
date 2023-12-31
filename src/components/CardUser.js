import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from '@mui/material';

function CardUser() {
  return (
    <Paper sx={paperOptions}>
      <Card sx={{ padding: '20px' }}>
        <Avatar
          alt="dummy user"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={avatarOptions}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight="800" color="black">
            090123456789
          </Typography>
          <Typography variant="body2">Dummy Name</Typography>
          <Typography variant="subtitle2" color="error">
            1 Report
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained">View</Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default CardUser;

const paperOptions = {
  maxWidth: '310px',
  width: '32%',
  textAlign: 'center',
  borderRadius: '20px',
};

const avatarOptions = {
  width: '87px',
  height: '87px',
  borderRadius: '50%',
  marginInline: 'auto',
};
