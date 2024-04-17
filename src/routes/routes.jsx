import ErrorComponent from '../components/error/ErrorComponent';
import Home from '../pages/home/Home';
import { useRoutes } from 'react-router-dom';
import Navbar from '../components/nav/Navigation';
import SinglePostPage from '../pages/singlePost/SinglePostPage';
import Contact from '../pages/Contact/contact';

export function Routers({ mainRouter, aktRouter }) {
	const routes = [
		{
			path: '/',
			element: <Navbar />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/kontakt', element: <Contact /> },
				// { path: '*', element: <ErrorComponent /> },
			],
		},
		{
			path: '/page',
			element: <Navbar />,
			children: mainRouter,
		},
		{
			path: '/aktualnosci',
			element: <Navbar />,
			children: aktRouter,
		},

		// {
		// 	path: '/content',
		// 	element: <SinglePostPage/>
		// }
	];
	let element = useRoutes(routes);
	return element;
}
