import './DateFinish.css';

function DateFinish() {
  return (
    <div className="date-finish-container">
      <div className="date-input-group">
        <label className="date-input-label">
          Дата окончания голосования
        </label>
        <div className="date-input-field">
          <div className="date-placeholder">
            31.12.2025
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 0.75L0.75 10.75M0.75 0.75L10.75 10.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="date-icons">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 2.5V4M5.5 2.5V4" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.99664 10.75H10.0034M9.99664 13.75H10.0034M12.9933 10.75H13M7 10.75H7.00673M7 13.75H7.00673" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.625 7H16.375" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.875 10.1824C2.875 6.91445 2.875 5.28046 3.81409 4.26523C4.75318 3.25 6.26462 3.25 9.2875 3.25H10.7125C13.7354 3.25 15.2468 3.25 16.1859 4.26523C17.125 5.28046 17.125 6.91445 17.125 10.1824V10.5676C17.125 13.8355 17.125 15.4695 16.1859 16.4848C15.2468 17.5 13.7354 17.5 10.7125 17.5H9.2875C6.26462 17.5 4.75318 17.5 3.81409 16.4848C2.875 15.4695 2.875 13.8355 2.875 10.5676V10.1824Z" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.25 7H16.75" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>
        </div>
      </div>

      <div className="create-vote-button-wrapper">
        <button className="create-vote-button" disabled>
          <span className="create-vote-button-text">
            Создать голосование
          </span>
        </button>
      </div>
    </div>
  );
}

export default DateFinish;
