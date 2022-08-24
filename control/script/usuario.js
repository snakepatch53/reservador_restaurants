const main = async () => {
    await entity.usuario.crud.select();
};
// MASTER OBJECT INI
const entity = {
    view: {
        table: document.getElementById("idea_table"),
        modalForm: document.getElementById("idea_modal_form"),
        form: document.getElementById("idea_form"),
        modalMessage: document.getElementById("idea_modal_message"),
        message: document.getElementById("idea_message"),
        modalConfirm: document.getElementById("idea_modal_confirm"),
        confirm: document.getElementById("idea_confirm"),
        search: document.getElementById("idea_search"),
    },
    fun: {
        showModalForm: (index) => {
            entity.usuario.index = index;
            if (index !== null) {
                entity.view.form.usuario_id.value = entity.usuario.database[index].usuario_id;
                entity.view.form.usuario_nombres.value = entity.usuario.database[index].usuario_nombres;
                entity.view.form.usuario_apellidos.value = entity.usuario.database[index].usuario_apellidos;
                entity.view.form.usuario_cedula.value = entity.usuario.database[index].usuario_cedula;
                entity.view.form.usuario_telefono.value = entity.usuario.database[index].usuario_telefono;
                entity.view.form.usuario_email.value = entity.usuario.database[index].usuario_email;
                entity.view.form.usuario_genero.value = entity.usuario.database[index].usuario_genero;
                entity.view.form.usuario_nacimiento.value = entity.usuario.database[index].usuario_nacimiento;
                entity.view.form.usuario_user.value = entity.usuario.database[index].usuario_user;
                entity.view.form.usuario_pass.value = entity.usuario.database[index].usuario_pass;
                entity.view.form.usuario_autorize.value = entity.usuario.database[index].usuario_autorize;
                entity.view.form.usuario_admin.value = entity.usuario.database[index].usuario_admin;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.usuario.index = null;
            entity.view.form.usuario_id.value = "";
            entity.view.form.usuario_nombres.value = "";
            entity.view.form.usuario_apellidos.value = "";
            entity.view.form.usuario_cedula.value = "";
            entity.view.form.usuario_telefono.value = "";
            entity.view.form.usuario_email.value = "";
            entity.view.form.usuario_genero.value = "";
            entity.view.form.usuario_nacimiento.value = "";
            entity.view.form.usuario_user.value = "";
            entity.view.form.usuario_pass.value = "";
            entity.view.form.usuario_autorize.value = "";
            entity.view.form.usuario_admin.value = "";
            entity.view.modalForm.style.top = "-100%";
        },

        showModalMessage: (msg) => {
            entity.view.modalMessage.style.top = "0%";
            entity.view.message.innerHTML = msg;
        },
        hideModalMessage: () => {
            entity.view.modalMessage.style.top = "-100%";
            entity.view.message.innerHTML = "";
        },
        showModalConfirm: (msg, action) => {
            entity.view.modalConfirm.style.top = "0%";
            entity.view.confirm.innerHTML = msg;
            action();
        },
        hideModalConfirm: () => {
            entity.usuario.index = null;
            entity.view.modalConfirm.style.top = "-100%";
            entity.view.confirm.innerHTML = "";
        },
        pressYesModalConfirm: (action) => {
            action();
            entity.fun.hideModalConfirm();
        },
        submitForm: (evt) => {
            evt.preventDefault();
        },

        getHtmlTr: (register, index) => {
            return `
                <tr>
                <td>${register.usuario_nombres}</td>
                <td>${register.usuario_apellidos}</td>
                <td>${register.usuario_cedula}</td>
                <td>${register.usuario_telefono}</td>
                <td>${register.usuario_email}</td>
                <td>${register.usuario_genero}</td>
                <td>${register.usuario_nacimiento}</td>
                <td>${register.usuario_pass}</td>
                <td>${register.usuario_autorize == 1 ? "SI" : "NO"}</td>
                <td>${register.usuario_admin == 1 ? "SI" : "NO"}</td>
                <td><img src="${
                    register.usuario_foto !== null
                        ? "view/src/files/usuario_foto/" + register.usuario_foto
                        : "view/src/img/avatar.png"
                }"/></td>
                                            
                <td>
                <button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/edit.png"></button>
                <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.usuario.index = ${index})">
                <img src="view/src/icon/delete.png">
                </button>
                </td>
                </tr>
            `;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.usuario.database.length; i++) {
                    if (
                        textSearch === entity.usuario.database[i].usuario_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_nombres.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_apellidos.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_cedula.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_telefono.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_email.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_genero.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_nacimiento.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_pass.substring(0, textSearch.length).toLowerCase() ||
                        textSearch ===
                            entity.usuario.database[i].usuario_autorize.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.usuario.database[i].usuario_admin.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.usuario.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.usuario.fun.select();
            }
        },
    },
    usuario: {
        database: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.usuario.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.usuario.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.usuario_nombres.value !== "" &&
                    entity.view.form.usuario_apellidos.value !== "" &&
                    entity.view.form.usuario_cedula.value !== "" &&
                    entity.view.form.usuario_telefono.value !== "" &&
                    entity.view.form.usuario_email.value !== "" &&
                    entity.view.form.usuario_genero.value !== "" &&
                    entity.view.form.usuario_nacimiento.value !== "" &&
                    entity.view.form.usuario_user.value !== "" &&
                    entity.view.form.usuario_pass.value !== "" &&
                    entity.view.form.usuario_autorize.value !== "" &&
                    entity.view.form.usuario_admin.value !== ""
                ) {
                    if (entity.usuario.index === null) {
                        entity.usuario.crud.insert();
                    } else {
                        entity.usuario.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            select: async () => {
                await UsuarioDao.select()
                    .then((res) => {
                        entity.usuario.database = res;
                        entity.usuario.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                UsuarioDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                UsuarioDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("usuario_id", entity.usuario.database[entity.usuario.index].usuario_id);
                UsuarioDao.delete(formData)
                    .then((res) => {
                        entity.usuario.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {},
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
