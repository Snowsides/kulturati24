import * as React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="vote-info modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            ЛЮКСЕМБУРГСКИЙ САД
          </div>
          <svg onClick={onClose} className="modal-close-icon" width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 11L5 21M5 11L15 21" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="modal-info-section">
          <div className="info-block">
            <div className="info-content">
              <div className="step-number">1</div>
              <div className="step-description">
                Проверьте наличие билетов на <a href="#" className="step-link">сайте театра</a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-info-section">
          <div className="info-block">
            <div className="info-content">
              <div className="step-number">2</div>
              <div className="step-description">
                После проверки наличия достаточного для вашего класса количества
                билетов, укажите подходящие дату и время похода в театр
              </div>
            </div>
            <div className="input-row">
              <div className="input-wrapper">
                <div className="input-label-text">Дата</div>
                <div className="input-field">
                  <div className="input-placeholder">Выберите</div>
                  <svg className="input-icon" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 0.749999L8.25 8.25L0.75 0.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="input-wrapper">
                <div className="input-label-text">Время</div>
                <div className="input-field input-field-disabled">
                  <div className="input-placeholder">Укажите дату</div>
                  <svg className="input-icon" width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 0.749999L8.25 8.25L0.75 0.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-info-section">
          <div className="info-block">
            <div className="info-content">
              <div className="step-number">3</div>
              <div className="step-description">
                Добавьте комментарий для родителей (не обязательно)
              </div>
            </div>
            <div className="textarea-wrapper">
              <div className="input-label-text">Комментарий</div>
              <div className="textarea-field">
                <div className="textarea-placeholder">
                  Например, отзывы, ориентировочная цена билетов,
                  продолжительность и т.д.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <div className="button-save button-save-disabled">
            <div className="button-text">Сохранить</div>
          </div>
          <div className="button-close" onClick={onClose}>
            <div className="button-text">Закрыть</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
