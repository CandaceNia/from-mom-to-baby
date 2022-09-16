import React, { useState } from 'react';

const Counter = () => {
  const [likeButton, setLikeButton] = useState(0);
  const [dislikeButton, setDisikeButton] = useState(0);

  let like = () => {
    setLikeButton(likeButton + 1);
  };

  let dislike = () => {
    setDisikeButton(dislikeButton + 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
        </div>
        <div className="buttons">
          <button onClick={like} className="like-button button">👍 {likeButton}</button>
          <button onClick={dislike} className="dislike-button button">👎 {dislikeButton}</button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
