import * as React from "react";
import Hint from "./Hint";
import "./Card.css";

function Card() {
  const [showHint, setShowHint] = React.useState(false);

  const handleBandClick = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="card-container">

      <div className="image-column">
        <img
          src="./img/image34.jpg"
          className="main-image"
          alt="Люксембургский сад"
        />
        <div className="thumbnail-container">
          {showHint && <Hint />}
          <span className="thumbnail-icon-face" />
          <span className="thumbnail-icon-band" onClick={handleBandClick} />
        </div>
        <div className="grade-container">
          <span className="grade-text">Соответствие: <strong>8.79</strong></span>
        </div>
      </div>

      <div className="title-column">
        <div className="event-title">
          ЛЮКСЕМБУРГСКИЙ САД
        </div>
        <div className="venue-info">
          <div className="venue-name">
            Большой драматический театр имени Г.А.Товстоногова
          </div>
          <div className="venue-address">
            Санкт-Петербург, наб. Реки Фонтанки, д. 65
          </div>
        </div>
      </div>

      <div className="aside-section">
        <div className="schedule-container">
          <div className="schedule-title">
            Сейчас в афише
          </div>

          <div className="schedule-date">
            Ср. 29.10.2025
          </div>
          <div className="schedule-date">
            Вт. 06.11.2025
          </div>

          <div className="more-dates-button">
            <div className="more-dates-text">
              Другие даты
            </div>
            <span className="arrow-icon" alt="" />
          </div>

          <div className="schedule-date">
            Ср. 10.11.2025
          </div>
          <div className="schedule-date">
            Вт. 16.11.2025
          </div>

        </div>
      </div>

      <div className="text-column">
        <div className="event-details">
          <div className="detail-row">
            <div className="detail-label">
              Школьная программа:
            </div>
            <div className="detail-value detail-value-bold">
              Литература, 11 класс, "Мастер и Маргарита"
            </div>
          </div>
          <div className="detail-row detail-row-compact">
            <div className="detail-label">
              Композитор:
            </div>
            <div className="detail-value">
              <p className="detail-name">Розанов Владимир</p>
            </div>
          </div>
          <div className="detail-row detail-row-compact">
            <div className="detail-label">
              Тип события:
            </div>
            <div className="detail-value">
              Спектакль
            </div>
          </div>
          <div className="detail-row detail-row-compact">
            <div className="detail-label">
              Жанр:
            </div>
            <div className="detail-value">
              Лирическая комедия
            </div>
          </div>
          <div className="detail-row detail-row-multiline">
            <div className="detail-label">
              Авторы:
            </div>
            <div className="detail-value detail-value-multiline">
              Шаргородский Александр, Шаргородский Лев
            </div>
          </div>
          <div className="detail-row detail-row-compact detail-row-nowrap">
            <div className="detail-label">
              Возраст:
            </div>
            <div className="detail-value">
              14+
            </div>
          </div>
          <div className="pushkin-card-row">
            <div className="pushkin-card-text">
              Пушкинская карта
            </div>
          </div>
        </div>

        <div className="collapse-button">
          <a className="collapse-text">
            Подробнее о событии...
          </a>
        </div>

        <div className="event-description">
          Герой Георгия Штиля — одинокий эмигрант Янкелевич, после отъезда
          из СССР живущий в Париже, — неожиданно попадает в почти
          детективную историю. Его кредо: «Пока возможно — живите весело».
          Партнерами Георгия Штиля на сцене выступают молодые артисты БДТ.
        </div>

      </div>
      <div className="rating">
        <div className="rating-section">
          <div className="rating-text">
            Уже были? Оцените событие:
          </div>
          <div className="like-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.40002 12.48C2.40002 11.4196 3.25964 10.56 4.32002 10.56C5.9106 10.56 7.20002 11.8494 7.20002 13.44V17.28C7.20002 18.8706 5.9106 20.16 4.32002 20.16C3.25964 20.16 2.40002 19.3004 2.40002 18.24V12.48Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.3395 7.97404L15.0839 8.79972C14.8744 9.47629 14.7697 9.81458 14.8502 10.0818C14.9154 10.2979 15.0584 10.4842 15.2534 10.6068C15.4944 10.7583 15.8589 10.7583 16.5879 10.7583H16.9757C19.443 10.7583 20.6766 10.7583 21.2593 11.4886C21.3259 11.5721 21.3851 11.6609 21.4364 11.7539C21.8846 12.5685 21.375 13.6658 20.3558 15.8603C19.4205 17.8742 18.9528 18.8811 18.0845 19.4738C18.0004 19.5312 17.914 19.5853 17.8255 19.636C16.9114 20.16 15.7787 20.16 13.5133 20.16H13.022C10.2774 20.16 8.90518 20.16 8.05257 19.3339C7.19995 18.5078 7.19995 17.1782 7.19995 14.519V13.5844C7.19995 12.1869 7.19995 11.4881 7.44796 10.8486C7.69597 10.2091 8.17085 9.6832 9.12062 8.6315L13.0484 4.28216C13.1469 4.17309 13.1961 4.11854 13.2396 4.08075C13.645 3.72798 14.2706 3.76768 14.625 4.16868C14.6629 4.21164 14.7044 4.27194 14.7874 4.39254C14.9172 4.58119 14.9821 4.67552 15.0387 4.76898C15.5451 5.60559 15.6983 6.59942 15.4663 7.54289C15.4404 7.64827 15.4068 7.75692 15.3395 7.97404Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="dislike-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.40002 11.52C2.40002 12.5804 3.25964 13.44 4.32002 13.44C5.9106 13.44 7.20002 12.1506 7.20002 10.56V6.72C7.20002 5.12942 5.9106 3.84 4.32002 3.84C3.25964 3.84 2.40002 4.69962 2.40002 5.76V11.52Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.3395 16.026L15.0839 15.2003C14.8744 14.5237 14.7697 14.1855 14.8502 13.9183C14.9154 13.7021 15.0584 13.5158 15.2534 13.3932C15.4944 13.2417 15.8589 13.2417 16.5879 13.2417H16.9757C19.443 13.2417 20.6766 13.2417 21.2593 12.5114C21.3259 12.4279 21.3851 12.3392 21.4364 12.2461C21.8846 11.4315 21.375 10.3343 20.3558 8.13974C19.4205 6.12587 18.9528 5.11894 18.0845 4.52626C18.0004 4.46888 17.914 4.41476 17.8255 4.36403C16.9114 3.84 15.7787 3.84 13.5133 3.84H13.022C10.2774 3.84 8.90518 3.84 8.05257 4.66611C7.19995 5.49222 7.19995 6.82183 7.19995 9.48103V10.4157C7.19995 11.8132 7.19995 12.5119 7.44796 13.1514C7.69597 13.791 8.17085 14.3168 9.12062 15.3685L13.0484 19.7179C13.1469 19.8269 13.1961 19.8815 13.2396 19.9193C13.645 20.2721 14.2706 20.2323 14.625 19.8314C14.6629 19.7884 14.7044 19.7281 14.7874 19.6075C14.9172 19.4188 14.9821 19.3245 15.0387 19.2311C15.5451 18.3944 15.6983 17.4006 15.4663 16.4571C15.4404 16.3518 15.4068 16.2431 15.3395 16.026Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <div className="button-primary">
          <div className="button-primary-text">
            <a href="#">Сайт события и билеты</a>
          </div>
        </div>
        <div className="button-secondary">
          <div className="button-secondary-text">
            <a href="#">Добавить в избранное</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card;
