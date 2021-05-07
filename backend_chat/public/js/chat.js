let socket = null;
let emailUser = null;
let textUser = null;
let socket_admin_id = null;

document.querySelector("#start_chat").addEventListener("click", (event) => {
  socket = io();
  const chat_help = document.getElementById("chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.getElementById("chat_in_support");
  chat_in_support.style.display = "block";

  const text = document.getElementById("txt_help").value;
  const email = document.getElementById("email").value;
  emailUser = email;

  socket.on("connect", () => {
    const params = {
      text,
      email,
    };

    socket.emit("client_first_access", params);

    socket.on("client_list_all_messages", allMessages => {
      const template_client = document.getElementById("message-user-template").innerHTML;
      const template_admin = document.getElementById("admin-template").innerHTML;
  
      allMessages.forEach(message => {
        if(!message.admin_id){
          const rendered = Mustache.render(template_client, {
            message: message.text,
            email: message.user.email,
          });
  
          document.getElementById("messages").innerHTML += rendered;
        } else {
          const rendered = Mustache.render(template_admin, {
            message_admin: message.text
          });
          document.getElementById("messages").innerHTML += rendered;
        }
      });
  
    });

    socket.on("admin_send_message_to_client", params => {
      socket_admin_id = params.socket_id;

      const template_admin = document.getElementById("admin-template").innerHTML;
      const rendered = Mustache.render(template_admin, {
        message_admin: params.text
      })

      document.getElementById("messages").innerHTML += rendered;
    });

  });
});

document.querySelector("#send_message_button").addEventListener("click", (event) => {
  const message_user = document.getElementById("message_user");

  const params = {
    message: message_user.value,
    socket_id: socket_admin_id,
  }

  const template_client = document.getElementById("message-user-template").innerHTML;

  const rendered = Mustache.render(template_client, {
    message: message_user.value,
    email: emailUser,
  });

  document.getElementById("messages").innerHTML += rendered;
  
  socket.emit("client_send_message", params);
  message_user.value = "";
});



