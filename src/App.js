import { Routes, Route } from 'react-router-dom';
import BookmarkList from './components/BookmarkList';
import BookmarkDetails from './components/BookmarkDetails';
import React from 'react';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' exact element={<BookmarkList />} />
				<Route path='/:id' element={<BookmarkDetails />} />
			</Routes>
		</>
	);
}

export default App;
