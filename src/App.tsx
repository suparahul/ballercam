import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/games',
    element: <GamesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
