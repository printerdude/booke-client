import React, { useState, useEffect } from 'react';

function BookmarkList(props) {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/bookmarks')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data[0]);
				setBookmarks(data);
			});
	}, []);

	return (
		<div>
			{{ bookmarks } ? (
				bookmarks.map((book, index) => (
					<div>
						<h1>Title: {book.title}</h1>
						<h1>URL: {book.url}</h1>
						{/* <button>DELETE</button> */}
					</div>
				))
			) : (
				<h1>loading..</h1>
			)}
		</div>
	);
}

export default BookmarkList;
