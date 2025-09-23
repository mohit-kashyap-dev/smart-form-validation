import { Container } from '@mui/material';
import Navbar from '../src/Components/Navbar'
import Hero from './Components/Hero';
import CakeSection from './Components/CakeSection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactUS from './Components/ContactUS';

const theme = createTheme({
  palette: {
      primary: {
          main: '#864313',
      },
  },
});

const App = () => {


  return (
  <>
  <ThemeProvider theme={theme}>

      <Navbar/>

      <Container>

       <Hero/>
       <CakeSection/>
       <ContactUS/>

      </Container>
    
    
    </ThemeProvider> 

  </>
  )
}

export default App
