// const express = require("express");
// const cors = require('cors');

// const port = process.env.PORT || 5000;
// const data = require("../client/src/exampleresponse.json");
// app.use(cors());
// app.use(express.json())
// const app = express();
// app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = [
  {
    id: 523523,
    title: "Never Gonna Give You Up",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 23,
  },
  {
    id: 523427,
    title: "The Coding Train",
    url: "https://www.youtube.com/watch?v=HerCR8bw_GE",
    rating: 230,
  },
  {
    id: 82653,
    title: "Mac & Cheese | Basics with Babish",
    url: "https://www.youtube.com/watch?v=FUeyrEN14Rk",
    rating: 2111,
  },
  {
    id: 858566,
    title: "Videos for Cats to Watch - 8 Hour Bird Bonanza",
    url: "https://www.youtube.com/watch?v=xbs7FT7dXYc",
    rating: 11,
  },
  {
    id: 453538,
    title:
      "The Complete London 2012 Opening Ceremony | London 2012 Olympic Games",
    url: "https://www.youtube.com/watch?v=4As0e4de-rI",
    rating: 3211,
  },
  {
    id: 283634,
    title: "Learn Unity - Beginner's Game Development Course",
    url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
    rating: 211,
  },
  {
    id: 562824,
    title: "Cracking Enigma in 2021 - Computerphile",
    url: "https://www.youtube.com/watch?v=RzWB5jL5RX0",
    rating: 111,
  },
  {
    id: 442452,
    title: "Coding Adventure: Chess AI",
    url: "https://www.youtube.com/watch?v=U4ogK0MIzqk",
    rating: 671,
  },
  {
    id: 536363,
    title: "Coding Adventure: Ant and Slime Simulations",
    url: "https://www.youtube.com/watch?v=X-iSQQgOd1A",
    rating: 76,
  },
  {
    id: 323445,
    title: "Why the Tour de France is so brutal",
    url: "https://www.youtube.com/watch?v=ZacOS8NBK6U",
    rating: 73,
  },
];

// GET "/"
app.get("/", (req, res) => {
  res.send(videos);
});

//p### `POST` "/" ??????
//This endpoint is used to add a video to the API.
//Both fields - title and url - must be included and be valid for this to succeed... req.body.title req.body.url
//**Note:** When a video is added, you must attach a unique ID to so that it can later be deleted
app.post("/videos", (req,res) => {
  // let {title, url} = req.body;
  let newId = videos[videos.length - 1].id + 1;
  const newVideo = {
    id: newId,
    title: req.body.title,
    url: req.body.url,
  };
  videos.push(newVideo);
  res.send(videos);

})

// find 1 message by id

app.get("/videos/:id", (req, res) => {
  const foundId = videos.filter((i) => i.id === req.params.id);

  if (foundId) {
    res.status(200).json(foundId);
  }else{
    res.status(400).send("Video not found for given id");
  }
});

// delete message by id
app.delete("/videos/:id", (req, res) =>{
  const requestedId = req.params.id;
  const foundId = videos.find((video) => video.id === requestedId);
  if(!foundId){
    return res.send(404).json({
      "result": "failure",
      "message": "Video could not be deleted"
    })
  }else{
    res.send(200).json({
      "message": `Video id: ${requestedId} deleted `,
      "All videos: ": videos.filter((video) => video.id !== requestedId),
    })
  }
})

