import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import './index.css';
import Navigations from './components/nav/nav.jsx';
import About from './pages/about/about.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
	},
	{
		path: '/about',
		element: <About />,
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navigations />
		<RouterProvider router={router} />
	</React.StrictMode>
);
