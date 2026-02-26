import * as React from "react";
import "./CreateVoteModal.css";

function CreateVoteModal({ isOpen, onClose, onSubmit }) {
  const [collectionName, setCollectionName] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if ( collectionName.trim() ) {
      onSubmit(collectionName);
      setCollectionName("");
      onClose();
    }
  };

  const handleClose = () => {
    setCollectionName("");
    onClose();
  };

  return (
    <div className="vote-modal create-modal-overlay" onClick={handleClose}>
      {/* 1 */}
      <div className="create-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="create-modal-header">
          <h1 className="create-modal-title">Создать новое голосование</h1>
          <button 
            className="create-modal-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="create-modal-body">
          <label className="create-modal-label">Название подборки</label>
          <div className="input-field"> 
            <input
              type="text"
              className="create-modal-input"
              placeholder="Введите название для новой подборки"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </div>
        </div>

        <div className="create-modal-actions">
          <button 
            className="create-modal-button create-button"
            onClick={handleSubmit}
          >Создать</button>
          <button 
            className="create-modal-button close-button"
            onClick={handleClose}
          >Закрыть</button>
        </div>

      </div>
      {/* //1 */}

      {/* 2 */}
      <div className="create-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="create-modal-header">
          <h1 className="create-modal-title">Голосование создано!</h1>
          <button 
            className="create-modal-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="create-modal-body">
          <label className="create-modal-label">Ссылка на голосование</label>
          <div className="input-field input-field_bg"> 
            <input type="text" value="https://kulturati.ru/?vote=v2pdrfib" className="create-modal-input" />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
              <path d="M5.5 9.25C5.5 7.129 5.5 6.06775 6.15925 5.40925C6.81775 4.75 7.879 4.75 10 4.75H12.25C14.371 4.75 15.4323 4.75 16.0908 5.40925C16.75 6.06775 16.75 7.129 16.75 9.25V13C16.75 15.121 16.75 16.1823 16.0908 16.8408C15.4323 17.5 14.371 17.5 12.25 17.5H10C7.879 17.5 6.81775 17.5 6.15925 16.8408C5.5 16.1823 5.5 15.121 5.5 13V9.25Z" stroke="#C0C0C0" strokeWidth="1.5" />
              <path d="M5.5 15.25C4.90326 15.25 4.33097 15.0129 3.90901 14.591C3.48705 14.169 3.25 13.5967 3.25 13V8.5C3.25 5.67175 3.25 4.25725 4.129 3.379C5.008 2.50075 6.42175 2.5 9.25 2.5H12.25C12.8467 2.5 13.419 2.73705 13.841 3.15901C14.2629 3.58097 14.5 4.15326 14.5 4.75" stroke="#C0C0C0" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="create-modal-actions">
          <button 
            className="create-modal-button create-button"
            onClick={handleSubmit}
          >Копировать ссылку</button>
          <button 
            className="create-modal-button close-button"
            onClick={handleClose}
          >Закрыть</button>
        </div>

      </div>
      {/* //2 */}

      {/* 3 */}
      <div className="create-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="create-modal-header">
          <h1 className="create-modal-title">Завершение голосования</h1>
          <button 
            className="create-modal-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="create-modal-body">
          <div className="create-modal-info">
            Вы уверены, что хотите завершить голосование раньше указанного срока?
            </div>
        </div>

        <div className="create-modal-actions">
          <button 
            className="create-modal-button create-button create-button_bg"
            onClick={handleSubmit}
          >Завершить</button>
          <button 
            className="create-modal-button close-button"
            onClick={handleClose}
          >Закрыть</button>
        </div>

      </div>
      {/* //3 */}

      {/* 4 */}
      <div className="create-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="create-modal-header">
          <h1 className="create-modal-title">Очистить избранное</h1>
          <button 
            className="create-modal-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="create-modal-body">
          <div className="create-modal-info">
            Вы уверены, что хотите удалить все события из избранного?
            </div>
        </div>

        <div className="create-modal-actions">
          <button 
            className="create-modal-button create-button create-button_bg"
            onClick={handleSubmit}
          >Завершить</button>
          <button 
            className="create-modal-button close-button"
            onClick={handleClose}
          >Закрыть</button>
        </div>

      </div>
      {/* //4 */}
    </div>
  );
}

export default CreateVoteModal;
