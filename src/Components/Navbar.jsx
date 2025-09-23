import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

  return (
    <AppBar position='fixed'>
      
      <Toolbar>

      <Typography variant='h6' sx={{flexGrow: 1}}>
          REACT MUI
      </Typography>

      <Button variant="text" color='inherit' startIcon={<LoginIcon/>}>
        Login
      </Button>

      <Button variant="text" color='inherit' endIcon={<LogoutIcon/>}>
        Logout
      </Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
