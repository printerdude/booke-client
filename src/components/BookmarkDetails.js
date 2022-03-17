import React, { useEffect, useState } from 'react';


function BookmarkDetails(props) {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {


        fetch('http://localhost:8000/api/bookmarks')
        .then((res) => {
            return res.json();
        }).then(data => {
            console.log(data[0])
            setBookmarks(data)
        })
    }, []);

    return (
        <div>

        </div>
    );
}

export default BookmarkDetails;