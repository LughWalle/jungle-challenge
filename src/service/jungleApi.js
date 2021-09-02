import axios from "axios";

const post = async (data) => {
  const response = await axios({
    method: 'post',
    url: 'https://api.jungledevs.com/api/v1/challenge-newsletter/',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
  });
  return response;
};

export default post;