import Card from './Card';
import Card1 from './Card1';
import Filters from './Filters';
import Form from './Form';
import Header from './Header';

import './App.css';

function App() {
  return (
    <>
      <div id="menu-bar" className="menu-bar">
        <Header />
      </div>

      <div className="result-wrapper">

        <div id="form-search" className="form-search">
          <Form />
        </div>

        <div className="result-content">

          <div className="filter-content-hide"></div>

          <div className="filter-content">
            <Filters />
          </div>
          <div className="result-cards-content">
            <div className="results-content-text">
              <h1 className="results-title">Результаты поиска</h1>
              <p className="results-count">Найдено 158 событий</p>
              <p  className="results-description">Наверх выводятся события, наиболее соответсвующие вашему культульному профилю по оценке алгоритмов сервиса. Выбирайте события, ставьте отметку (Понравилось/Не понравилось), таким образом сервис сможет узнать вас лучше и в дальнейшем предлагать еще более инересные события.</p>
              <div className="results-input-wrapper">
                <input
                  type="text"
                  placeholder="Поиск по текущей подборке..."
                  value=""
                  onChange=""
                  className="result-input"
                />
                <span class="results-icon-reset"></span>
                <span class="results-icon-search"></span>
              </div>
              <div className="result-buttons-wrapper">
                <div className="result-button">
                  <a className="result-button-submit" href="#">Искать в КУЛЬТУРАТЫ</a>
                </div>
                <div className="result-button result-button_reset">
                  <a className="result-button-submit result-button-submit_reset" href="#">Сбросить фильтры</a>
                </div>
              </div>
            </div>
            <Card />
            <p></p>
            <Card1 />
            <p className="results-more">
              <a className="link" href="#">Показать еще 10...</a>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
