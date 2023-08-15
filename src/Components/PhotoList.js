import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => { 
  const results = props.data;
  let photos;
  if (results && results.length > 0) {
    photos = results.map(photo => <Photo url={photo.images.fixed_height.url} key={photo.id}/>);
  } else {
    photos = <NotFound/>
  }
    
  return(
    <ul className="photo-list">
      {photos}
    </ul> 
  );
}

export default PhotoList;