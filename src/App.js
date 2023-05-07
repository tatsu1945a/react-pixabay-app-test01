import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //API URL
    const endPointURL =
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${ref.current.value}&image_type=photo`
    
    //console.log(process.env.REACT_APP_PIXABAY_API_KEY)
    
    //APIへアクセス（データフェッチング）
    fetch(endPointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        console.log(endPointURL);
        console.log(data.hits);
        setFetchData(data.hits);
      });
  }

  return (
    <div className="container">
      <h2>My Pixabayテスト</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像検索" ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
