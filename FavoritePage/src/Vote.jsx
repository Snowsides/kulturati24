import './vote.css';
import CreateVoteModal from './CreateVoteModal';
import { useState } from 'react';

function Vote() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCollection = (collectionName) => {
    console.log('New collection created:', collectionName);
    // Add your logic here to save the collection
  };

  return (
    <div className="vote vote-container">
      <div className="vote-content">
        <div className="vote-inner">
          <div className="header-section">
            <div className="header-text">
              <div className="header-title">
                Как создать новое голосование для класса?
              </div>
              <div className="header-subtitle header-subtitle-show">
                Чтобы скрыть подсказку, нажмите на кнопку "Свернуть подсказку"
              </div>
              <div className="header-subtitle header-subtitle-hide">
                Узнайте, как работает голосование для класса нажав на кнопку “Развернуть подсказку”
              </div>
              
            </div>
            <div className="collapse-button">
              <div className="collapse-text collapse-text-hide">
                Свернуть подсказку...
              </div>
              <div className="collapse-text collapse-text-show">
                Развернуть подсказку...
              </div>
            </div>
          </div>
          <div id="steps-grid" className="steps-grid">
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  1
                </div>
                <div className="step-title">
                  Изучите подборку
                </div>
                <div className="step-description">
                  Изучите предложенные события, обращая внимание на <strong>дату, время и комментарий организатора</strong>. <br/>Также учтите дату окончания голосования, после которой оно станет недоступным.
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  2
                </div>
                <div className="step-title">
                  Проголосуйте
                </div>
                <div className="step-description">
                  Выберите один или несколько вариантов, проставив галочки в интересующих вас событиях и нажмите на кнопку “Проголосовать”
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  3
                </div>
                <div className="step-title">
                  Узнайте результаты голосования у организатора
                </div>
                <div className="step-description">
                  По окончании голосования Вы можете узнать его результаты у организатора.
                </div>
              </div>
            </div>
          </div>

          <div id="steps-grid" className="steps-grid">
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  1
                </div>
                <div className="step-title">
                  Создайте подборку для голосования и добавьте в нее события
                </div>
                <div className="step-description">
                  Создайте новую подборку, нажав на кнопку "
                  <span className="accent-text">
                    Создать подборку
                  </span>
                  ". Выберите одно или несколько событий, которые вас
                  интересуют, и добавьте их в эту подборку.
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  2
                </div>
                <div className="step-title">
                  Перейдите в сформированную подборку
                </div>
                <div className="step-description">
                  Выберите нужную подборку из списка и перейдите в нее
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  3
                </div>
                <div className="step-title">
                  Укажите необходимую информацию о событиях
                </div>
                <div className="step-description">
                  Укажите дату, время и другую необходимую информацию для
                  выбранных событий
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  4
                </div>
                <div className="step-title">
                  Укажите дату окончания голосования и отправьте ссылку
                </div>
                <div className="step-description">
                  Укажите дату, до которой будет открыто голосование и отправьте
                  сформированную ссылку родителям класса
                </div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-content">
                <div className="step-number">
                  5
                </div>
                <div className="step-title">
                  Следите за ходом голосования
                </div>
                <div className="step-description">
                  Вы увидите результаты голосования на странице подборки
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="collections-section">
          <div className="section-header">
            <div className="section-title">
              Подборки для голосований
            </div>
          </div>
          <div className="collections-grid">
            <div className="collection-card-create" onClick={() => setIsModalOpen(true)} style={{cursor: 'pointer'}}>
              <div className="collection-create-content">
                <div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="collection-create-text">
                  Создать новое голосование
                </div>
              </div>
            </div>
            <div className="collection-card">
              <div className="collection-header">
                <div className="collection-name">
                  Поход в театр декабрь 2025
                </div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.11529 3.30602C7.06552 1.60201 7.54025 0.75 8.25049 0.75C8.96072 0.75 9.43546 1.60201 10.3857 3.30602L10.6317 3.74702C10.9017 4.23152 11.0367 4.47377 11.2467 4.63352C11.4567 4.79328 11.7192 4.85253 12.2441 4.97103L12.7211 5.07903C14.5661 5.49678 15.4878 5.70528 15.7076 6.41104C15.9266 7.11604 15.2981 7.8518 14.0404 9.32255L13.7149 9.70281C13.3579 10.1206 13.1786 10.3298 13.0984 10.5878C13.0181 10.8466 13.0451 11.1256 13.0991 11.6828L13.1486 12.1906C13.3384 14.1533 13.4336 15.1343 12.8591 15.5701C12.2846 16.0058 11.4207 15.6083 9.6942 14.8133L9.24646 14.6078C8.75598 14.3813 8.51073 14.2688 8.25049 14.2688C7.99024 14.2688 7.745 14.3813 7.25451 14.6078L6.80752 14.8133C5.08031 15.6083 4.21633 16.0058 3.6426 15.5708C3.06736 15.1343 3.16261 14.1533 3.35235 12.1906L3.40185 11.6836C3.45585 11.1256 3.48285 10.8466 3.40185 10.5886C3.32235 10.3298 3.14311 10.1206 2.78612 9.70356L2.46062 9.32255C1.2029 7.85255 0.574419 7.11679 0.793414 6.41104C1.01241 5.70528 1.93564 5.49603 3.78059 5.07903L4.25758 4.97103C4.78182 4.85253 5.04356 4.79328 5.25431 4.63352C5.46505 4.47377 5.5993 4.23152 5.86929 3.74702L6.11529 3.30602Z" fill="#A89A7F" stroke="#A89A7F" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="collection-footer">
                <div className="collection-count">
                  3 события в подборке
                </div>
                <div className="collection-date">
                  10.12.25
                </div>
              </div>
            </div>
            <div className="collection-card">
              <div className="collection-header">
                <div className="collection-name">
                  Поход в музей, январь 2026
                </div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.11529 3.30602C7.06552 1.60201 7.54025 0.75 8.25049 0.75C8.96072 0.75 9.43546 1.60201 10.3857 3.30602L10.6317 3.74702C10.9017 4.23152 11.0367 4.47377 11.2467 4.63352C11.4567 4.79328 11.7192 4.85253 12.2441 4.97103L12.7211 5.07903C14.5661 5.49678 15.4878 5.70528 15.7076 6.41104C15.9266 7.11604 15.2981 7.8518 14.0404 9.32255L13.7149 9.70281C13.3579 10.1206 13.1786 10.3298 13.0984 10.5878C13.0181 10.8466 13.0451 11.1256 13.0991 11.6828L13.1486 12.1906C13.3384 14.1533 13.4336 15.1343 12.8591 15.5701C12.2846 16.0058 11.4207 15.6083 9.6942 14.8133L9.24646 14.6078C8.75598 14.3813 8.51073 14.2688 8.25049 14.2688C7.99024 14.2688 7.745 14.3813 7.25451 14.6078L6.80752 14.8133C5.08031 15.6083 4.21633 16.0058 3.6426 15.5708C3.06736 15.1343 3.16261 14.1533 3.35235 12.1906L3.40185 11.6836C3.45585 11.1256 3.48285 10.8466 3.40185 10.5886C3.32235 10.3298 3.14311 10.1206 2.78612 9.70356L2.46062 9.32255C1.2029 7.85255 0.574419 7.11679 0.793414 6.41104C1.01241 5.70528 1.93564 5.49603 3.78059 5.07903L4.25758 4.97103C4.78182 4.85253 5.04356 4.79328 5.25431 4.63352C5.46505 4.47377 5.5993 4.23152 5.86929 3.74702L6.11529 3.30602Z" fill="#A89A7F" stroke="#A89A7F" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="collection-footer">
                <div className="collection-count">
                  5 событий в подборке
                </div>
                <div className="collection-date">
                  08.12.25
                </div>
              </div>
            </div>
            <div className="collection-card">
              <div className="collection-header">
                <div className="collection-name">
                  Варианты активностей на весенние каникулы 2026
                </div>
              </div>
              <div className="collection-footer">
                <div className="collection-count">
                  0 событий в подборке
                </div>
                <div className="collection-date">
                  13.12.25
                </div>
              </div>
            </div>
            <div className="view-all-button">
              <a href="#" className="view-all-text">
                Все подборки
              </a>
              <a href="#" className="view-all-text">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 6.75L12.75 6.75M12.75 6.75L6.75 0.75M12.75 6.75L6.75 12.75" stroke="#A89A7F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Индивидуальный пользователь */}
        <div className="favorites-section">
          <div className="favorites-header">
            <div className="favorites-title">
              Мои избранные события
            </div>
            <div className="favorites-count">
              Добавлено 10 событий
            </div>
          </div>

          <div className="favorites-actions">
            <div className="button-secondary">
              <div className="button-text">
                Очистить избранное
              </div>
            </div>
            {/* <div className="button-secondary">
              <div className="button-text">
                Отменить добавление в подборку
              </div>
            </div>
            <div className="button-primary">
              <div className="button-text">
                Начать выбор событий
              </div>
            </div> */}
          </div>
        </div>

        {/* Профиль класса */}
        <div className="favorites-section">
          <div className="favorites-header">
            <div className="favorites-title">
              Избранные события класса
            </div>
            <div className="favorites-count">
              Добавлено 12 событий
            </div>
          </div>

          <div className="favorites-actions">
            <div className="button-secondary">
              <div className="button-text">
                Очистить избранное
              </div>
            </div>
            <div className="button-secondary">
              <div className="button-text">
                Отменить добавление в подборку
              </div>
            </div>
            <div className="button-primary">
              <div className="button-text">
                Начать выбор событий
              </div>
            </div>
          </div>
        </div>

      </div>

      <CreateVoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCollection}
      />
    </div>
  );
}

export default Vote;
