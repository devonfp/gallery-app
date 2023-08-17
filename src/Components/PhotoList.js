import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 
  const results = props.data;
  let photos = [];
  if (results.length > 0) {
    photos = results.map((photo) => {
    console.log(photo.images.fixed_height.url);
    return <Photo url={photo.images.fixed_height.url} key={photo.id}/>;
    });
  } else {
    photos = <NotFound/>
  }
    
  return(
    <ul className="photo-list">
      {photos}
    </ul> 
  );
}
//console.log(PhotoList)

export default PhotoList;