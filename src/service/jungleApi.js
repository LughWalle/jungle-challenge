import axios from "axios";

const post = async (data) => await axios({
    method: "post",
    url: "https://api.jungledevs.com/api/v1/challenge-newsletter/",
    data,
  });

export default post;