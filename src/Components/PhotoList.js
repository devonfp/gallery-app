import NotFound from './NotFound';



/* Renders a list of photos based on the provided data prop.
If there are photos in the data prop, they are displayed.
If there are no photos in the data prop, a "NotFound" component is displayed.*/
const PhotoList = props => { 
  const results = props.data;
  const size = 'm'
  let photos = [];

  if (results.photos?.photo.length > 0) {
    photos = results.photos.photo.map((photo) => {
      const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
      return <li key={photo.id}><img src={url} alt={photo.title}/></li>;
    });
  } else {
    photos = <NotFound />;
  }

  return (
    <div className="photo-container">
      <ul>
        {photos.length > 0 ? photos : <li>No photos found</li>}
      </ul>
    </div>
  );
};
//console.log(PhotoList)

export default PhotoList;