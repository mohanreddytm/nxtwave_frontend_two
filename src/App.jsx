import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import FoodDetail from './pages/FoodDetail';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import SavedRecipes from './pages/SavedRecipes';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
    ],
  },
  {
    path: '/menu/:id',
    element: <FoodDetail />,
  },
  {
    path: '/saved-recipes',
    element: <SavedRecipes />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
