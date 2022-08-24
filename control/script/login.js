const form = document.getElementById("idea_form_login");
let showMsg = (msg) => {
    document.getElementById("idea_msg").innerHTML = msg;
    setTimeout(() => {
        document.getElementById("idea_msg").innerHTML = "";
    }, 1000);
};
form.onsubmit = (evt) => {
    evt.preventDefault();
    if (form.usuario_cedula.value !== "" && form.usuario_pass.value !== "") {
        UsuarioDao.login(new FormData(form)).then((res) => {
            if (!res) return showMsg("Credenciales incorrectos!");
            window.location.href = "panel.php";
        });
    } else {
        showMsg("Debe ingresar sus credenciales");
    }
};
