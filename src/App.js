import React, { useEffect, useState } from "react";
import { apiKey } from './config';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router} from 'react-router-dom';


// App Components
import SearchForm from "./Components/SearchForm";
import NotFound from "./Components/NotFound";
import PhotoList from "./Components/PhotoList";
import Birds from "./Components/Birds";
import Cats from "./Components/Cats";
import Dogs from "./Components/Dogs";
import NavBar from "./Components/NavBar";
//import Home from "./Components/Home";


function App() {

    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('sunsets');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      let activeFetch = true;
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          // handle success
          if (activeFetch) {
          setPhotos(response.data.data);
          setLoading(false);
          }
        })
        .catch(error => {
          // handle error
          console.log('Error fetching and parsing data', error);
        })
    }, [query]);


      // Fetches photos based on the new query. Results are displayed to the user
    const handleQueryChange = searchText => {
      setQuery(searchText);
    }


 return (
   <><ul className="main-nav">
     <SearchForm changeQuery={handleQueryChange} />
     <NavBar />
     <Routes>
     {/*<Route path="/" element={<Home />} />*/}
      <Route path="cats" element={<Cats />} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="birds" element={<Birds />}>
        <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </ul>
   <div className="photo-container">
       {(loading)
         ? <p className="load-Design">Loading...</p>
         : <PhotoList data={photos} />}
     </div>
     </>
  );
};

export default App;