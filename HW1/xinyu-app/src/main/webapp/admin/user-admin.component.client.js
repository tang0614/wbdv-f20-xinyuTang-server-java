let users = [
  {
    id: 1,
    username: "alice win1",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 2,
    username: "alice win2",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 3,
    username: "alice win3",
    firstName: "alice",
    lastName: "win",
    role: "FACULTY",
  },
  {
    id: 4,
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

    // userService.findAllUsers().then(renderUsers);
    renderUsers(users);
  }

  const deleteUser = (index) => {
    console.log("deleting", index);
    users.splice(index, 1);
    console.log("users is", users);
    renderUsers(users);
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

    users.push(user);
    renderUsers(users);
    clearForm();
  }

  function clearForm() {
    console.log("clearing the form");
    $("#usernameFld").val("");
    $("#firstNameFld").val("");
    $("#lastNameFld").val("");
    $("#passwordFld").val("");
    $("#roleFld").val("");
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

      rowClone.find(".wbdv-remove").click(() => deleteUser(user.id));
      // rowClone.find(".wbdv-edit").click(() => deleteUser(user.id));

      //last name and role
      tbody.append(rowClone);
    }
  }
})();
