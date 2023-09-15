import './App.css';
import { Grid } from '@mui/material'
import Header from "./Components/Header"
import Title from './Components/Title';
import Body from './Components/Body'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between', mt: 8, backgroundColor: '#053B50'}}>
        <Grid Item xs={12}>
          <Title />
        </Grid>
        {/* <Grid Item xs={12} sx={{ backgroundColor: '#72a6a8' }}> */}
        {/* <Grid Item xs={12} sx={{ backgroundColor: '#2f6163' }}> */}
        <Grid Item xs={12}>
          <Body />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
