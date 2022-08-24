                            
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/PedidoDao.js
*/
PedidoDao = {

    select: () => {
    return fetch(config.getUrl() + "model/script/pedido/select.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json')
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    selectById: (formData) => {
    return fetch(config.getUrl() + "model/script/pedido/selectById.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    insert: (formData) => {
    return fetch(config.getUrl() + "model/script/pedido/insert.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    update: (formData) => {
    return fetch(config.getUrl() + "model/script/pedido/update.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },          
                
    
    delete: (formData) => {
    return fetch(config.getUrl() + "model/script/pedido/delete.php", {
    method: "POST",
    headers: new Headers().append('Accept', 'application/json'),
    body: formData
    }).then(res => res.json()).then(res => {
    return res;
    });
    },
                
    
    
    }
                
                            