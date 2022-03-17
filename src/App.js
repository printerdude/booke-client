import { Routes, Route } from 'react-router-dom';
import BookmarkList from './components/BookmarkList';
import BookmarkDetails from './components/BookmarkDetails';
import React from 'react';
import './App.css';

function App() {
<<<<<<< HEAD

  
  return (
    <>
    <h1>Bookmarks</h1>
     <BookmarkDetails />
    {/* <Routes>
      <Route path='/' el />
    </Routes> */}

    </>
  );
=======
	return (
		<>
			<Routes>
				<Route path='/' exact element={<BookmarkList />} />
				<Route path='/:id' element={<BookmarkDetails />} />
			</Routes>
		</>
	);
>>>>>>> 9e1bfd0445518a00e43b29c985ab4ee7529c3867
}

export default App;
