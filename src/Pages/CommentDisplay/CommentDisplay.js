import React, { useEffect, useState } from 'react';
import './CommentDisplay.css'
import SingleComment from './SingleComment/SingleComment';

const CommentDisplay = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://limitless-forest-07232.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])
    return (
        <div className='container mt-3'>
            <hr />
            <h1 style={{ textAlign: 'center', background: 'White', color: 'black' }}>Customer Review</h1>
            <hr />
            <div className='servicesm'>

                {
                    comments.map(comment => <SingleComment
                        key={comment._id}
                        comment={comment}
                        setComments={setComments}
                    ></SingleComment>)
                }
            </div>
        </div>
    );
};

export default CommentDisplay;