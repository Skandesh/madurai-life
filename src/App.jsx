import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Explore from './components/Explore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Banner />
                  <Explore />
                </>
              }
            />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
