import React from 'react';
import "./comments.css";

const Comments = () => {
  const comments = [
    {
      name: "Devon Lanemm",
      date: "July 15, 2020",
      text: "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.",
    },
    {
      name: "Annette Black",
      date: "1 day ago",
      text: "@Devon Lane Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.",
    },
    {
      name: "Albert Flore",
      date: "July 7, 2020",
      text: "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.",
    },
    {
      name: "Marvin McKinne",
      date: "June 28, 2020",
      text: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.",
    },
  ];

  return (
    <div className="comments-container">
      <h2 className="comments-title">4 comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
            <div className="name">
            <h3 className="comment-name">{comment.name}</h3>
            <span className="comment-date">{comment.date}</span>
            </div>
            <div className="people">
            <p className="comment-text">{comment.text}</p>
            <a href="#" className="comment-reply">↩ Reply</a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
