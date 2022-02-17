import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';

const Container = styled.div`
`
function App() {
  return (
      <Router>
        <Container>
          <Navbar />
           
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<LoginPage />} />
              {/* <Route path="/second" exact element={<Second />} /> */}
            </Routes>
        </Container>
      </Router>
  );
}

export default App;
