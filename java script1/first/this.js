const info = {
  name: "shaon",
  id: 22,
  login: function () {
    console.log(`${this.name} , well come`);
  },
};
info.login();
info.name = "Rezwan";
info.login();
