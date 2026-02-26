import './App.css';
import Welcome from './Welcome';
import Vote from './Vote';
import Search from './Search';
import Card from './Card';
import Card0 from './Card0';
import Card1 from './Card1';
import Card2 from './Card2';
import CollectionDetails from './CollectionDetails';

function App() {
  return (
    <div className="favorite-container">

      <div className="welcome-content">
        <Welcome />
      </div>

      <div className="vote-content">
        <Vote />
      </div>
      <div className="search-content">

        <div className="favorite-content">
          <div className="filter-content">
            <div className="filter-content-hide"></div>
          </div>
          <div className="result-content">
            <Search />
            <Card />
          </div>
        </div>
        
        <div>
          <CollectionDetails />
          <Card0 />
          <Card1 />
          <Card2 />
        </div>

      </div>
    </div>
  )
}

export default App;
