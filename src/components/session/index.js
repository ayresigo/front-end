import axios from "axios";
import React, { Component } from "react";

export default class Session extends Component {
  state = {
    user: {
      isLoggedIn: false,

      username: null,
      address: null,
      avatar: null,

      money: 0,
      respect: 0,
      totalpower: 0,
    },
    myGang: [],
  };

  setIsLoggedIn = async (status = true) => {
    const _user = this.state.user;
    _user.isLoggedIn = status;
    this.setState({ user: _user });
  };

  getIsLoggedIn = async () => {
    return this.state.user.isLoggedIn;
  };

  getUserData = async () => {
    return this.state.user;
  };

  getAccountData = async (address) => {
    try {
      const result = await axios({
        url: "https://localhost:44335/api/v1/Login/" + address,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 200) {
        const userData = this.state.user;
        userData.username = result.data.username;
        userData.address = result.data.address;
        userData.avatar = result.data.avatar;
        userData.money = result.data.money;
        userData.respect = result.data.respect;
        userData.totalpower = result.data.totalpower;

        await this.setState({ user: userData });
        return true;
      }
    } catch (err) {
      return false;
    }
  };
}

// export default Session;
