const main = async () => {
    await entity.pedido.crud.select();
    await entity.pedido.crud.selectList();
    await entity.selects.usuario();
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
            entity.pedido.index = index;
            if (index !== null) {
                entity.view.form.pedido_id.value = entity.pedido.database[index].pedido_id;
                entity.view.form.pedido_fecha.value = entity.pedido.database[index].pedido_fecha;
                entity.view.form.pedido_cantidad.value = entity.pedido.database[index].pedido_cantidad;
                entity.view.form.usuario_id.value = entity.pedido.database[index].usuario_id;
            }
            entity.view.modalForm.style.top = "0%";
        },

        hideModalForm: () => {
            entity.pedido.index = null;
            entity.view.form.pedido_id.value = "";
            entity.view.form.pedido_fecha.value = "";
            entity.view.form.pedido_cantidad.value = "";
            entity.view.form.usuario_id.value = "";
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
            entity.pedido.index = null;
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
        handleList: (pedido_id) => {
            const pedidos = entity.pedido.databaseList.filter((el) => el.pedido_id == pedido_id);
            let html = `
                <h3>Lista de Pedidos</h3>
                <table border=1>
                <thead>
                    <tr>
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
            `;
            let total = 0;
            for (let pedido of pedidos) {
                total += pedido.pedido_producto_cantidad * pedido.pedido_producto_precio;
                html += `
                    <tr>
                        <td>${pedido.producto_nombre}</td>
                        <td>$${pedido.pedido_producto_precio}</td>
                        <td>${pedido.pedido_producto_cantidad}</td>
                        <td>$${pedido.pedido_producto_cantidad * pedido.pedido_producto_cantidad}</td>
                    </tr>
                    
                `;
            }
            html += `
            <tr>
                <td></td>
                <td></td>
                <td><b>Total:</b></td>
                <td>$${total}</td>
            </tr>
            </tbody>
            </table>
            `;
            return html;
        },

        getHtmlTr: (register, index) => {
            return `
            <tr>
            <td>${register.pedido_id}</td>
            <td>${register.pedido_fecha}</td>
            <td>${register.usuario_nombres}</td>
            <td>
            <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.pedido.index = ${index})">
            <img src="view/src/icon/delete.png">
            </button>
            <button onclick="showModalPedido(true, entity.fun.handleList(${register.pedido_id}))">
            <img src="view/src/icon/show.png">
            </button>
            </td>
            </tr>
            `;
        },

        search: (evt) => {
            let textSearch = evt.srcElement.value.toLowerCase();
            if (textSearch !== "") {
                let html = "";
                for (let i = 0; i < entity.pedido.database.length; i++) {
                    if (
                        textSearch === entity.pedido.database[i].pedido_id.substring(0, textSearch.length).toLowerCase() ||
                        textSearch === entity.pedido.database[i].pedido_fecha.substring(0, textSearch.length).toLowerCase() ||
                        (textSearch === textSearch) ===
                            entity.pedido.database[i].usuario_id.substring(0, textSearch.length).toLowerCase()
                    ) {
                        html += entity.fun.getHtmlTr(entity.pedido.database[i], i);
                    }
                }
                entity.view.table.innerHTML = html;
            } else {
                entity.pedido.fun.select();
            }
        },
    },
    pedido: {
        database: [],
        databaseList: [],
        index: null,
        fun: {
            select: () => {
                let html = "";
                for (let i = 0; i < entity.pedido.database.length; i++) {
                    html += entity.fun.getHtmlTr(entity.pedido.database[i], i);
                }
                entity.view.table.innerHTML = html;
            },

            insertOrUpdate: () => {
                if (
                    entity.view.form.pedido_fecha.value !== "" &&
                    entity.view.form.pedido_cantidad.value !== "" &&
                    entity.view.form.usuario_id.value !== ""
                ) {
                    if (entity.pedido.index === null) {
                        entity.pedido.crud.insert();
                    } else {
                        entity.pedido.crud.update();
                    }
                } else {
                    entity.fun.showModalMessage("Debe llenar todos los campos!");
                }
            },
        },
        crud: {
            selectList: async () => {
                await Pedido_productoDao.select()
                    .then((res) => {
                        entity.pedido.databaseList = res;
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            select: async () => {
                await PedidoDao.select()
                    .then((res) => {
                        entity.pedido.database = res;
                        entity.pedido.fun.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            insert: () => {
                PedidoDao.insert(new FormData(entity.view.form))
                    .then((res) => {
                        entity.pedido.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            update: () => {
                PedidoDao.update(new FormData(entity.view.form))
                    .then((res) => {
                        entity.pedido.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
            delete: () => {
                let formData = new FormData();
                formData.append("pedido_id", entity.pedido.database[entity.pedido.index].pedido_id);
                PedidoDao.delete(formData)
                    .then((res) => {
                        entity.pedido.crud.select();
                        entity.fun.hideModalForm();
                    })
                    .catch((res) => {
                        entity.fun.showModalMessage("Problemas al conectar con el servidor");
                    });
            },
        },
    },

    selects: {
        usuario: async () => {
            await UsuarioDao.select().then((res) => {
                let html = `<option value="">USUARIO_ID</option>`;
                for (let i = 0; i < res.length; i++) {
                    html += `
<option value="${res[i].usuario_id}">${res[i].usuario_id}</option>
`;
                }
                entity.view.form.usuario_id.innerHTML = html;
            });
        },
    },
};
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();
