import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Blog from './pages/about/Blog.jsx';
import ErrorComponent from './components/error/ErrorComponent.jsx';
import Footer from './components/footer/footer.jsx';
import SinglePost from './pages/singlePost/singlePost.jsx';
import Contact from './pages/Contact/contact.jsx';
import Home from './pages/home/Home.jsx';
import Navbar from './components/nav/Navigation.jsx';
import OnePage from './pages/onePage/OnePage.jsx';
import Facebooks from './components/FacebookApi/Facebook.jsx';
import ScrollToTop from './components/scrollTop/ScrollTop.jsx';
import Loading from './components/Loading/Loading.jsx';
import { Routers } from './routes/routes.jsx';
import { useState, useEffect } from 'react';

let mainRouter = [
	{ path: '/page', element: <Home /> },
];
let aktRouter = [
	{
		path: '/aktualnosci/',
		element: <Blog />,
	},
	{
		path: '/aktualnosci/:number',
		element: <Blog />,
	},
];
export default function App() {
	// const [allNav, setAllNav] = useState(undefined);
	// const [allSlug, setAllSlug] = useState(undefined);

	// let apiURL = 'https://api.devstation.pl/graph/nav';
	// let apiURLdevPage = 'http://localhost:3000/graph/nav';
	// let apiURLdevPOST = 'http://localhost:3000/graph/posts_content';
	// useEffect(() => {
	// 	async function getData() {
	// 		const request = fetch(apiURLdevPOST);
	// 		const response = await request;
	// 		const parsed = await response.json();
	// 		setAllSlug(parsed.data.posts.nodes);
	// 	}
	// 	getData();
	// }, []);

	// useEffect(() => {
	// 	async function getData() {
	// 		const request = fetch(apiURLdevPage);
	// 		const response = await request;
	// 		const parsed = await response.json();
	// 		setAllNav(parsed.data.pages.nodes);
	// 	}
	// 	getData();
	// }, []);

	mainRouter.push({ path: `/page/:slug`, element: <OnePage /> });

	aktRouter.push({ path: `/aktualnosci/posts/:slug`, element: <SinglePost /> });

	return (
		<>
			{/* <Navbar /> */}
			<Routers mainRouter={mainRouter} aktRouter={aktRouter} />
			<ScrollToTop />
			<Footer />
		</>
	);
}
