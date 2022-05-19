import { v4 as uuid } from "uuid";
import { formatDate ,formatTime} from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    name:"Adarsh Balika",
    userPhoto:"https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    postPic:"https://assets.aboutamazon.com/dims4/default/a0e7138/2147483647/strip/true/crop/5760x3242+0+299/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F87%2Ff4%2F78d3e1ce4ea6a425f073e4c362ea%2Fgirls-who-code-image-2.jpg",
    content:
      "Its has been 84 years now",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Adarshbalika",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Kajal",
    userPhoto:"https://avatars.githubusercontent.com/u/50793296?v=4",
    postPic:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Have you ever completed your projects without a deadline  ?",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "KajalKaju",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Coding",
    userPhoto:"https://avatars.githubusercontent.com/u/50793296?v=4",
    postPic:"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "coding ninza represents coding competition, stay tuned to know more",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "coding_ninja",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Tanu",
    userPhoto:"https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/09/mandala-art-geetanjali-07-600x877.jpg.webp",
    postPic:"https://images.unsplash.com/photo-1601208443396-1c677c3ce7cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9yZCUyMGdhbmVzaGElMjBwYWludGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    content:
      "So here's my latest Painting of Lord Ganesha",
    likes: {
      likeCount: 52,
      likedBy: [],
      dislikedBy: [],
    },
    username: "juggling_arts",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
