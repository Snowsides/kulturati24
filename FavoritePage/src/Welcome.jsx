import * as React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div  className="welcome-wrapper">
      <div className="welcome-container">
        <div className="welcome-corner-decor welcome-corner-top-right"></div>
        <div className="welcome-corner-decor welcome-corner-bottom-left"></div>
        <div className="welcome-landing-card">
          <h1 className="welcome-title">Вас приветствует сервис КУЛЬТУРАТЫ!</h1>
          <p className="welcome-message">
            События, которые вы видите ниже, предложены представителем класса для совместного похода ваших детей.
          </p>
        </div>
      </div>
      <div className="welcome-spacer">
        <div className="welcome-head">Как работает голосование?</div>
        <div className="welcome-body">Узнайте, как проголосовать за интересующие вас события нажав на кнопку “Развернуть подсказку” в правом верхнем углу.</div>
      </div>
    </div>
  );
}

export default Welcome;
