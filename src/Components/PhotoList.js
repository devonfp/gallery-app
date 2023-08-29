//import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 
  const results = props.data;
  //console.log(props.data)
  let photos = [];
  //console.log(results.length);
  if (results.photos?.photo.length > 0) {
    photos = results.photos.photo.map((photo) => {
     const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;  
    console.log(url);
    return(
  <ul className="photo-wrap" key={photo.id}>
      <li key={photo.id}>
     <img src={url} alt={photo.title}/> 
     </li>
  </ul> 
    );
  }); 
} else {
    photos = <NotFound/>
  }
 return photos;
};
//console.log(PhotoList)

export default PhotoList;