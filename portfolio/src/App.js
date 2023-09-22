import './App.css';
import { Box } from '@mui/material'
import Header from "./Components/Header"
import Body from './Components/Body'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: { xs: 2, md: 5, lg: 10 }, mr: { xs: 2, md: 5, lg: 10 }, mt: { xs: 8, md: 9, lg: 15 }, mb: { xs: 8, md: 9, lg: 10 }}}>
        <Header />
        <Body />
        <Footer />
      </Box>
      {/* backgroundColor: '#053B50' */}
    </>
  );
}

export default App;
