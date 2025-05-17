import { useState,useEffect } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";
function YoutubeCard() {
  
    const[cardData, setCardData] = useState([]);

    async function getYoutubeData() {
       
        const youtube = await axios.get("https://66d7839637b1cadd8051ba0d.mockapi.io/nn/api/youtube");
        setCardData(youtube.data);
        console.log(youtube.data);
    }

    useEffect(() => {
        getYoutubeData();
    },[]);

     
  return (

    <>
     <div className="youtube-card-content" >
      {
       
        cardData.map((data) => {
            return (
                
                <SingleCard
                    title={data.title}
                    thumbnail={data.thumbnail}
                    channelName={data.channel?.name || "Unknown Channel"}
                    channelImage={data.channel?.profileImage || ""}
                    views={data.views}
                    uploadedTime={data.uploadedTime}
                    duration={data.duration}
                />
              
            );
        })
       

      }
       </div>
    </>
    
  );
}

export default YoutubeCard;
