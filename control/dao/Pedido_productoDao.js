/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/control/dao/Pedido_productoDao.js
*/
Pedido_productoDao = {
    select: () => {
        return fetch(config.getUrl() + "model/script/pedido_producto/select.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    selectById: (formData) => {
        return fetch(config.getUrl() + "model/script/pedido_producto/selectById.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    insert: (formData) => {
        return fetch(config.getUrl() + "model/script/pedido_producto/insert.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    update: (formData) => {
        return fetch(config.getUrl() + "model/script/pedido_producto/update.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },

    delete: (formData) => {
        return fetch(config.getUrl() + "model/script/pedido_producto/delete.php", {
            method: "POST",
            headers: new Headers().append("Accept", "application/json"),
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                return res;
            });
    },
};
