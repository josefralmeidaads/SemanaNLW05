const socket = io();
let connectionsUsers = [];

socket.on("connect", () => {
  socket.on("admin_list_all_users", (connections) => {
    connectionsUsers = connections;

    document.getElementById("list_users").innerHTML = "";

    const template = document.getElementById("template").innerHTML;

    connections.forEach(connection => {
      const rendered = Mustache.render(template, {
        id: connection.socket_id,
        email: connection.user.email,
      })

      document.getElementById("list_users").innerHTML += rendered;
    });
  });
});

function call(id){
  const connection = connectionsUsers.find(connection => connection.socket_id === id);
  const template_admin = document.getElementById("admin_template").innerHTML;

  const rendered = Mustache.render(template_admin, {
    id: connection.user_id,
    email: connection.user.email,
  });

  document.getElementById("supports").innerHTML += rendered;

  const params = {
    user_id: connection.user_id,
  };

  socket.emit("admin_list_messages_by_user", params, (messages) => {
    const divMessages = document.getElementById(`allMessages${connection.user_id}`);

    messages.forEach(message => {
      const createDiv = document.createElement("div");

      if (message.admin_id === null) {
        createDiv.className = "admin_message_client";
  
        createDiv.innerHTML = `<span>${connection.user.email} </span>`;
        createDiv.innerHTML += `<span>${message.text}</span>`;
        createDiv.innerHTML += `<span class="admin_date_client">${dayjs(
          message.created_at
        ).format("DD/MM/YYYY HH:mm:ss")}</span>`;
      } else {
        createDiv.className = "admin_message_admin";
  
        createDiv.innerHTML += `Atendente: <span>${message.text}</span>`;
        createDiv.innerHTML += `<span class="admin_date">${dayjs(
          message.created_at
        ).format("DD/MM/YYYY HH:mm:ss")}</span>`;
      }
      divMessages.appendChild(createDiv);
    });
  });
}

function sendMessage(id){
  const text = document.getElementById(`send_message_${id}`);

  const params = {
    text: text.value,
    user_id: id,
  };

  socket.emit("admin_send_message", params);

  const divMessages = document.getElementById(`allMessages${id}`);
  const createDiv = document.createElement("div");

  createDiv.className = "admin_message_admin";
  
  createDiv.innerHTML += `Atendente: <span>${text.value}</span>`;
  createDiv.innerHTML += `<span class="admin_date>${dayjs().format("DD/MM/YYYY HH:mm:ss")}`;

  divMessages.appendChild(createDiv);
  text.value = "";
}

socket.on("client_send_message_to_admin", params => {
  console.log('params ->', params);
  const connection = connectionsUsers.find(connection => connection.socket_id === params.socket_id);
  console.log('connection', connection);
  const divMessages = document.getElementById(`allMessages${connection.user_id}`);
  const createDiv = document.createElement("div");

  createDiv.className = "admin_message_client";
  createDiv.innerHTML = `<span>${connection.user.email} </span>`;
  createDiv.innerHTML += `<span>${params.messages.text}</span>`;
  createDiv.innerHTML += `<span class="admin_date_client">${dayjs(
    params.messages.created_at
  ).format("DD/MM/YYYY HH:mm:ss")}</span>`;

  divMessages.appendChild(createDiv);
});

