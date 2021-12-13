import axios from "axios";

class api {
  //singleton
  constructor() {
    if (api.instance) return api.instance;
    api.instance = this;
    this.baseURL = "https://localhost:44377/api/v1";
    return api.instance;
  }

  getUnixTime = async (log = false) => {
    var res = await axios({
      url: `${this.baseURL}/utils/time/getUnixTime`,
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

  generateToken = async (data, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/auth/generateToken`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        address: data.address,
        message: data.message,
        signature: data.signature,
      },
    });

    if (log) {
      console.log(res);
    }

    return res;
  };

  getTokenData = async (token, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/auth/retrieveTokenData?token=${token}`,
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

  fetchAccount = async (token, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/accounts/fetchAccount?token=${token}`,
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

  fetchCharacters = async (token, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/accounts/fetchCharacters?token=${token}`,
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

  getAccount = async (address, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/accounts/getAccount?address=${address}`,
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

  getRobberies = async (status = 1, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/robberies/getRobberies?status=${status}`,
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

  // validateSignature = async (data, log = false) => {
  //   var res = await axios({
  //     url: `${this.baseURL}/auth/validateSignature`,
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: {
  //       address: data.address,
  //       message: data.message,
  //       signature: data.signature,
  //     }
  //   });

  //   if (log) {
  //     console.log(res);
  //   }

  //   return res;
  // };
}

export default api;
