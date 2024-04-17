import { gql } from '@apollo/client';
export const POSTS_QUERY = gql`
	{
		posts {
			edges {
				node {
					id
					slug
					title
					content(format: RAW)
					featuredImage {
						node {
							srcSet
							sourceUrl(size: LARGE)
							altText
						}
					}
				}
			}
			nodes {
				excerpt
			}
		}
	}
`;

export const MIN_POST_QUERY = gql`
	query MinPostQuery($after: String, $first: Int) {
		posts(first: $first, after: $after) {
			nodes {
				id
				excerpt
				slug
				title
				content
				featuredImage {
					node {
						altText
						id
						sourceUrl
					}
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`;
export const CONTENT_MIN_POST_QUERY = gql`
	query ContentMinPostQuery {
		posts(first: 100) {
			nodes {
				id
				excerpt
				slug
				title
				content
				isSticky
				headerImage {
					image {
						node {
							title
							altText
							sourceUrl
						}
					}
				}
				featuredImage {
					node {
						altText
						id
						sourceUrl
					}
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`;

export const GET_PAGES = gql`
	query NewQuery {
		allReviewsGoogle {
			nodes {
				content(format: RENDERED)
			}
		}
		pages {
			nodes {
				slug
				title
				id
				content(format: RENDERED)
				stronaIMG {
					pageimg {
						node {
							altText
							sourceUrl
						}
					}
				}
			}
		}
	}
`;
export const GET_PAGE_NAV = gql`
	query NewQuery {
		pages {
			nodes {
				slug
				title
				id
				children {
					edges {
						node {
							... on Page {
								id
								content
								slug
								title
								children {
									edges {
										node {
											... on Page {
												id
												slug
												title
												content
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
