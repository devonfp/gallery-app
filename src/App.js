import React, { useEffect, useState } from "react";
import { apiKey } from './config';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router} from 'react-router-dom';


// App Components
import SearchForm from "./Components/SearchForm";
import NotFound from "./Components/NotFound";
import PhotoList from "./Components/PhotoList";
/*import Birds from "./Components/Birds";
import Cats from "./Components/Cats";
import Dogs from "./Components/Dogs";*/
import NavigationBar from "./Components/NavigationBar";
/*import Home from "./Components/Home";
*/

function App() {

    //const [photos, setPhotos] = useState([]);
    const [sunsets, setSunsetPhotos] = useState([]);
    const [dogs, setDogPhotos] = useState([]);
    const [birds, setBirdPhotos] = useState([]);
    const [cats, setCatPhotos] = useState([]);
    const [query, setQuery] = useState(['']);
    const [loading, setLoading] = useState(true);

   useEffect(() => { 
    const fetchData = async () => {
      setLoading(true);
      let activeFetch = true;
      try {
        const response = await axios
          .get(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
          );
        // handle success
        if (activeFetch) {
          if (query === 'sunsets') {
            setSunsetPhotos(response.data);
          } else if (query === 'dogs') {
            setDogPhotos(response.data);
          } else if (query === 'birds') {
            setBirdPhotos(response.data);
          } else if (query === 'cats') {
            setCatPhotos(response.data);
          }
          setLoading(false);
        }
        return response.data;
      } catch (error) {
        // handle error
        console.log('Error fetching and parsing data', error);
      }
    };

      fetchData();
    }, [query]);

      // Fetches photos based on the new query. Results are displayed to the user
    const handleQueryChange = searchText => {
      setQuery(searchText);
    };

/*    const handleDogsDataChange = () => {
      fetchData('dogs');
    }

    const handleBirdsDataChange = () => {
      fetchData('birds');
    }

    const handleCatsDataChange = () => {
      fetchData('cats');
    }

    const handleHomeDataChange = () => {
      fetchData('sunsets');
    }*/

    return (
      <>
        <ul className="main-nav">
          <SearchForm changeQuery={handleQueryChange} />
          <NavigationBar />
        </ul>
        <Routes>
          <Route path="/" element={<PhotoList data={sunsets}  />} />
          <Route path="cats" element={<PhotoList data={cats}  />} />
          <Route path="dogs" element={<PhotoList data={dogs} />} />
          <Route path="birds" element={<PhotoList data={birds}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>


           <div className="photo-wrap">
       {(loading)
         ? <p className="load-Design">Loading...</p>
         : <PhotoList data={sunsets} />}
     </div>
      </>
    );
       }


export default App;