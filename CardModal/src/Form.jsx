import './Form.css';

function Form() {
  return (
    <div className="form-container">
      <div className="form-row">
        <div className="form-title">Поиск</div>
        <div className="form-input-group">
          <div className="form-label-wrapper">
            <div className="form-label-title">
              Какое культурное событие вы ищете?
            </div>
            <div className="form-label-subtitle">
              Выберите один или несколько вариантов
            </div>
          </div>
          <div className="form-input-field">
            <div className="form-chips-container">
              <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder=""
              />
              <div className="form-chip">
                <div className="form-chip-text">Музей</div>
                <button type="button" className="form-chip-remove-icon" aria-label="Удалить"><svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
              </div>
            </div>
            <div className="form-input-icons">
                <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>

        <div className="form-input-group">
          <div className="form-label-wrapper">
            <div className="form-label-title">
              Какие сферы музеев вас интересуют?
            </div>
            <div className="form-label-subtitle">
              Выберите один или несколько вариантов
            </div>
          </div>
          <div className="form-input-field">
            <div className="form-chips-container">
              <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder=""
              />
              <div className="form-chip">
                <div className="form-chip-text">Биология</div>
                <button type="button" className="form-chip-remove-icon" aria-label="Удалить"><svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
              </div>
            </div>
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-input-group">
          <div className="form-label-wrapper">
            <div className="form-label-title">Выберите регион</div>
          </div>
          <div className="form-input-field">
          <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder="Московская область"
              />
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>

        <div className="form-input-group">
          <div className="form-label-wrapper">
            <div className="form-label-title">Выберите город</div>
          </div>
          <div className="form-input-field">
            <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder="Московская область"
              />
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-input-group">
          <div className="form-label-wrapper">
            <div className="form-label-title">
              Какие даты вас интересуют?
            </div>
            <div className="form-label-subtitle">
              Выберите конкретную дату или период
            </div>
          </div>
          <div className="form-input-field">
            <div className="form-placeholder-text">16.10.2025-07.11.2025</div>
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>

        <div className="form-input-group form-input-group-half">
          <div className="form-label-wrapper">
            <div className="form-label-title">Для кого?</div>
          </div>
          <div className="form-input-field">
            <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder="Подростки и дети"
              />
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>

        <div className="form-input-group form-input-group-half">
          <div className="form-label-wrapper">
            <div className="form-label-title">Класс</div>
          </div>
          <div className="form-input-field">
            <input
                type="text"
                id=""
                className="form-input"
                value=""
                placeholder="11 класс"
              />
            <div className="form-input-icons">
              <button type="button" className="input-icon-btn" aria-label="Очистить">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button type="button" className="input-icon-btn" aria-label="Открыть список">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
