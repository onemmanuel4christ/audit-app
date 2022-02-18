import styled from 'styled-components'
import Home from './pages/Home';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const Container = styled.div`
height: 100vh;
`
function App() {
  return (
      <Router>
        <Container>
             <Routes>
          <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<LoginPage />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
            </Routes>
        </Container>
      </Router>
  );
}

export default App;
