
function SingleCard()
{
 const video = {
    title: "Understanding JavaScript Closures",
    thumbnail: "https://i.ytimg.com/vi/vKJpN5FAeF4/hq720.jpg",
    channel: {
      name: "CodeAcademy",
      profileImage: "https://yt3.ggpht.com/Vzv2OJNdnqMMuBwBp4RMI-4Mp5V3ouabPv0yO69EuxHxtazM12v7DFEOOna9ZEbcS3go-0hb=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    views: "1.2M",
    uploadedTime: "2 days ago",
    duration: "15:32"
  };

  return (
    <div className="youtube-card">
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt="Thumbnail" className="thumbnail" />
        <span className="duration">{video.duration}</span>
      </div>

      <div className="video-info">
        <img
          src={video.channel.profileImage}
          alt="Channel"
          className="channel-img"
        />

        <div className="video-details">
          <h4 className="video-title">{video.title}</h4>
          <p className="channel-name">{video.channel.name}</p>
          <p className="video-stats">
            {video.views} views • {video.uploadedTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;