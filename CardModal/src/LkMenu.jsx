import { useState } from 'react';
import './LkMenu.css';

function LkMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lk-menu">
      <div className="lk-mode-label">Режим:</div>
      <div className="lk-tabs" role="tablist" aria-label="Режим">
        <div
          className={"lk-tab" + (activeTab === 0 ? " lk-tab-active" : "")}
          role="tab"
          tabIndex={0}
          onClick={() => setActiveTab(0)}
          onKeyDown={(e) => { e.preventDefault(); setActiveTab(0); } }
        >
          <div className="lk-tab-content">
            <div className="lk-tab-icon icon_personal"></div>
            <div className="lk-tab-text">Индивидуальный</div>
          </div>
        </div>

        <div
          className={"lk-tab" + (activeTab === 1 ? " lk-tab-active" : "")}
          role="tab"
          tabIndex={0}
          onClick={() => setActiveTab(1)}
          onKeyDown={(e) => { e.preventDefault(); setActiveTab(1); } }
        >
          <div className="lk-tab-content">
            <div className="lk-tab-icon icon_group"></div>
            <div className="lk-tab-text">Школьные группы</div>
          </div>
        </div>
      </div>

      <div className="lk-menu-item">
        <a href="#" className="link-item">Редактировать профиль</a>
      </div>
      <div className="lk-menu-item">
        <a href="#" className="link-item">Выйти</a>
      </div>
    </div>
  );
}

export default LkMenu;
