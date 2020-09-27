const users = [
  {
    id: 123,
    username: "alice win1",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 123,
    username: "alice win2",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 123,
    username: "alice win3",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 123,
    username: "alice win4",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
];

(function () {
  const userService = new UserService();
  let rowTemplate;
  let tbody;
  let createUserBtn;

  jQuery(main);

  function main() {
    tbody = jQuery("tbody");
    rowTemplate = jQuery("tr.wbdv-template");

    //create new user
    createUserBtn = jQuery(".wbdv-create");
    createUserBtn.click(createUser);
    //delete user
    deleteUserBtn = $(".wbdv-remove");
    deleteUserBtn.click(deleteUser);

    // userService.findAllUsers().then(renderUsers);
    renderUsers(users);
  }

  const deleteUser = (event) => {
    const deleteButton = event.currentTarget;
    console.log("deleteButton", deleteButton);
  };

  function createUser() {
    console.log("calling userUser");
    const usernameFld = $("#usernameFld");
    const firstNameFld = $("#firstNameFld");
    const lastNameFld = $("#lastNameFld");
    const passwordFld = $("#passwordFld");
    const roleFld = $("#roleFld");

    const username = usernameFld.val();
    const firstName = firstNameFld.val();
    const lastName = lastNameFld.val();
    const password = passwordFld.val();
    const role = roleFld.val();

    const user = {
      username,
      firstName,
      lastName,
      password,
      role,
    };
    console.log("new user is ", user);

    users.push(user);
    console.log(" users is ", users);
    // userService.createUser(user).then(renderUsers);
  }

  function renderUsers(users) {
    tbody.empty();
    for (var u in users) {
      const user = users[u];
      const rowClone = rowTemplate.clone();
      rowClone.removeClass("wbdv-hidden");
      rowClone.find(".wbdv-username").html(user.username);
      rowClone.find(".wbdv-first-name").html(user.firstName);
      rowClone.find(".wbdv-last-name").html(user.lastName);
      rowClone.find(".wbdv-role").html(user.role);

      //last name and role
      tbody.append(rowClone);
    }
  }
})();
