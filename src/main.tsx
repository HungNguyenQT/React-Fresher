import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from 'pages/client/About.tsx';
import BookPage from 'pages/client/Book.tsx';
import LoginPage from 'pages/client/auth/Login.tsx';
import RegisterPage from 'pages/client/auth/Register.tsx';
import './styles/global.scss';
import HomePage from './pages/client/Home';
import { App as AntdApp, ConfigProvider } from 'antd';
import { AppProvider } from 'components/context/app.context';
import ProtectedRoute from 'components/auth/Index';
import LayoutAdmin from 'components/layout/layout.admin';
import ManageBookPage from '@/components/pages/admin/ManageBook';
import DashBoardPage from '@/components/pages/admin/DashBoard';
import ManageOrderPage from '@/components/pages/admin/ManageOrder';
import ManageUserPage from '@/components/pages/admin/ManageUser';
import enUS from 'antd/es/calendar/locale/en_US';
import viVN from 'antd/locale/vi_VN';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/book",
        element: <BookPage />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <div>checkout page</div>
          </ProtectedRoute>

        )
      }
    ]
  },
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashBoardPage />
          </ProtectedRoute>
        )
      },
      {
        path: "book",
        element: (
          <ProtectedRoute>
            <ManageBookPage />
          </ProtectedRoute>
        )
      },
      {
        path: "order",
        element: (
          <ProtectedRoute>
            <ManageOrderPage />
          </ProtectedRoute>
        )
      },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            <ManageUserPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <div>admin page</div>
          </ProtectedRoute>
        ),
      },

    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AntdApp>
      <AppProvider>
        <ConfigProvider locale={viVN}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </AppProvider>
    </AntdApp>
  </StrictMode>,
)
