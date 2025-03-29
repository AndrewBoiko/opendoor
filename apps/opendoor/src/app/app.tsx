import styled from '@emotion/styled';

import { Route, Routes, Link } from 'react-router-dom';
import { Header } from '../components/organisms/Header/Header';
import { BrowseHomesPage } from '../components/pages/BrowseHomesPage';
import { useEffect } from 'react';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export function App() {
  useEffect(() => {
    fetch(
      'https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/get-listings'
    );
  }, []);

  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path="/" element={<BrowseHomesPage />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
