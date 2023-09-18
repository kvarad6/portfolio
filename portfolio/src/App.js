import './App.css';
import { Box } from '@mui/material'
import Header from "./Components/Header"
import Title from './Components/Title';
import Body from './Components/Body'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Title />
        <Body />
        <Footer />
    </Box>
    {/* backgroundColor: '#053B50' */}
    </>
  );
}

export default App;
