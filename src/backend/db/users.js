import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profilePic: "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    bio:"Adarsh Full stack Developer",
    link:"https://adarshbalika.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kajal",
    lastName: "Kumari",
    username: "KajalKaju",
    password: "Kajal123",
    profilePic: "https://avatars.githubusercontent.com/u/50793296?v=4",
    bio:"Aspiring Full stack Developer",
    link:"https://kajalkumari-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Coding",
    lastName: "Ninja",
    username: "coding_ninja",
    password: "codingninza123",
    profilePic: "https://files.codingninjas.in/0000000000000723.jpg",
    bio:"Transformed 50,000+  students & professionals into Ninja Coders ",
    link:"https://linktr.ee/codingninjasindia",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanu",
    lastName: "Komal",
    username: "juggling_arts",
    password: "tanukomal",
    profilePic: "https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/09/mandala-art-geetanjali-07-600x877.jpg.webp",
    bio:"I dream my paintings and paint my dreams😉😉... ",
    link:"https://google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Narendra",
    lastName: "Modi",
    username: "narendramodi",
    password: "narendramodi",
    profilePic: "https://pbs.twimg.com/profile_images/1479443900368519169/PgOyX1vt_200x200.jpg",
    bio:"Prime Minister of India",
    link:"https://www.narendramodi.in/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
