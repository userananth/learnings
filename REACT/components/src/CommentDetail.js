import React from "react";
import faker from 'faker';

const CommentDetail = () => {
    return (<div className="comment">
        <a href="/" className="avarat">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author">sam</a>
            <div className="metadata">
                <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice Blog post!</div>
        </div>
    </div>);
};

export default CommentDetail;

