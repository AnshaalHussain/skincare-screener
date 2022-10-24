import axios from "axios";

const url = "http://127.0.0.1:5000";

const getHomePage = async () => {
  const data = await axios.get(url);

  return data;
};

const postHomeRoute = async (text) => {
  const data = await axios.post(url + "/data", {
    headers: { "Content-Type": "application/json" },
    message: text,
  });

  return data;
};

export default {
  getHomePage,
  postHomeRoute,
};
