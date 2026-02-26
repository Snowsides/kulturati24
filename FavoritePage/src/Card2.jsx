import * as React from "react";
import "./Card.css";

function Card1() {
  return (
    <div className="card card-container">

      <div className="image-column">
        <div className="image-wrapper">
          <img
            src="./img/image39.png"
            className="main-image"
            alt="Люксембургский сад"
          />
          <div className="thumbnail-container">
            <span className="thumbnail-icon-museum" />
          </div>
          <div className="grade-container">
            <span className="grade-text">Соответствие: <strong>9</strong></span>
          </div>
        </div>
      </div>

      <div className="title-column">
        <div className="event-title">
           ЖИЗНЬ ЗАМЕЧАТЕЛЬНЫХ СОБАК
        </div>
        <div className="venue-info">
          <div className="venue-name">
            Мраморный дворец
          </div>
          <div className="venue-address">
            Санкт-Петербург, Миллионная ул., 5/1
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
              Постоянная экспозиция
            </div>
            <div className="schedule-date">
              с 17.05.2025 по 10.11.2025
            </div>
            <div className="schedule-date">
              Выходные: Вт, Пн
            </div>
          </div>

          <div className="schedule">
            <div className="schedule-title">
              Выбранная дата и время
            </div>
            <div className="schedule-finish">
              13.12.2025 в 19.00
            </div>
          </div>

        </div>
      </div>

      <div className="text-column">
        <div className="event-details">
            <div className="detail-row detail-row-compact">
            <div className="detail-label museum-label">
                Художники:
            </div>
            <div className="detail-value">
                <p className="detail-name">Боровиковский Владимир</p>
                <p className="detail-name">Угаров Борис</p>
                <p className="detail-name">Сверчков Николай</p>
                <p className="detail-name">Френц Рудольф</p>
                <p className="detail-name">Орловский Александр</p>
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
            Свернуть...
          </a>
        </div>

        <div className="event-description">
          ГВ некоторых современных заведениях – магазинах, кафе и даже в
              культурных пространствах – можно увидеть вывеску «Dog friendly»,
              означающую, что к собакам дружелюбны – заходите вместе с ними. В
              России эта традиция, видимо, появилась благодаря Екатерине
              Великой. На картине Михаила Щеточникова «Парадная лестница в
              Академии художеств» в огромном прекрасном пространстве появляется
              маленькая левретка – в екатерининские времена сама Академия
              художеств была dog friendly.
        </div>

        <div className="comment-section">
          <div className="comment-title">
            Комментарии от организатора:
          </div>
          <div className="comment-content">
            Какой-то текст комментария от организатора голосования. Какой-то текст комментария от организатора голосования.Какой-то текст комментария от организатора голосования
          </div>
        </div>

        <button className="button-edit">
          <span className="button-edit-text">Изменить комментарии от организатора</span>
        </button>

      </div>
      

      <div className="action-buttons">
        <div className="button-primary">
          <div className="button-primary-text">
            <a href="#">Сайт события</a>
          </div>
        </div>
        <div className="button-secondary button-secondary_red">
          <div className="button-secondary-text">
            <a href="#">Удалить из избранного</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Card1;
