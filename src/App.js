import styled from 'styled-components'
import Home from './pages/Home';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1678px;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
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
