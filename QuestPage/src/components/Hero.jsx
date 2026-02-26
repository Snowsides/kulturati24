import { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './Hero.css';

const ReactDatePicker = () => {
  const [dateRange, setDateRange] = useState([
    null,
    null
  ]);

  const [startDate, endDate] = dateRange;

  return <> 
    <DatePicker
      id="dateRange"
      placeholderText="Выберите конкретную дату или период"
      className="form-input"
      startDate={startDate}
      endDate={endDate}
      dateFormat="dd.MM.yyyy"
      onChange={(update) => {
        setDateRange(update);
      }}
      selectsRange
      isClearable
    /> </>
};

function Hero() {
  const [eventType, setEventType] = useState('');
  const [region, setRegion] = useState('');
  const [museum, setMuseum] = useState('');
  const [city, setCity] = useState('');
  const [audience, setAudience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="hero">
      <h1 className="hero-title">Подобрать культурную программу</h1>
      
      <form className="hero-form" onSubmit={handleSubmit}>
        <div className="form-row">

          <div className="form-field">
            <label  htmlFor="eventType" className="field-label">
              Какое культурное событие вы ищете?
            </label>
            <p className="field-hint">Выберите один или несколько типов событий</p>
            <div className="select-wrapper">
              <input
                type="text"
                id="eventType"
                className="form-input"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="Выберите"
              />
              <div className="chip-container">
                <div className="chip">
                  <span className="chip-text">Музей</span>
                  <button type="button" className="chip-close" aria-label="Удалить"><svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                </div>
                <div className="chip">
                  <span className="chip-text">Театр</span>
                  <button type="button" className="chip-close" aria-label="Удалить"><svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                </div>
              </div>
              <div className="input-actions">
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

          <div className="form-field">
            <label htmlFor="region" className="field-label">
              Выберите регион
            </label>
            <p className="field-hint"></p>
            <div className="select-wrapper">
             <input
                type="text"
                id="region"
                className="form-input"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Выберите"
              />
              <div className="select-actions">
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

          <div className="form-field">
            <label htmlFor="city" className="field-label">
              Выберите город
            </label>
            <p className="field-hint"></p>
            <div className="select-wrapper">
              <input
                type="text"
                id="city"
                className="form-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Выберите"
              />
              <div className="select-actions">
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

          <div className="form-field">
            <label htmlFor="museum" className="field-label">
              Какие сферы музеев вас интересуют?
            </label>
            <p className="field-hint"></p>
            <div className="select-wrapper">
              <div className="chip-container">
                <div className="chip">
                  <span className="chip-text">Биология</span>
                  <button type="button" className="chip-close" aria-label="Удалить"><svg width="8" height="8" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5" stroke="#C0C0C0" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div>
              </div>
             <input
                type="text"
                id="museum"
                className="form-input"
                value={museum}
                onChange={(e) => setMuseum(e.target.value)}
                placeholder="Выберите"
              />
              <div className="select-actions">
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

          <div className="form-field">
            <label htmlFor="dateRange" className="field-label">
              Какие даты вас интересуют?
            </label>
            <p className="field-hint">Выберите конкретную дату или период</p>
            <div className="select-wrapper">
              { ReactDatePicker() }
              <div className="input-actions">
                <button type="button" className="input-icon-btn calendar-btn" aria-label="Выбрать дату">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 1.5V3M4.5 1.5V3" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.99664 9.75H9.00336M8.99664 12.75H9.00336M11.9933 9.75H12M6 9.75H6.00673M6 12.75H6.00673" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.625 6H15.375" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.875 9.18243C1.875 5.91445 1.875 4.28046 2.81409 3.26523C3.75318 2.25 5.26462 2.25 8.2875 2.25H9.7125C12.7354 2.25 14.2468 2.25 15.1859 3.26523C16.125 4.28046 16.125 5.91445 16.125 9.18243V9.56757C16.125 12.8355 16.125 14.4695 15.1859 15.4848C14.2468 16.5 12.7354 16.5 9.7125 16.5H8.2875C5.26462 16.5 3.75318 16.5 2.81409 15.4848C1.875 14.4695 1.875 12.8355 1.875 9.56757V9.18243Z" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 6H15.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="audience" className="field-label">
              Для кого?
            </label>
            <p className="field-hint"></p>
            <div className="select-wrapper">
              <input
                type="text"
                id="audience"
                className="form-input"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="Выберите"
              />
              <div className="select-actions">
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

        <button type="submit" className="submit-btn">
          Подобрать события
        </button>

      </form>
    </div>
  )
}

export default Hero
