import * as React from "react";
import "./Hint.css";

function Hint() {
  return (
    <div className="hint-wrapper">
      
      <div className="hint-body">
        <div className="hint-text">Стоимость ежемесячной подписки: 270&nbsp;руб.<br/>
          Стоимость ежегодной подписки: 2700&nbsp;руб.<br/>
          Подписка продлевается автоматически, за 3 дня до списания мы пришлем напоминание о платеже.<br/>
          Вы можете отказаться от подписки в любой момент в вашем личном кабинете.
        </div>
      </div>

      <div className="hint-arrow">
        <div className="hint-beak" />
      </div>
    </div>
  );
}

export default Hint;
