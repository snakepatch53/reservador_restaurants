                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/pedido_producto.js
*/
// MAIN INI
const main = async () => {
    await entity.pedido_producto.crud.select();
    await entity.selects.pedido();
    await entity.selects.producto();
    }
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
    search: document.getElementById("idea_search")
    },
    fun: {
    
    showModalForm: (index) => {
    entity.pedido_producto.index = index;
    if (index !== null) {
    entity.view.form.pedido_producto_id.value = entity.pedido_producto.database[index].pedido_producto_id;
                entity.view.form.pedido_producto_cantidad.value = entity.pedido_producto.database[index].pedido_producto_cantidad;
    entity.view.form.pedido_producto_precio.value = entity.pedido_producto.database[index].pedido_producto_precio;
    entity.view.form.pedido_id.value = entity.pedido_producto.database[index].pedido_id;
    entity.view.form.producto_id.value = entity.pedido_producto.database[index].producto_id;
    }
    entity.view.modalForm.style.top = '0%';
    },
    
    
    hideModalForm: () => {
    entity.pedido_producto.index = null;
    entity.view.form.pedido_producto_id.value = "";
                entity.view.form.pedido_producto_cantidad.value = "";
    entity.view.form.pedido_producto_precio.value = "";
    entity.view.form.pedido_id.value = "";
    entity.view.form.producto_id.value = "";
    entity.view.modalForm.style.top = '-100%';
    },
    
    showModalMessage: (msg) => {
    entity.view.modalMessage.style.top = '0%';
    entity.view.message.innerHTML = msg;
    },
    hideModalMessage: () => {
    entity.view.modalMessage.style.top = '-100%';
    entity.view.message.innerHTML = '';
    },
    showModalConfirm: (msg, action) => {
    entity.view.modalConfirm.style.top = '0%';
    entity.view.confirm.innerHTML = msg;
    action();
    },
    hideModalConfirm: () => {
    entity.pedido_producto.index = null;
    entity.view.modalConfirm.style.top = '-100%';
    entity.view.confirm.innerHTML = '';
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
    <td>${ register.pedido_producto_id }</td>
    <td>${ register.pedido_producto_cantidad }</td>
    <td>${ register.pedido_producto_precio }</td>
    <td>${ register.pedido_id }</td>
    <td>${ register.producto_id }</td>
    <td>
    <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.pedido_producto.index = ${ index })">
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
    for (let i = 0; i < entity.pedido_producto.database.length; i++) {
    if (
    textSearch === entity.pedido_producto.database[i].pedido_producto_id.substring(0, textSearch.length).toLowerCase()  ||
    textSearch === entity.pedido_producto.database[i].pedido_producto_cantidad.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.pedido_producto.database[i].pedido_producto_precio.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.pedido_producto.database[i].pedido_id.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.pedido_producto.database[i].producto_id.substring(0, textSearch.length).toLowerCase()
    ) {
    html += entity.fun.getHtmlTr(entity.pedido_producto.database[i], i);
    }
    }
    entity.view.table.innerHTML = html;
    } else {
    entity.pedido_producto.fun.select();
    }
    },
    
    },
    pedido_producto: {
    database: [],
    index: null,
    fun: {
    
    select: () => {
    let html = "";
    for (let i = 0; i < entity.pedido_producto.database.length; i++) {
    html += entity.fun.getHtmlTr(entity.pedido_producto.database[i], i);
    }
    entity.view.table.innerHTML = html;
    },
    
    
    insertOrUpdate: () => {
    if (
                entity.view.form.pedido_producto_cantidad.value !== "" &&
     entity.view.form.pedido_producto_precio.value !== "" &&
     entity.view.form.pedido_id.value !== "" &&
     entity.view.form.producto_id.value !== ""
    ) {
    if (entity.pedido_producto.index === null) {
    entity.pedido_producto.crud.insert();
    } else {
    entity.pedido_producto.crud.update();
    }
    } else {
    entity.fun.showModalMessage("Debe llenar todos los campos!");
    }
    },
    
    },
    crud: {
    select: async () => {
    await Pedido_productoDao.select().then(res => {
    entity.pedido_producto.database = res;
    entity.pedido_producto.fun.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    insert: () => {
    Pedido_productoDao.insert(new FormData(entity.view.form)).then(res => {
    entity.pedido_producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    update: () => {
    Pedido_productoDao.update(new FormData(entity.view.form)).then(res => {
    entity.pedido_producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    delete: () => {
    let formData = new FormData();
    formData.append("pedido_producto_id", entity.pedido_producto.database[entity.pedido_producto.index].pedido_producto_id);
    Pedido_productoDao.delete(formData).then(res => {
    entity.pedido_producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    }
    }
    },
    
    selects: {
                
    pedido: async () => {
    await PedidoDao.select().then(res => {
    let html = `<option value="">PEDIDO_ID</option>`;
    for (let i = 0; i < res.length; i++) {
    html += `
    <option value="${ res[i].pedido_id }">${ res[i].pedido_id }</option>
    `;
    }
    entity.view.form.pedido_id.innerHTML = html;
    });
    }
                    , 
    producto: async () => {
    await ProductoDao.select().then(res => {
    let html = `<option value="">PRODUCTO_ID</option>`;
    for (let i = 0; i < res.length; i++) {
    html += `
    <option value="${ res[i].producto_id }">${ res[i].producto_id }</option>
    `;
    }
    entity.view.form.producto_id.innerHTML = html;
    });
    }
                    
    }
    
    }
    // EVENTS
    entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
    entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
    // MAIN CALL
    main();
                
                            