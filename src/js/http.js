import axios from 'axios'

export default axios.create({
  // baseURL: "https://groupy-app2.herokuapp.com/api/",
  baseURL: "http://localhost:3000/api/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
});
