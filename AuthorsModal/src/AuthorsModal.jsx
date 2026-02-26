import { useState } from 'react';
import './AuthorsModal.css';
import AddAuthorForm from './AddAuthorForm';

function AuthorsModal() {
  const [isAddAuthorOpen, setIsAddAuthorOpen] = useState(false);

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            Укажите любимых авторов
          </div>
          <div className="close-icon"></div>
        </div>
        <div className="modal-description">
          <div className="description-text">
            Выберите трех или более интересных вам авторов в&nbsp;любой из&nbsp;категорий. <br />Если вы&nbsp;не&nbsp;нашли любимого автора в&nbsp;нашей подборке, добавьте его, нажав на&nbsp;кнопку &ldquo;<span className="accent-text">Добавить автора</span>&rdquo; внизу списка. <br />Изменить и&nbsp;дополнить подборку любимых авторов можно в&nbsp;любое время.
          </div>
        </div>
        <button className="expand-instruction-button">Развернуть инструкцию...</button>
        <div className="tab-group">
          <div className="tabs-container">
            <div className="tab tab-active">
              <div className="tab-label">
                Писатели
              </div>
            </div>
            <div className="tab">
              <div className="tab-label">
                Композиторы
              </div>
            </div>
            <div className="tab">
              <div className="tab-label">
                Художники
              </div>
            </div>
          </div>
          <button className="tab-scroll-button" aria-label="Прокрутить вправо"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 16L13 10L7 4" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
        </div>
        <div className="categories-row">
          <div className="category-column">
            <div className="category-title">
              Писатели
            </div>
            <div className="author-cards">
              <div className="author-card">
                <img
                  src="./img/author1.jpg"
                  alt="Анна Ахматова"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Анна Ахматова
                  </div>
                  <div className="author-works">
                    Поэма без героя, Реквием
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author1.jpg"
                  alt="Анна Ахматова"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Оноре де Бальзак
                  </div>
                  <div className="author-works author-works-multiline">
                    Человеческая комедия, Блеск и нищета куртизанок
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author1.jpg"
                  alt="Анна Ахматова"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Михаил Булгаков
                  </div>
                  <div className="author-works author-works-multiline">
                    Мастер и Маргарита, Собачье сердце, Белая гвардия
                  </div>
                </div>
              </div>
            </div>
            <div className="button-add-author" onClick={ () => setIsAddAuthorOpen(true) }>
              <div className="button-text">
                Добавить своего автора
              </div>
            </div>
          </div>
          <div className="category-column">
            <div className="category-title">
              Композиторы
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
              <img
                  src="./img/author2.jpg"
                  alt="Анна Ахматова"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Иоганн Себастьян Бах
                  </div>
                  <div className="author-works author-works-ellipsis">
                    Бранденбургские концерты, Токката и фуга ре минор
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author2.jpg"
                  alt="Людвиг ван Бетховен"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Людвиг ван Бетховен
                  </div>
                  <div className="author-works author-works-multiline">
                    Лунная соната, К Элизе, Симфония №5
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author2.jpg"
                  alt="Жорж Бизе"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Жорж Бизе
                  </div>
                  <div className="author-works">
                    Кармен, Искатели жемчуга
                  </div>
                </div>
              </div>
            </div>
            <div className="button-add-author" onClick={ () => setIsAddAuthorOpen(true) }>
              <div className="button-text">
                Добавить своего автора
              </div>
            </div>
          </div>
          <div className="category-column">
            <div className="category-title">
              Художники
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
                <img
                  src="./img/author3.jpg"
                  alt="Иван Айвазовский"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Иван Айвазовский
                  </div>
                  <div className="author-works author-works-multiline">
                    Хаос, Сотворение мира, Девятый вал, Неаполитанский залив
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author3.jpg"
                  alt="Жан-Мишель Баския"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Жан-Мишель Баския
                  </div>
                  <div className="author-works author-works-multiline">
                    Без названия (Череп), Дос Кабезас, Кадиллак Мун
                  </div>
                </div>
              </div>
              <div className="author-card">
                <img
                  src="./img/author3.jpg"
                  alt="Иероним Босх"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Иероним Босх
                  </div>
                  <div className="author-works author-works-multiline">
                    Сад земных наслаждений, Извлечение камня глупости, Корабль дураков
                  </div>
                </div>
              </div>
            </div>
            <div className="button-add-author" onClick={ () => setIsAddAuthorOpen(true) }>
              <div className="button-text">
                Добавить своего автора
              </div>
            </div>
          </div>
        </div>
        <div className="categories-row categories-row_myauthors">
          <div className="category-column">
            <div className="category-title category-title_myauthors">
              Мои авторы
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
              <img
                  src="./img/book.png"
                  alt="Литературный автор"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Джоан Роулинг
                  </div>
                  <div className="author-works author-works-ellipsis">
                    Гарри Поттер
                  </div>
                </div>
              </div>
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
              <img
                  src="./img/book.png"
                  alt="Литературный автор"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Джоан Роулинг
                  </div>
                  <div className="author-works author-works-ellipsis">
                    Гарри Поттер
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-column">
            <div className="category-title  category-title_myauthors">
              Мои авторы
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
              <img
                  src="./img/music.png"
                  alt="Музыкальный автор"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Клод Дебюсси
                  </div>
                  <div className="author-works author-works-ellipsis">
                    Лунный свет, Прелюдия к послеполудню фавна
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="category-column">
            <div className="category-title category-title_myauthors">
              Мои авторы
            </div>
            <div className="author-cards author-cards-limited">
              <div className="author-card">
              <img
                  src="./img/paint.png"
                  alt="Художественный автор"
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">
                    Фрида Кало
                  </div>
                  <div className="author-works author-works-ellipsis">
                    Две Фриды, Автопортрет с ожерельем из шипов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-buttons">
          <div className="buttons-wrapper">
            <div className="button-save">
              <div className="button-text">
                Сохранить
              </div>
            </div>
            <div className="button-close">
              <div className="button-text">
                Закрыть
              </div>
            </div>
            
          </div>
          <div className="counter-authors">Вы выбрали: 5 + 1</div>
        </div>
    </div>

    { isAddAuthorOpen && (
      <AddAuthorForm onClose={ () => setIsAddAuthorOpen(false) } />
    ) }

    <div className="modal-overlay"></div>
    </>
  )
}

export default AuthorsModal;
