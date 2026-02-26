import React, { useState } from "react";
import "./Form.css";
import Hint from "./Hint";
import Popup from "./Popup";
import Notification from "./Notification";

function Form() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedMode, setSelectedMode] = useState("double");
  const modeLabels = {
    double: "Двойной режим",
    personal: "Для личного использования",
    group: "Для школьных групп",
  };

  const planTexts = {
    double: {
      monthly: "Ежемесячная — 270 руб/мес",
      yearly: "Годовая — 2700 руб/год (экономия 450 руб)",
    },
    personal: {
      monthly: "Ежемесячная (личная) — 199 руб/мес",
      yearly: "Годовая (личная) — 1990 руб/год",
    },
    group: {
      monthly: "Ежемесячная (группа) — 450 руб/мес",
      yearly: "Годовая (группа) — 4500 руб/год",
    },
  };

  const [showHint, setShowHint] = React.useState(false);

  const handleBandClick = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="profile form-container">
      <div className="tab-group">
        <div 
          className={`tab ${activeTab === "profile" ? "tab-active" : "tab-inactive"}`}
          onClick={() => setActiveTab("profile")}
        >
          <div className={`tab-label ${activeTab === "profile" ? "tab-label-active" : "tab-label-inactive"}`}>
            Редактирование профиля
          </div>
        </div>
        <div 
          className={`tab ${activeTab === "subscription" ? "tab-active" : "tab-inactive"}`}
          onClick={() => setActiveTab("subscription")}
        >
          <div className={`tab-label ${activeTab === "subscription" ? "tab-label-active" : "tab-label-inactive"}`}>
            Управление подпиской
          </div>
        </div>
      </div>

      {activeTab === "profile" && (
        <>
          <div className="form-section">

            <div className="section-title">Расскажите о себе</div>
            <div className="section-description">
              Укажите информацию о вашем поле и возрасте, она поможет нам более точно подобрать подходящие для вас события
            </div>

            <div className="input-row">

              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="first_name" className="input-label">Имя</label>
                </div>
                <div className="input-field">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="Имя"
                    className="input-text"/>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="gender" className="input-label">Пол</label>
                </div>
                <div className="input-field">
                  <input
                    id="gender"
                    name="gender"
                    type="text"
                    placeholder="Выберите ваш пол"
                    className="input-text"/>
                  <div className="input-icons">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-icon"><path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="age" className="input-label">Возраст</label>
                </div>
                <div className="input-field">
                  <input
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Введите ваш возраст"
                    className="input-text"/>
                </div>
              </div>
            </div>

          </div>

          <div className="form-section">
            <div className="section-title">Расскажите о классе</div>
            <div className="section-description">
              Укажите, в каком классе и где учатся ваши подопечные, это поможет нам
              более точно подобрать подходящие события
            </div>
            <div className="input-row">
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="school_class" className="input-label">Школьный класс</label>
                </div>
                <div className="input-field">
                  <input
                    id="school_class"
                    name="school_class"
                    type="text"
                    placeholder="Введите ваш класс"
                    className="input-text"/>
                    <div className="input-icons">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon"><path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-icon"><path d="M17.5 6.25L10 13.75L2.5 6.25" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="region" className="input-label">Регион</label>
                </div>
                <div className="input-field">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    placeholder="Введите ваш регион"
                    className="input-text"/>
                  <div className="input-icons">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon"><path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="city" className="input-label">Город</label>
                </div>
                <div className="input-field">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Введите ваш город"
                    className="input-text"/>
                  <div className="input-icons">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon"><path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="section-title">Изменение пароля</div>
            <div className="section-description">
              Если вы не хотите менять пароль, нажмите на кнопку "Отменить"
            </div>
            <div className="input-row">
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="password" className="input-label">Текущий пароль</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    minlength="5"
                    maxlength="8"
                    id="password"
                    name="password"
                    placeholder="********"
                    className="input-text"/>
                  <div className="input-icons">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon"><path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="eye-icon"><g clipPath="url(#clip0_1797_748)"><path d="M16.3447 6.08462L15.4415 6.98779C16.5005 7.98168 17.2673 9.0411 17.6821 9.68015C17.2064 10.4002 16.2678 11.6988 14.9563 12.8045C12.7201 14.6876 10.299 15.2448 7.9534 14.4759L6.9464 15.4829C7.94552 15.8984 8.96725 16.1089 10.0062 16.1089H9.99337C12.012 16.1089 13.9535 15.3374 15.7792 13.7945C17.2835 12.5345 18.3378 11.0559 18.8264 10.2845C19.0579 9.91159 19.0579 9.46158 18.8264 9.08871C18.4016 8.41789 17.549 7.2221 16.3447 6.08462Z" fill="#C0C0C0"/><path d="M3.65415 13.2878C2.45027 12.1505 1.59794 10.9551 1.17318 10.2845C1.06005 10.1056 1 9.89824 1 9.68658C1 9.47492 1.06005 9.2676 1.17318 9.08871C1.66176 8.31726 2.71607 6.83866 4.22039 5.57863C6.99162 3.24651 10.1109 2.6843 13.0499 3.89199L12.0579 4.88403C9.71265 4.11572 7.29198 4.67297 5.05612 6.5558C3.74467 7.66154 2.80607 8.96014 2.33035 9.68015C2.74507 10.319 3.51155 11.3781 4.57017 12.3718L3.65415 13.2878Z" fill="#C0C0C0"/><path d="M9.56518 12.8641C9.7105 12.8842 9.85784 12.8945 10.0062 12.8945C10.8587 12.8945 11.6763 12.5559 12.2791 11.953C12.8819 11.3502 13.2206 10.5327 13.2206 9.68015C13.2206 9.53176 13.2103 9.38442 13.1902 9.23909L9.56518 12.8641Z" fill="#C0C0C0"/><path d="M10.4459 6.496L6.82208 10.1199C6.80207 9.97497 6.79188 9.82809 6.79188 9.68015C6.79188 8.82765 7.13053 8.01007 7.73334 7.40726C8.33615 6.80445 9.15373 6.4658 10.0062 6.4658C10.1542 6.4658 10.301 6.47599 10.4459 6.496Z" fill="#C0C0C0"/><path fillRule="evenodd" clipRule="evenodd" d="M16.4306 3.25924C16.6917 3.52034 16.6917 3.94366 16.4306 4.20476L3.89458 16.7408C3.63348 17.0019 3.21016 17.0019 2.94906 16.7408C2.68796 16.4797 2.68796 16.0563 2.94906 15.7952L15.485 3.25924C15.7461 2.99814 16.1695 2.99814 16.4306 3.25924Z" fill="#C0C0C0"/></g><defs><clipPath id="clip0_1797_748"><rect width="20" height="20" fill="white" /></clipPath></defs></svg>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="repassword" className="input-label">Новый пароль</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    minlength="5"
                    maxlength="8"
                    id="repassword"
                    name="repassword"
                    placeholder="********"
                    className="input-text"/>
                  <div className="input-icons">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon"
                    ><path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      /></svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="eye-icon"><path
                        d="M10.0062 16.4174C8.00047 16.4174 6.059 15.6331 4.22039 14.1031C2.71607 12.8302 1.66176 11.3645 1.17318 10.593C1.06005 10.4141 1 10.2068 1 9.99516C1 9.7835 1.06005 9.57618 1.17318 9.39729C1.66176 8.62584 2.71607 7.14724 4.22039 5.88721C7.8719 2.81429 12.1277 2.81429 15.7792 5.88721C17.2835 7.1601 18.3378 8.62584 18.8264 9.39729C19.0579 9.77016 19.0579 10.2202 18.8264 10.593C18.3378 11.3645 17.2835 12.8431 15.7792 14.1031C13.9535 15.646 12.012 16.4174 9.99337 16.4174H10.0062ZM2.33035 9.98873C2.80607 10.7216 3.74467 12.0073 5.05612 13.1131C8.23191 15.7874 11.7806 15.7874 14.9563 13.1131C16.2678 12.0073 17.2064 10.7087 17.6821 9.98873C17.2064 9.25586 16.2678 7.97012 14.9563 6.86438C11.7806 4.19003 8.23191 4.19003 5.05612 6.86438C3.74467 7.97012 2.80607 9.26872 2.33035 9.98873Z"
                        fill="#C0C0C0"/><path
                        d="M10.0062 13.2031C9.15373 13.2031 8.33615 12.8644 7.73334 12.2616C7.13053 11.6588 6.79188 10.8412 6.79188 9.98873C6.79188 9.13623 7.13053 8.31865 7.73334 7.71584C8.33615 7.11303 9.15373 6.77438 10.0062 6.77438C10.8587 6.77438 11.6763 7.11303 12.2791 7.71584C12.8819 8.31865 13.2206 9.13623 13.2206 9.98873C13.2206 10.8412 12.8819 11.6588 12.2791 12.2616C11.6763 12.8644 10.8587 13.2031 10.0062 13.2031ZM10.0062 8.06012C8.93907 8.06012 8.07762 8.92157 8.07762 9.98873C8.07762 11.0559 8.93907 11.9173 10.0062 11.9173C11.0734 11.9173 11.9348 11.0559 11.9348 9.98873C11.9348 8.92157 11.0734 8.06012 10.0062 8.06012Z"
                        fill="#C0C0C0"/></svg>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="newpassword" className="input-label">Подтвердите новый пароль</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    minlength="5"
                    maxlength="8"
                    id="newpassword"
                    name="newpassword"
                    placeholder="********"
                    className="input-text"/>
                  <div className="input-icons">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="clear-icon">
                        <path d="M15 5L5 15M5 5L15 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="eye-icon">
                        <path d="M10.0062 16.4174C8.00047 16.4174 6.059 15.6331 4.22039 14.1031C2.71607 12.8302 1.66176 11.3645 1.17318 10.593C1.06005 10.4141 1 10.2068 1 9.99516C1 9.7835 1.06005 9.57618 1.17318 9.39729C1.66176 8.62584 2.71607 7.14724 4.22039 5.88721C7.8719 2.81429 12.1277 2.81429 15.7792 5.88721C17.2835 7.1601 18.3378 8.62584 18.8264 9.39729C19.0579 9.77016 19.0579 10.2202 18.8264 10.593C18.3378 11.3645 17.2835 12.8431 15.7792 14.1031C13.9535 15.646 12.012 16.4174 9.99337 16.4174H10.0062ZM2.33035 9.98873C2.80607 10.7216 3.74467 12.0073 5.05612 13.1131C8.23191 15.7874 11.7806 15.7874 14.9563 13.1131C16.2678 12.0073 17.2064 10.7087 17.6821 9.98873C17.2064 9.25586 16.2678 7.97012 14.9563 6.86438C11.7806 4.19003 8.23191 4.19003 5.05612 6.86438C3.74467 7.97012 2.80607 9.26872 2.33035 9.98873Z"
                          fill="#C0C0C0"
                        /><path
                          d="M10.0062 13.2031C9.15373 13.2031 8.33615 12.8644 7.73334 12.2616C7.13053 11.6588 6.79188 10.8412 6.79188 9.98873C6.79188 9.13623 7.13053 8.31865 7.73334 7.71584C8.33615 7.11303 9.15373 6.77438 10.0062 6.77438C10.8587 6.77438 11.6763 7.11303 12.2791 7.71584C12.8819 8.31865 13.2206 9.13623 13.2206 9.98873C13.2206 10.8412 12.8819 11.6588 12.2791 12.2616C11.6763 12.8644 10.8587 13.2031 10.0062 13.2031ZM10.0062 8.06012C8.93907 8.06012 8.07762 8.92157 8.07762 9.98873C8.07762 11.0559 8.93907 11.9173 10.0062 11.9173C11.0734 11.9173 11.9348 11.0559 11.9348 9.98873C11.9348 8.92157 11.0734 8.06012 10.0062 8.06012Z"
                          fill="#C0C0C0"/>
                      </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="button-cancel">Отменить</button>
            <button className="button-save">Сохранить изменения</button>
          </div>
        </>
      )}

      {activeTab === "subscription" && (
        <>
          <div className="subscription-content">
            <div className="section-title">Текущий режим и тарифный план</div>
            <div className="current-mode">{modeLabels[selectedMode]}</div>
            <div className="current-plan">Пробный тариф — бесплатно 7 дней</div>

            <div id="subscription-notification" className="subscription-notification">
              <Notification />
            </div>
            
            <div className="section-title">Изменить текущий вариант подписки</div>
            <div className="subscription-notice">При смене варианта подписки переключение на другой тариф будет осуществлено в течение 24 часов. Более подробно с условиями предоставления услуг и информацию о тарифных планах можно узнать <a href="#" className="underlined-link">Публичной оферте</a>.
            </div>

            <div id="mode-selector" className="mode-selector">
              <div className={`mode-option ${selectedMode === "double" ? "mode-option-active" : ""}`}>
                <div className={`mode-option-label ${selectedMode === "double" ? "mode-option-label-active" : ""}`} onClick={() => setSelectedMode("double")}>Двойной режим</div>
                {showHint && <Hint />}
                <span className="mode-option-icon" onClick={handleBandClick} />
              </div>
              <div className={`mode-option ${selectedMode === "personal" ? "mode-option-active" : ""}`}>
                <div className={`mode-option-label ${selectedMode === "personal" ? "mode-option-label-active" : ""}`} onClick={() => setSelectedMode("personal")}>Для личного использования</div>
                <span className="mode-option-icon" />
              </div>
              <div className={`mode-option ${selectedMode === "group" ? "mode-option-active" : ""}`}>
                <div className={`mode-option-label ${selectedMode === "group" ? "mode-option-label-active" : ""}`} onClick={() => setSelectedMode("group")}>Для школьных групп</div>
                <span className="mode-option-icon" />
              </div>
            </div>
            
            <div id="plan-options" className="plan-options">
              <div className="plan-option">
                <div className="radio-control">
                  <div className="radio-button radio-button-selected">
                    <div className="radio-button-inner"></div>
                  </div>
                </div>
                <div className="plan-option-label">{planTexts[selectedMode].monthly}</div>
              </div>

              <div className="plan-option">
                <div className="radio-control">
                  <div className="radio-button radio-button-unselected"></div>
                </div>
                <div className="plan-option-label">{planTexts[selectedMode].yearly}</div>
              </div>
            </div>

            <div className="section-title">Платежные данные</div>
            <div className="payment-notice">
              Ваши платежные данные защищены и обрабатываются в соответствии с PCI DSS
            </div>

            <div className="payment-fields-row">
              <div className="payment-input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="number_card" className="input-label">Номер карты</label>
                </div>
                <div className="input-field">
                  <input
                    id="number_card"
                    name="number_card"
                    type="text"
                    placeholder="Введите номер карты"
                    className="input-text"/>
                </div>
              </div>
              <div className="payment-input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="valid_date_card" className="input-label">Срок действия</label>
                </div>
                <div className="input-field">
                  <input
                    id="valid_date_card"
                    name="valid_date_card"
                    type="month"
                    placeholder="мм/гг"
                    className="input-text"/>
                </div>
              </div>
              <div className="payment-input-group">
                <div className="input-label-wrapper">
                  <label htmlFor="cvv_card" className="input-label">CVV код</label>
                </div>
                <div className="input-field">
                  <input
                    id="cvv_card"
                    name="cvv_card"
                    minlength="3"
                    maxlength="3"
                    type="month"
                    placeholder="Введите код"
                    className="input-text"/>
                </div>
              </div>
            </div>

            <div className="payment-fields-row-single">
              <div className="payment-input-group payment-input-group-owner">
                <div className="input-label-wrapper">
                  <label htmlFor="name_card" className="input-label">Имя владельца карта</label>
                </div>
                <div className="input-field">
                  <input
                    id="name_card"
                    name="name_card"
                    type="month"
                    placeholder="Введите имя владельца"
                    className="input-text"/>
                </div>
              </div>
            </div>
          </div>

          <div className="subscription-buttons">
            <button type="reset" name="button" className="subscription-button subscription-button-cancel">
              Отменить изменение подписки
            </button>
            <button type="button" name="button" id="subscription-button" className="subscription-button subscription-button-unsubscribe" onClick={() => setIsPopupOpen(true)}>
              Отказаться от подписки
            </button>
            <button type="submit" className="subscription-button subscription-button-submit">
              Оформить
            </button>
          </div>
        </>
      )}

      <Popup isOpen={ isPopupOpen} onClose={() => setIsPopupOpen(false) } />

    </div>
  );
}

export default Form;
