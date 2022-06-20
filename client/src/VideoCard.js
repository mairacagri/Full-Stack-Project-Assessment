import React from "react";
import Votes from "./Votes";
import DeleteButton from "./DeleteButton";

function VideoCard(props) {

    return (

        <div className="card">
            {props.data.map((video, index) => {
              return   <div className ="card-body">
              <iframe title={video.title} width="420" height="315" src={video.url}>
              </iframe>
              <Votes/>
              <DeleteButton />
          </div> 
            })}
           
           
        </div> 
    )
}
export default VideoCard;

