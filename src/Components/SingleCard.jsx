
function SingleCard({title, thumbnail, channelName, channelImage, views, uploadedTime, duration}) 
{

  return (
    <div className="youtube-card">
      <div className="thumbnail-container">
        <img src={thumbnail} alt="Thumbnail" className="thumbnail" />
        <span className="duration">{duration}</span>
      </div>

      <div className="video-info">
        <img
          src={channelImage}
          alt="Channel"
          className="channel-img"
        />

        <div className="video-details">
          <h4 className="video-title">{title}</h4>
          <p className="channel-name">{channelName}</p>
          <p className="video-stats">
            {views} views • {uploadedTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard