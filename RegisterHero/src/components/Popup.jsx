import React, { useState } from "react";
import "./Popup.css";

function Popup({ isOpen, onClose }) {
  const [selectedReason, setSelectedReason] = useState("other");

  if (!isOpen) return null;

  const handleUnsubscribe = () => {
    console.log( 'selectedReason =', selectedReason );
    // onClose();
  };

  return (
    <div className="popup-overlay" onClick={ onClose }>
      <div className="popup" onClick={ (e) => e.stopPropagation() }>
        <div className="popup-header">
          <div className="popup-title">Отказ от подписки</div>
            <svg onClick={ onClose } className="popup-close-icon" width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 11L5 21M5 11L15 21" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        <div className="popup-description">
          Мы сожалеем о вашем решении отказаться о подписки на сервис
          "КУЛЬТУРАТЫ".
          <br />
          <br />
          Пожалуйста, расскажите, почему вы решили отписаться:
        </div>
        <div className="popup-option">
          <div className="popup-radio-wrapper">
            <div
              className={`popup-radio ${
                selectedReason === "plan" ? "popup-radio-selected" : ""
              }`}
              onClick={ () => setSelectedReason("plan") }
            >
              {selectedReason === "plan" && (
                <div className="popup-radio-inner"></div>
              )}
            </div>
          </div>
          <div className="popup-option-text">
            Решил перейти на другой тарифный план
          </div>
        </div>
        <div className="popup-option">
          <div className="popup-radio-wrapper">
            <div
              className={`popup-radio ${
                selectedReason === "expensive" ? "popup-radio-selected" : ""
              }`}
              onClick={() => setSelectedReason("expensive")}
            >
              {selectedReason === "expensive" && (
                <div className="popup-radio-inner"></div>
              )}
            </div>
          </div>
          <div className="popup-option-text">Дорого</div>
        </div>
        <div className="popup-option">
          <div className="popup-radio-wrapper">
            <div
              className={`popup-radio ${
                selectedReason === "recommendations" ? "popup-radio-selected" : ""
              }`}
              onClick={() => setSelectedReason("recommendations")}
            >
              {selectedReason === "recommendations" && (
                <div className="popup-radio-inner"></div>
              )}
            </div>
          </div>
          <div className="popup-option-text">
            Не нравятся подборки рекомендуемых событий
          </div>
        </div>
        <div className="popup-option">
          <div className="popup-radio-wrapper">
            <div
              className={`popup-radio ${
                selectedReason === "other" ? "popup-radio-selected" : ""
              }`}
              onClick={() => setSelectedReason("other")}
            >
              {selectedReason === "other" && (
                <div className="popup-radio-inner"></div>
              )}
            </div>
          </div>
          <div className="popup-option-text">Другое</div>
        </div>
        <div className="popup-buttons">
          <div className="popup-button-unsubscribe" onClick={handleUnsubscribe}>
            <div className="popup-button-text">Отменить подписку</div>
          </div>
          <div className="popup-button-close" onClick={ onClose }>
            <div className="popup-button-text">Закрыть</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
