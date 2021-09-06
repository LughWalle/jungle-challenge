import axios from "axios";

const post = async (data, handling, setInvalid) => {
  try {
    await axios({
      method: "post",
      url: "https://api.jungledevs.com/api/v1/challenge-newsletter/",
      data,
    })
    setInvalid(true)
  } catch (error) {
    const { response, response: { data } } = error;
    if (response) {
      handling(data);
    }
    setInvalid(false)
  };
}

// const post = async (data, handling) => await axios({
//     method: "post",
//     url: "https://api.jungledevs.com/api/v1/challenge-newsletter/",
//     data,
//   }).catch((error) => {
//     const { response, response: { data } } = error;
//     console.log(response);
//     if (response) {
//       handling(data);
//       console.error(data);
//     }
//   });

export default post;