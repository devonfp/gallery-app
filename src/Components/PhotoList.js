import NotFound from './NotFound';



/* Renders a list of photos based on the provided data prop.
If there are photos in the data prop, they are displayed.
If there are no photos in the data prop, a "NotFound" component is displayed.*/
const PhotoList = props => { 
  const results = props.data;
  let photos = [];

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