import { useState } from 'react';
import './SideMenu.css';

function SideMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
      <div className="side-menu-main">
        <div className="side-menu-container">

          <div className="header_main_logo">
            {/* лого из главного хедера */}
          </div>

          <div className="tab-group" role="tablist" aria-label="Сайдменю">

            <div
              className={"tab" + (activeTab === 0 ? " tab-active" : "")}
              role="tab"
              tabIndex={0}
              onClick={() => setActiveTab(0)}
              onKeyDown={(e) => { e.preventDefault(); setActiveTab(0); } }
            >
              <div className="tab-content">
                  <div className="tab-icon icon_personal"></div>
                  <div className="tab-label">
                    Личный профиль
                  </div>
              </div>
            </div>

            <div
              className={"tab" + (activeTab === 1 ? " tab-active" : "")}
              role="tab"
              tabIndex={0}
              onClick={() => setActiveTab(1)}
              onKeyDown={(e) => { e.preventDefault(); setActiveTab(1); } }
            >
              <div className="tab-content">
                  <div className="tab-icon icon_group"></div>
                  <div className="tab-label">
                    Профиль класса
                  </div>
              </div>
            </div>

          </div>

          <div className="menu-items">
            <div className="menu-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="menu-item-label">
                <a href="#" className="link-item">Поиск событий</a>
              </div>
            </div>
            <div className="menu-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-menu-icon">
                <path d="M5.93318 12.6112C4.8721 13.243 2.09002 14.5331 3.7845 16.1474C4.61223 16.936 5.53412 17.5 6.69315 17.5H13.3068C14.4659 17.5 15.3878 16.936 16.2155 16.1474C17.91 14.5331 15.1279 13.243 14.0668 12.6112C11.5786 11.1296 8.42139 11.1296 5.93318 12.6112Z" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.375 5.875C13.375 7.73896 11.864 9.25 10 9.25C8.13604 9.25 6.625 7.73896 6.625 5.875C6.625 4.01104 8.13604 2.5 10 2.5C11.864 2.5 13.375 4.01104 13.375 5.875Z" stroke="#5A5F67" strokeWidth="1.5"/>
              </svg>
              <div className="menu-item-label">
                <a href="#" className="link-item">Личный кабинет</a>
              </div>
            </div>
            <div className="menu-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-icon">
                <path d="M15.5969 3.99561C13.5857 2.76192 11.8303 3.25909 10.7758 4.05101C10.3434 4.37572 10.1272 4.53807 10 4.53807C9.8728 4.53807 9.65661 4.37572 9.22424 4.05101C8.16971 3.25909 6.41431 2.76192 4.40308 3.99561C1.76355 5.6147 1.16629 10.9561 7.25465 15.4625C8.41429 16.3208 8.99411 16.75 10 16.75C11.0059 16.75 11.5857 16.3208 12.7454 15.4625C18.8337 10.9561 18.2364 5.6147 15.5969 3.99561Z" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="menu-item-label">
                <a href="#" className="link-item">Любимые авторы</a>
              </div>
            </div>
            <div className="menu-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="saved-icon">
                <path d="M10 17.5002C6.81802 17.5002 5.22703 17.5002 4.23851 16.4019C3.25 15.3035 3.25 13.5358 3.25 10.0002C3.25 6.46471 3.25 4.69694 4.23851 3.59859C5.22703 2.50024 6.81802 2.50024 10 2.50024C13.182 2.50024 14.773 2.50024 15.7615 3.59859C16.75 4.69694 16.75 6.46471 16.75 10.0002C16.75 13.5358 16.75 15.3035 15.7615 16.4019C14.773 17.5002 13.182 17.5002 10 17.5002Z" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 2.875V8.36965C7 9.305 7 9.77267 7.28982 9.94008C7.85105 10.2643 8.9038 9.18271 9.40375 8.85706C9.6937 8.6682 9.83868 8.57377 10 8.57377C10.1613 8.57377 10.3063 8.6682 10.5962 8.85706C11.0962 9.18271 12.1489 10.2643 12.7102 9.94008C13 9.77267 13 9.305 13 8.36965V2.875" stroke="#5A5F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="menu-item-label">
                <a href="#" className="link-item">Избранное</a>
              </div>
            </div>
          </div>
        </div>

        <div className="side-menu-container">
          <div className="menu-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7.75C15.4036 4.76091 12.6346 2.5 9.30944 2.5C5.54912 2.5 2.5 5.39141 2.5 8.95753C2.5 10.6709 3.20364 12.2278 4.35141 13.3831C4.60412 13.6375 4.77284 13.985 4.70475 14.3427C4.59237 14.9276 4.33769 15.4731 3.96479 15.9278C4.94592 16.1087 5.9661 15.9458 6.84101 15.4846C7.15029 15.3215 7.30493 15.24 7.41405 15.2235C7.49044 15.2119 7.58994 15.2227 7.75 15.2502" stroke="#5A5F67" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.25 13.1963C9.25 15.3756 11.0971 17.1425 13.375 17.1425C13.6428 17.1429 13.9099 17.1181 14.173 17.0687C14.3624 17.0331 14.4571 17.0154 14.5232 17.0255C14.5893 17.0356 14.683 17.0854 14.8703 17.185C15.4003 17.4669 16.0183 17.5664 16.6127 17.4559C16.3868 17.178 16.2325 16.8446 16.1644 16.4872C16.1232 16.2686 16.2254 16.0562 16.3785 15.9008C17.0738 15.1948 17.5 14.2433 17.5 13.1963C17.5 11.017 15.6529 9.25 13.375 9.25C11.0971 9.25 9.25 11.017 9.25 13.1963Z" stroke="#5A5F67" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              <div className="menu-item-label">
                <a href="#" className="link-item">Поиск событий</a>
              </div>
          </div>
          <div className="buttons-group">
            {/* кнопки Закрыть и Выйти */}
          </div>
        </div>
      </div>
  );
}

export default SideMenu;
