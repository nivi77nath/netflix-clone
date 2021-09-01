import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    </div>  
  );
}

export default App;
