import LkMenu from './LkMenu';
import SideMenu from './SideMenu';
import './Header.css';

function Header() {
  return (

    <div className="header-container">

      <div className="user-profile">
        <div className="profile-icon-wrapper">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8664 25.2224C9.74421 26.486 4.18005 29.0662 7.56899 32.2948C9.22446 33.872 11.0682 35 13.3863 35H26.6137C28.9318 35 30.7755 33.872 32.431 32.2948C35.82 29.0662 30.2558 26.486 28.1336 25.2224C23.1572 22.2592 16.8428 22.2592 11.8664 25.2224Z" stroke="#A89A7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26.75 11.75C26.75 15.4779 23.7279 18.5 20 18.5C16.2721 18.5 13.25 15.4779 13.25 11.75C13.25 8.02208 16.2721 5 20 5C23.7279 5 26.75 8.02208 26.75 11.75Z" stroke="#A89A7F" stroke-width="1.5"/>
          </svg>
        </div>
        <div className="user-info">
          <div className="user-name">Ксения</div>
          <div className="user-type">Индивидуальный</div>
        </div>
      </div>

      <div className="user-profile">
        <div className="profile-icon-wrapper">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3576 29.8182C35.5837 29.8182 36.559 29.0466 37.4346 27.9677C39.2272 25.7591 36.284 23.9941 35.1615 23.1297C34.0205 22.251 32.7464 21.7532 31.4546 21.6364M29.8182 18.3636C32.0776 18.3636 33.9091 16.5321 33.9091 14.2727C33.9091 12.0134 32.0776 10.1818 29.8182 10.1818" stroke="#A89A7F" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M5.64254 29.8182C4.41641 29.8182 3.44115 29.0466 2.5655 27.9677C0.772933 25.7591 3.71607 23.9941 4.83857 23.1297C5.97966 22.251 7.25374 21.7532 8.54552 21.6364M9.3637 18.3636C7.10435 18.3636 5.27279 16.5321 5.27279 14.2727C5.27279 12.0134 7.10435 10.1818 9.3637 10.1818" stroke="#A89A7F" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13.5917 25.091C11.9197 26.1249 7.53581 28.2359 10.2059 30.8776C11.5102 32.168 12.9629 33.0909 14.7892 33.0909H25.2108C27.0372 33.0909 28.4898 32.168 29.7941 30.8776C32.4642 28.2359 28.0803 26.1249 26.4083 25.091C22.4875 22.6666 17.5125 22.6666 13.5917 25.091Z" stroke="#A89A7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.7273 12.6363C25.7273 15.7994 23.1631 18.3636 20 18.3636C16.8369 18.3636 14.2727 15.7994 14.2727 12.6363C14.2727 9.47324 16.8369 6.90906 20 6.90906C23.1631 6.90906 25.7273 9.47324 25.7273 12.6363Z" stroke="#A89A7F" stroke-width="1.5"/>
          </svg>
        </div>
        <div className="user-info">
          <div className="user-name">Ксения</div>
          <div className="user-type">Школьные группы</div>
        </div>
      </div>

      <div className="home-button-wrapper">
        <button className="home-button">
          <svg className="home-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.75H10.0067" stroke="#2A2930" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 7.375V11.125C16 13.9534 16 15.3676 15.1213 16.2463C14.2426 17.125 12.8284 17.125 10 17.125C7.17157 17.125 5.75736 17.125 4.87868 16.2463C4 15.3676 4 13.9534 4 11.125V7.375" stroke="#2A2930" strokeWidth="1.5"/>
            <path d="M17.5 8.875L14.2426 5.75161C12.2426 3.83387 11.2426 2.875 10 2.875C8.75736 2.875 7.75736 3.83387 5.75736 5.75161L2.5 8.875" stroke="#2A2930" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="home-button-text">На главную</span>
        </button>
      </div>

      <div id="lk" className="lk">
        <LkMenu />
      </div>

      <div id="side-menu" className="side-menu">
        <SideMenu />
      </div>

    </div>
  );
}

export default Header;
