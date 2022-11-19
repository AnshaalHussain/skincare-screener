import axios from "axios";

const url = "http://127.0.0.1:5000";

const getHomePage = async () => {
  const data = await axios.get(url + "/data");
  return data;
};

const postHomeRoute = async (text) => {
  const data = await axios.post(url + "/data", {
    headers: { "Content-Type": "application/json" },
    message: text,
  });

  return data;
};

const getSkinCareDatabase = async () => {
  const data = await axios.get(url + "/skincare", {
    headers: { "Content-Type": "application/json" },
  });
  console.log(data);
  return data;
};

export default {
  getHomePage,
  postHomeRoute,
  getSkinCareDatabase,
};
