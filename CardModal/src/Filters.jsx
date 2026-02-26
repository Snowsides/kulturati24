import { useState } from "react";
import "./Filters.css";

function Filters() {

  return (
    <div className="filters filters-container">
      <div className="filters-header">
        <div className="filters-title">Фильтры</div>
        <span className="filters-close-icon" />
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Тип события</div>
        <div className="filter-input-field">
          <input
            type="text"
            placeholder="Поиск"
            
            value=""
            onChange=""
            className="filter-search-input"
          />
          <span className="filter-search-icon" />
        </div>

        <div className="filter-checkbox-item-list">
          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Интерактивный спектакль <span className="filter-count">(12)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Театр <span className="filter-count">(403)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Музыкальный спектакль <span className="filter-count">(170)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              НЕ/спектакль <span className="filter-count">(28)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Перформанс <span className="filter-count">(1)</span>
            </div>
          </label>
        </div>

        <button className="filter-show-more-button">Показать еще...</button>
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Жанр события</div>
        <div className="filter-input-field">
          <input
            type="text"
            placeholder="Поиск"
            value=""
            onChange=""
            className="filter-search-input"
          />
          <span className="filter-search-icon" />
        </div>

        <div className="filter-checkbox-item-list">
          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Анимация <span className="filter-count">(3)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Антиутопия <span className="filter-count">(1)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Байопик <span className="filter-count">(2)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Басни <span className="filter-count">(1)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Вербатим <span className="filter-count">(3)</span>
            </div>
          </label>
        </div>

        <button className="filter-show-more-button">Показать еще...</button>
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Соответствие школьной программе класса</div>
        
        <div className="filter-checkbox-item-list">
          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              По школьной программе <span className="filter-count">(30)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Вне школьной программы <span className="filter-count">(1)</span>
            </div>
          </label>
        </div>
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Варианты посещения</div>
        <div className="filter-input-field">
          <input
            type="text"
            placeholder="Поиск"
            value=""
            onChange=""
            className="filter-search-input"
          />
          <span className="filter-search-icon" />
        </div>
        <div className="filter-checkbox-item-list">
          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Индивидуальная экскурсия <span className="filter-count">(116)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Интерактив <span className="filter-count">(36)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Квест <span className="filter-count">(2)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Кураторская/Авторская экскурсия <span className="filter-count">(8)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Музейное занятие <span className="filter-count">(3)</span>
            </div>
          </label>
        </div>
        <button className="filter-show-more-button">Показать еще...</button>
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Школьные предметы</div>
        <div className="filter-checkbox-item-list">
          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Биология <span className="filter-count">(30)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              История <span className="filter-count">(10)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Литература <span className="filter-count">(2)</span>
            </div>
          </label>

          <label className="filter-checkbox-item">
            <input type="checkbox" className="filter-checkbox-input" />
            <div className="filter-checkbox-box" />
            <div className="filter-checkbox-label">
              Окружающий мир <span className="filter-count">(20)</span>
            </div>
          </label>
        </div>
      </div>

      <div className="filters-divider" />

      <div className="filter-section">
        <div className="filter-section-title">Возраст</div>

        <div className="filter-age-slider">
          <input className="filter-age-slider-track" type="range" id="volume" name="volume" min="0" max="18" />
          <label for="volume"></label>
          <div className="filter-age-slider-labels">
            <span className="filter-age-slider-label">0+</span>
            <span className="filter-age-slider-label">6</span>
            <span className="filter-age-slider-label">12</span>
            <span className="filter-age-slider-label">18+</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Filters;
