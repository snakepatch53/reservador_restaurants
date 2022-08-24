                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/script/producto.js
*/
// MAIN INI
const main = async () => {
    await entity.producto.crud.select();
    
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
    entity.producto.index = index;
    if (index !== null) {
    entity.view.form.producto_id.value = entity.producto.database[index].producto_id;
                entity.view.form.producto_nombre.value = entity.producto.database[index].producto_nombre;
    entity.view.form.producto_precio.value = entity.producto.database[index].producto_precio;
    entity.view.form.producto_descripcion.value = entity.producto.database[index].producto_descripcion;
    }
    entity.view.modalForm.style.top = '0%';
    },
    
    
    hideModalForm: () => {
    entity.producto.index = null;
    entity.view.form.producto_id.value = "";
                entity.view.form.producto_nombre.value = "";
    entity.view.form.producto_precio.value = "";
    entity.view.form.producto_descripcion.value = "";
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
    entity.producto.index = null;
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
    <td>${ register.producto_id }</td>
    <td>${ register.producto_nombre }</td>
    <td>${ register.producto_precio }</td>
    <td>${ register.producto_descripcion }</td>
    <td><img src="${ 
    (register.producto_img !== null) ?
    'view/src/files/producto_img/' + register.producto_img :
    'view/src/img/avatar.png'
    }"/></td>
                                
    <td>
    <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
    <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.producto.index = ${ index })">
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
    for (let i = 0; i < entity.producto.database.length; i++) {
    if (
    textSearch === entity.producto.database[i].producto_id.substring(0, textSearch.length).toLowerCase()  ||
    textSearch === entity.producto.database[i].producto_nombre.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.producto.database[i].producto_precio.substring(0, textSearch.length).toLowerCase() ||
    textSearch === entity.producto.database[i].producto_descripcion.substring(0, textSearch.length).toLowerCase()
    ) {
    html += entity.fun.getHtmlTr(entity.producto.database[i], i);
    }
    }
    entity.view.table.innerHTML = html;
    } else {
    entity.producto.fun.select();
    }
    },
    
    },
    producto: {
    database: [],
    index: null,
    fun: {
    
    select: () => {
    let html = "";
    for (let i = 0; i < entity.producto.database.length; i++) {
    html += entity.fun.getHtmlTr(entity.producto.database[i], i);
    }
    entity.view.table.innerHTML = html;
    },
    
    
    insertOrUpdate: () => {
    if (
                entity.view.form.producto_nombre.value !== "" &&
     entity.view.form.producto_precio.value !== "" &&
     entity.view.form.producto_descripcion.value !== ""
    ) {
    if (entity.producto.index === null) {
    entity.producto.crud.insert();
    } else {
    entity.producto.crud.update();
    }
    } else {
    entity.fun.showModalMessage("Debe llenar todos los campos!");
    }
    },
    
    },
    crud: {
    select: async () => {
    await ProductoDao.select().then(res => {
    entity.producto.database = res;
    entity.producto.fun.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    insert: () => {
    ProductoDao.insert(new FormData(entity.view.form)).then(res => {
    entity.producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    update: () => {
    ProductoDao.update(new FormData(entity.view.form)).then(res => {
    entity.producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    },
    delete: () => {
    let formData = new FormData();
    formData.append("producto_id", entity.producto.database[entity.producto.index].producto_id);
    ProductoDao.delete(formData).then(res => {
    entity.producto.crud.select();
    entity.fun.hideModalForm();
    }).catch(res => {
    entity.fun.showModalMessage("Problemas al conectar con el servidor");
    });
    }
    }
    },
    
    selects: {
                
    }
    
    }
    // EVENTS
    entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
    entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
    // MAIN CALL
    main();
                
                            