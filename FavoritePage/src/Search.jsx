import './Search.css';

function Search() {
  return (
    <div className="research search-container">
      <div className="search-wrapper">
        <div className="search-input-field">
          <div className="search-placeholder">
            <input
              type="text"
              placeholder="Поиск по текущей подборке..."
              value=""
              onChange=""
              className="result-input"
            />
          </div>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 15.75L12.125 12.125M14.0833 7.41667C14.0833 11.0986 11.0986 14.0833 7.41667 14.0833C3.73477 14.0833 0.75 11.0986 0.75 7.41667C0.75 3.73477 3.73477 0.75 7.41667 0.75C11.0986 0.75 14.0833 3.73477 14.0833 7.41667Z" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="search-controls-row">
          <div className="select-all-control">
            <div className="checkbox-wrapper">
              <div className="checkbox"></div>
            </div>
            <div className="select-all-text">
              Выбрать все
            </div>
          </div>
          <div className="collection-select">
            <div className="collection-select-field">
              <div className="collection-select-placeholder">
                <input
                  type="text"
                  placeholder="Выберите подборку"
                  value=""
                  onChange=""
                  className="result-input"
                />
              </div>
              <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 0.749999L8.25 8.25L0.75 0.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="save-button-wrapper">
            <div className="save-button">
              <div className="save-button-text">
                Сохранить выбранные события в подборку
              </div>
            </div>
          </div>
        </div>
        <div className="count-selected-wrapper">
          <div className="count-selected-text">
            Вы выбрали: 2 события
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
