import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7412cf4fa59c45bba640fd7518cb7973",
  },
})
