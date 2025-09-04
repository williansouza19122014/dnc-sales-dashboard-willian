import { BannerImage } from "@/components";
import { Box, Container } from "@mui/material";
import { Grid } from '@mui/material'; // <- import correto para MUI v7


function Login() {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
          <Container maxWidth="sm">
            <h1>LOGIN</h1>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ display: {xs: 'none', sm: 'block'} }}>
            <BannerImage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
