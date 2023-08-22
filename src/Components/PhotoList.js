//import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 
  const results = props.data;
  let photos = [];
  if (results.length > 0) {
    photos = results.photos.photo.map((photo) => {
     const url = `https://live.staticflickr.com/${photo.server_id}/${photo.id}_${photo.secret}_b.jpg`;  
    console.log(photo);
    return(
      <ul className="photo-list">
     <img src={url} alt={photo.title} key={photo.id}/> 
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