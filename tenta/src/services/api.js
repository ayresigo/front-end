import axios from "axios";

class api {
  //singleton
  constructor() {
    if (api.instance) return api.instance;
    api.instance = this;
    this.baseURL = "https://localhost:44335/api/v1";
    return api.instance;
  }

  getUnixTime = async (log = false) => {
    var res = await axios({
      url: `https://localhost:44377/time/getUnixTime
      `,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(res);
    }

    return res;
  };
}

export default api;
