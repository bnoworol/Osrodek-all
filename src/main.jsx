import React from 'react';

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';

import App from './App.jsx';
const client = new ApolloClient({
	uri: import.meta.env.VITE_API_URL,
	// uri: 'https://api.lzs.info.pl/posts',
	cache: new InMemoryCache(),
});
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Home />,
// 		errorElement: <ErrorComponent />,
// 	},
// 	{
// 		path: '/aktualnosci',
// 		element: <Blog />,
// 	},
// 	{
// 		path: '/aktualnosci/:number',
// 		element: <Blog />,
// 	},
// 	{
// 		path: '/contact',
// 		element: <Contact />,
// 	},
// 	{
// 		path: 'aktualnosci/posts/:slug',
// 		element: <SinglePost />,
// 	},
// 	{
// 		path: ':slug',
// 		element: <OnePage />,
// 	},
// 	{
// 		path: '/test',
// 		element: <Facebooks />,
// 	},
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			{/* <BrowserRouter>
					<ScrollToTop />
					<Navbar /> */}
			{/* <Routes>
					<Route index path="/" element={<Home />} errorElement={<ErrorComponent />} />
					<Route path="/aktualnosci/*" element={<Blog />} />
					<Route path="/aktualnosci/:number" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/aktualnosci/:number/posts/:slug" element={<SinglePost />} />
					<Route path="/aktualnosci/posts/:slug" element={<SinglePost />} />
					<Route path="/test" element={<Facebooks />} />
					<Route path="/page/:slug" element={<OnePage />} />
					<Route path="/:slug" element={<OnePage />} />
					<Route path="/send" element={<Loading />} />
					<Route path="*" element={<ErrorComponent />} />
				</Routes> */}
			{/* <Routers />
					<Footer />
				</BrowserRouter> */}

			{/* <RouterProvider router={router} /> */}
		</ApolloProvider>
	</React.StrictMode>
);
