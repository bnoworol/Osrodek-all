import './post.css';
import { createBrowserHistory } from '@remix-run/router';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import { Link, useNavigate, useParams } from 'react-router-dom';
let PageSize = 4;
export function Posts({ dataAll }) {
	const { postS } = useParams();
	const refs = useRef(null);
	const navigate = useNavigate()
	setTimeout(() => {
		if (window.location.pathname === '/aktualnosci/NaN') {
			// window.location.pathname = '/aktualnosci/1';
			navigate('/aktualnosci/1')
			window.location.reload()
		}
	}, 1);
	const history = createBrowserHistory();
	let paths = 1;

	if (Number(window.location.pathname.charAt(window.location.pathname.length - 1)) == 1) {
		paths = 1;
	} else {
		paths = Number(window.location.pathname.charAt(window.location.pathname.length - 1));
	}

	const [currentPage, setCurrentPage] = useState(paths);
	const goUp = 100 + 'vh';
	const currentTableData = useMemo(() => {
		console.log(currentPage);
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		history.push(currentPage == 1 ? `/aktualnosci/1` : `/aktualnosci/${currentPage}`);
		return dataAll.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
	const totalSize = dataAll.length / PageSize;
	function StickyPost(post) {
		if (post.isSticky) {
			return (
				// <a key={post.id} href={'posts/' + post.slug} className={`posts_container`} id={post.slug}>
				<Link
					onClick={() => {
						history.push(`/aktualnosci/${currentPage}`);
					}}
					key={post.id}
					to={`../posts/${post.slug}`}
					className={`posts_container`}
					id={post.slug}>
					<div className="post">
						<img
							src={
								post.headerImage.image === null
									? 'http://lzs.info.pl/wp-content/uploads/2023/01/fb_tb.png'
									: post.headerImage.image.node.sourceUrl
							}
							alt={post.headerImage.image === null ? 'Przykładowy alt' : post.headerImage.image.node.altText}
							className="post_thumbnail"></img>
						<div className="post_content">
							<h2 className="post_title">{post.title}</h2>
						</div>
					</div>
				</Link>
				// </a>
			);
		}
	}
	function noStickyPost(post) {
		if (!post.isSticky) {
			return (
				<Link
					onClick={() => {
						history.push(`/aktualnosci/${currentPage}`);
					}}
					key={post.id}
					to={`../posts/${post.slug}`}
					className={`posts_container`}
					id={post.slug}>
					{/* <a key={post.id} href={'posts/' + post.slug} className={`posts_container`} id={post.slug}> */}
					<div className="post">
						<img
							src={
								post.headerImage.image === null
									? 'http://lzs.info.pl/wp-content/uploads/2023/01/fb_tb.png'
									: post.headerImage.image.node.sourceUrl
							}
							alt={post.headerImage.image === null ? 'Przykładowy alt' : post.headerImage.image.node.altText}
							className="post_thumbnail"></img>
						<div className="post_content">
							<h2 className="post_title">{post.title}</h2>
						</div>
					</div>
					{/* </a> */}
				</Link>
			);
		}
	}
	if (totalSize < paths - 0.5 && totalSize < paths) {
		return (
			<div>
				<h1>Nie mamy tylu stron!</h1>
			</div>
		);
	} else {
		return (
			<>
				<div ref={refs} key={0} className="posts" id="posts">
					{currentTableData.map(post => StickyPost(post))}
					{currentTableData.map(post => noStickyPost(post))}
				</div>
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={dataAll.length}
					pageSize={PageSize}
					onPageChange={page => {
						setCurrentPage(page);
						history.push(currentPage == 1 ? `/aktualnosci/1` : `/aktualnosci/${currentPage}`);
						setTimeout(() => {
							refs.current.children[0].children[0].scrollIntoView();
						}, 1);
					}}
				/>
			</>
		);
	}
}
export default Posts;
