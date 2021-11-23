import axios from "axios";

class api {
  state = {};

  baseURL = "https://localhost:44335/api/v1";

  // ACCOUNT
  getAccount = async (address, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/Account/getAccount?address=${address}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(address);
      console.log(res);
    }

    return res;
  };

  editUsername = async (address, username, log = false) => {
    const base64Username = Buffer.from(username).toString("base64");
    var res = await axios({
      url: `${this.baseURL}/Account/editUsername?address=${address}&username=${base64Username}`,
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(address + " " + username);
      console.log(res);
    }

    return res;
  };

  // AUTH
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

  // CHARACTER
  createCharacter = async (log = false) => {
    var res = await axios({
      url: `${this.baseURL}/CharacterMock/createCharacter`,
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

  addCharacter = async (character, address, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/CharacterMock/addCharacter?address=${address}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        owner: address,
        name: character.name,
        gender: character.gender,
        avatar: character.avatar,
        rarity: character.rarity,
        power: character.power,
        moneyRatio: character.moneyRatio,
        health: character.health,
        stamina: character.stamina,
        job: character.job,
        alignment: character.alignment,
      },
    });

    if (log) {
      console.log(character);
      console.log(address);
      console.log(res);
    }

    return res;
  };

  getCharacter = async (id, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/CharacterMock/getCharacter?characterId=${id}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(id);
      console.log(res);
    }

    return res;
  }

  getCharacters = async (id, log = false) => {
    var res = await axios({
      url: `${this.baseURL}/CharacterMock/getCharacters?accountId=${id}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (log) {
      console.log(id);
      console.log(res);
    }

    return res;
  }
}

export default api;
