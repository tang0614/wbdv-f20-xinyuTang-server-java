function UserService() {
  this.findAllUsers = findAllUsers;
  this.createUser = createUser;
  this.updateUser = updateUser;
  this.deleteUser = deleteUser;

  // POST - Create
  function createUser(user) {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/tang/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
  }

  // GET - Read
  function findAllUsers() {
    return fetch(
      "https://wbdv-generic-server.herokuapp.com/api/tang/users"
    ).then(function (response) {
      return response.json();
    });
  }

  //Update updateUser
  function updateUser(id, user) {
    return fetch(
      `https://wbdv-generic-server.herokuapp.com/api/tang/users/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(function (response) {
      return response.json();
    });
  }

  //Delete
  function deleteUser(id, user) {
    return fetch(
      `https://wbdv-generic-server.herokuapp.com/api/tang/users/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(function (response) {
      return response.json();
    });
  }
}
