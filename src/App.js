import React, { useCallback, useEffect, useState } from "react";
import { apiKey } from './config';
import axios from "axios";
import { Routes, Route} from 'react-router-dom';


// App Components
import SearchForm from "./Components/SearchForm";
import NotFound from "./Components/NotFound";
import PhotoList from "./Components/PhotoList";
import NavigationBar from "./Components/NavigationBar";

function App() {
    const [search, setSearchPhotos] = useState('');
    const [sunsets, setSunsetPhotos] = useState('');
    const [dogs, setDogPhotos] = useState('');
    const [birds, setBirdPhotos] = useState('');
    const [cats, setCatPhotos] = useState('');
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);


    const fetchData = useCallback( async query => {
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
          } 
          
          else if (query === 'dogs') {
            setDogPhotos(response.data);
          } else if (query === 'birds') {
            setBirdPhotos(response.data);
          } else if (query === 'cats') {
            setCatPhotos(response.data);
          } else {
            setSearchPhotos(response.data);
          } 
          //activeFetch = false;
          //setLoading(false);
        }
      } catch (error) {
        // handle error
        console.log('Error fetching and parsing data', error);
      } finally {
      setLoading(false);
      }
    }, []);
  

    useEffect(() => { 
      console.log('Fetching data for query:', query);
      fetchData('dogs');
      fetchData('cats');
      fetchData('birds');
      fetchData('sunsets');
      fetchData(query);
    }, [query, fetchData]);

          // Fetches photos based on the new query. Results are displayed to the user
          const handleQueryChange =  searchText => {
            fetchData(searchText);
            setQuery(searchText);
            
            console.log(searchText)            
          }; 



    return (
      <>
        <ul className="main-nav">
          <SearchForm handleQueryChange={handleQueryChange} />
          <NavigationBar />
        </ul>
        <Routes>
          <Route path="/" element={loading ? <p className="load-Design">Loading...</p> :  <PhotoList data={sunsets} />} />
          <Route path="cats" element={loading ? <p className="load-Design">Loading...</p> :  <PhotoList data={cats}/>} />
          <Route path="dogs" element={loading ? <p className="load-Design">Loading...</p> :  <PhotoList data={dogs}/>} />
          <Route path="birds" element={loading ? <p className="load-Design">Loading...</p> :  <PhotoList data={birds}/>} />
          <Route path="/search/:query" element={loading ? <p className="load-Design">Loading...</p> :  <PhotoList data={search} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
       }



export default App;