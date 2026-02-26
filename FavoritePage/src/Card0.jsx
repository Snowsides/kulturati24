import * as React from "react";
import Hint from "./Hint";
import Modal from "./Modal";
import "./Card.css";

function Card() {
  const [showHint, setShowHint] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleBandClick = () => {
    setShowHint(!showHint);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card card-container">

      <div className="image-column">
        {/* <div className="checkbox-wrapper">
          <div className="checkbox"></div>
        </div> */}
        <div className="image-wrapper">
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

          <div className="schedule">
            <div className="schedule-title schedule-title_votes">
              Голосов за событие: <span className="schedule-votes">0</span>
            </div>
          </div>

          <div className="schedule">
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

        <button id="button-add-date" className="button-add-date" onClick={handleOpenModal}>
          <span className="button-add-date-text">Добавить дату и другие сведения</span>
        </button>

        {/* <div className="event-description">
          Герой Георгия Штиля — одинокий эмигрант Янкелевич, после отъезда
          из СССР живущий в Париже, — неожиданно попадает в почти
          детективную историю. Его кредо: «Пока возможно — живите весело».
          Партнерами Георгия Штиля на сцене выступают молодые артисты БДТ.
        </div> */}

      </div>

      <div className="action-buttons">
        <div className="button-primary">
          <div className="button-primary-text">
            <a href="#">Сайт события и билеты</a>
          </div>
        </div>
        <div className="button-secondary button-secondary_red">
          <div className="button-secondary-text">
            <a href="#">Удалить из избранного</a>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}

export default Card;
