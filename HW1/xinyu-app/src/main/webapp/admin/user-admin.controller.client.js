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
    createUserBtn.click(inputUser);
    userService.findAllUsers().then(renderUsers);
  }

  const deleteUser = async (index) => {
    console.log("deleting", index);

    const users = await userService.findAllUsers();

    console.log("error is", error);

    users.splice(index, 1);
    renderUsers(users);
  };

  const updateUser = (rowClone, index) => {
    console.log(
      "editing user rowClone",
      rowClone.find(".wbdv-edit").parent().parent().parent()
    );

    let dad = rowClone.find(".wbdv-edit").parent().parent().parent();

    let username = dad.find(".wbdv-username").text();
    let firstName = dad.find(".wbdv-first-name").text();
    let lastName = dad.find(".wbdv-last-name").text();

    dad
      .find(".wbdv-username")
      .append(
        '<input id="edit_usernameFld" type="text" class="form-control" placeholder="Username" value=' +
          username +
          " />"
      );

    dad
      .find(".wbdv-first-name")
      .append(
        '<input id="edit_firstNameFld" type="text" class="form-control" placeholder="First Name" value=' +
          firstName +
          " />"
      );

    dad
      .find(".wbdv-last-name")
      .append(
        '<input id="edit_lastNameFld" type="text" class="form-control" placeholder="Last Name" value=' +
          lastName +
          " />"
      );

    //check update user
    createUserBtn = jQuery(".wbdv-update");
    createUserBtn.click(() => findUserById(index));
  };

  async function findUserById(index) {
    console.log("calling updateUser");
    const usernameFld = $("#edit_usernameFld");
    const firstNameFld = $("#edit_firstNameFld");
    const lastNameFld = $("#edit_lastNameFld");

    const username = usernameFld.val();
    const firstName = firstNameFld.val();
    const lastName = lastNameFld.val();

    const users = await userService.findAllUsers();

    console.log("error is", error);

    const old_user = users[index];

    console.log("old_user", old_user);
    const user = {
      username,
      password: old_user.password,
      firstName,
      lastName,
      role: old_user.role,
    };

    users[index] = user;
    console.log("users", users);
    renderUsers(users);
  }

  async function inputUser() {
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
      fist: firstName,
      last: lastName,
      role,
    };

    const users = await userService.findAllUsers();

    userService.createUser(user).then((user) => {
      console.log("posting new user ", user);
      users.push(user);
    });
    renderUsers(users);
    clearForm();
  }

  function clearForm() {
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

      rowClone.find(".wbdv-edit").click(() => updateUser(rowClone, user.id));

      //last name and role
      tbody.append(rowClone);
    }
  }

  function renderUser(singleUser) {
    tbody.empty();
    const user = singleUser;
    const rowClone = rowTemplate.clone();
    rowClone.removeClass("wbdv-hidden");
    rowClone.find(".wbdv-username").html(user.username);
    rowClone.find(".wbdv-first-name").html(user.firstName);
    rowClone.find(".wbdv-last-name").html(user.lastName);
    rowClone.find(".wbdv-role").html(user.role);

    rowClone.find(".wbdv-remove").click(() => deleteUser(user.id));

    rowClone.find(".wbdv-edit").click(() => updateUser(rowClone, user.id));

    //last name and role
    tbody.append(rowClone);
  }
})();
