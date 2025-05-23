import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from './context/AuthContext.jsx';
import { AppProvider } from './context/context.jsx';

// 💤 Lazy load components and pages
const Loader = lazy(() => import('./components/Loader.jsx'))
const Layout = lazy(() => import('./components/Layout'));
const CodingAndProjects = lazy(() => import('./pages/CodingAndProjects.jsx'));
const Technology = lazy(() => import('./pages/Technology.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const EditBlog = lazy(() => import('./components/EditBlog.jsx'));
const BlogPage = lazy(() => import('./components/BlogPage.jsx'));
const Miscellaneous = lazy(() => import('./pages/Miscellaneous.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const CultureAndHistory = lazy(() => import('./pages/CultureAndHistory.jsx'));
const NewsAndCurrentAffairs = lazy(() => import('./pages/NewsAndCurrentAffairs.jsx'));
const InspirationAndPersonalDevelopment = lazy(() => import('./pages/InspirationAndPersonalDevelopment.jsx'));
const Signup = lazy(() => import('./components/Signup.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'));
const RedirectIfAuthenticated = lazy(() => import('./components/RedirectIfAuthenticated.jsx'));
const CreateBlog = lazy(() => import('./components/CreateBlog.jsx'));
const EducationAndLearning = lazy(() => import('./pages/EducationAndLearning.jsx'));
const Lifestyle = lazy(() => import('./pages/Lifestyle.jsx'));
const Finance = lazy(() => import('./pages/Finance.jsx'));
const Entertainment = lazy(() => import('./pages/Entertainment.jsx'));
const Profile = lazy(() => import('./components/Profile.jsx'));
const VerifyEmail = lazy(() => import('./components/VerifyEmail.jsx'));

// 🛣️ Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/technology', element: <ProtectedRoute><Technology /></ProtectedRoute> },
      { path: '/coding-projects', element: <ProtectedRoute><CodingAndProjects /></ProtectedRoute> },
      { path: '/miscellaneous', element: <ProtectedRoute><Miscellaneous /></ProtectedRoute> },
      { path: '/about', element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: '/contact', element: <ProtectedRoute><Contact /></ProtectedRoute> },
      { path: '/culture-history', element: <ProtectedRoute><CultureAndHistory /></ProtectedRoute> },
      { path: '/news-current-affairs', element: <ProtectedRoute><NewsAndCurrentAffairs /></ProtectedRoute> },
      { path: '/inspiration-personal-development', element: <ProtectedRoute><InspirationAndPersonalDevelopment /></ProtectedRoute> },
      { path: '/education-learning', element: <ProtectedRoute><EducationAndLearning /></ProtectedRoute> },
      { path: '/lifestyle', element: <ProtectedRoute><Lifestyle /></ProtectedRoute> },
      { path: '/finance', element:  <ProtectedRoute><Finance /></ProtectedRoute> },
      { path: '/entertainment', element: <ProtectedRoute><Entertainment /></ProtectedRoute> },
      { path: '/verify-email/:token', element: <VerifyEmail /> },
      { path: '/blog/:id', element: <BlogPage /> },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: '/create-blog',
        element: <ProtectedRoute><CreateBlog /></ProtectedRoute>
      },
      {
        path: '/edit/blog/:id',
        element: <ProtectedRoute><EditBlog /></ProtectedRoute>
      },
      {
        path: '/user/profile/:id',
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: '/signup',
        element: <RedirectIfAuthenticated><Signup /></RedirectIfAuthenticated>
      },
      {
        path: '/login',
        element: <RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <AppProvider>
          <Suspense fallback={<Loader/>}>
            <RouterProvider router={router} />
          </Suspense>
        </AppProvider>
      </AuthProvider>
    </MantineProvider>
  </StrictMode>
);
