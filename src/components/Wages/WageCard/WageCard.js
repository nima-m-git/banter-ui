import { useState } from "react";

const WageCard = ({ writer, play, betters, fill, addWager }) => {
  const [showBets, setShowBets] = useState(false);

  return (
    <div className="wage-card">
      <div className="name">{writer}</div>
      <div className="play-details">
        <div className="play">{play}</div>
        <div className="fill">{fill}</div>
      </div>
      {showBets && (
        <div className="betters">
          {betters.map((better) => {
            return (
              <div className="better">
                <div className="name">{better.name}</div>
                <div className="bet">{better.bet} - Goodluck!!</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
