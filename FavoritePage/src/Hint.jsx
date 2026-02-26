import * as React from "react";
import "./Hint.css";

function Hint() {
  return (
    <div className="hint-wrapper">
      
      <div className="hint-body">
        <div className="hint-text">
          Премия "Гвоздь сезона", Премия "Золотая Маска", Приз Международного
          театрального форума "Золотой Витязь", Театральная премия газеты
          "Московский комсомолец"
        </div>
      </div>

      <div className="hint-arrow">
        <div className="hint-beak" />
      </div>
    </div>
  );
}

export default Hint;
