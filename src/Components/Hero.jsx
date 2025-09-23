import { Box, Button, Typography } from "@mui/material";
import Cake from '../images/cake.png';

const Hero = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, alignItems: "center",
              justifyContent: "space-between", gap: 8, p: 8,}}>

      <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 50%" }, order: { xs: 2, sm: 1 } }}>

        <Typography variant="h3" gutterBottom>
          MUI React Design
        </Typography>

        <Typography variant="h5">
          Better Creativity Smart Work
        </Typography>

        <Button size="large" variant="contained" sx={{ borderRadius: 5, mt: 3 }}>
          Call Us
        </Button>

      </Box>

      <Box sx={{flex: { xs: "1 1 100%", sm: "1 1 50%" }, order: { xs: 1, sm: 2 }, 
            display: "flex", justifyContent: "center", alignItems: "center",}}>

        <Box component="img" src={Cake} alt="Cake" sx={{ maxWidth: "100%", height: "auto" }} />
     </Box>
    </Box>
  );
};

export default Hero;

