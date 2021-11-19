import axios from "axios";

class api {
  state = {};

  baseURL = "https://localhost:44335/api/v1";

  checkSignature = async (sign, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/Auth/checkSignature`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        address: sign.address,
        message: sign.message,
        signature: sign.signature,
      },
    });

    if (log) {
      console.log(sign);
      console.log(res);
    }

    return res;
  };

  generateToken = async (data, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/Auth/generateToken`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: data.id,
        address: data.address,
        signature: {
          message: data.message,
          signature: data.signature,
        },
      },
    });

    if (log) {
      console.log(data);
      console.log(res);
    }

    return res;
  };

  checkToken = async (token, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/Auth/checkToken?token=${token}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(token);
      console.log(res);
    }

    return res;
  };
}

export default api;
