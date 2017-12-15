import React from 'react';
import {Link} from 'react-router-dom';

const TournamentInfo = ({id, title, author}) => {
  return (
    <div className="tournament-info">
      <div className="tournament-title">
        <Link to={`/tournament/${id}`}>
          {title}
        </Link>
      </div>
      <div className="tournament-author">
        by {author}
      </div>
    </div>
  );
};

export default TournamentInfo;
