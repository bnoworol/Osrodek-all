import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';
import './pagin.css';
const Pagination = props => {
	const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul key={1} className={classnames('pagination-container', { [className]: className })}>
			<li key={2}
				className={classnames('pagination-item', {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}>
				<div key={3} className='arrow left' />
			</li>
			{paginationRange.map(pageNumber => {
				if (pageNumber === DOTS) {
					return <li key={pageNumber} className='pagination-item dots'>&#8230;</li>;
				}

				return (
					<li key={pageNumber}
						className={classnames('pagination-item', {
							selected: pageNumber === currentPage,
						})}
						onClick={() => onPageChange(pageNumber)}>
						{pageNumber}
					</li>
				);
			})}
			<li key={6}
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}>
				<div key={7} className='arrow right' />
			</li>
		</ul>
	);
};

export default Pagination;
