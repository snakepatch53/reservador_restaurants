const $shopCar = document.querySelector("#shopcar");
const $buttons_producto = document.querySelectorAll(".btn-producto");
const $pedir_button = document.getElementById("element-pedir-button");
const $shopModal = document.getElementById("shopModal");
const $modalAlert = document.getElementById("modalAlert");
const shopModal = new bootstrap.Modal($shopModal, {
    backdrop: true,
    keyboard: true,
    focus: true,
});
const modalAlert = new bootstrap.Modal($modalAlert, {
    backdrop: true,
    keyboard: true,
    focus: true,
});

// principal thread / INICIO
function main() {
    loadProductList();
}
// principal thread / FIN

//eventos
$buttons_producto.forEach(($button) => {
    $button.onclick = () => {
        const producto_id = $button.getAttribute("producto-id");
        addProduct(producto_id);
    };
});

$pedir_button.onclick = function () {
    const product_list = getProductList();
    if (product_list.length <= 0) return;
    if (SESSION == "") return (location.href = root_url + "checkin");
    const formData = new FormData();
    formData.append("usuario_id", SESSION.usuario_id);
    formData.append("product_list", JSON.stringify(product_list));
    fetch_query(formData, "pedido", "insert").then((res) => {
        shopModal.hide();
        modalAlert.show();
        if (res) dropProductList();
    });
};

// funciones
function loadProductList() {
    const product_list = getProductList();
    let $html = "";
    let total = 0;
    product_list.forEach((producto) => {
        const $producto = producto_array.find((item) => item.producto_id == producto.producto_id);
        if ($producto) {
            total += $producto.producto_precio * producto.cantidad;
            $html += `
                <tr>
                    <td>
                        <small>${$producto.producto_nombre}</small>
                    </td>
                    <td>
                        <input type="number" min="1" class="form-control" value="${producto.cantidad}" 
                        onchange="refreshPrice(this, '${$producto.producto_precio}', '${$producto.producto_id}')" 
                        onkeyup="refreshPrice(this, '${$producto.producto_precio}', '${$producto.producto_id}')">
                    </td>
                    <td>
                        <small class="text-muted">$${$producto.producto_precio}</small>
                    </td>
                    <td>
                        <small 
                            class="text-muted" 
                            id="subtotal-element-${$producto.producto_id}">
                            $${$producto.producto_precio * producto.cantidad}
                        </small>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm" onclick="deleteProduct('${
                            $producto.producto_id
                        }')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }
    });
    $html += `
        <tr>
            <td></td><td></td>
            <td>
                <small>
                    <strong>Total:</strong>
                </small>
            </td>
            <td>
                <small id="total-element" class="text-muted">$${total}</small>
            </td>
            <td></td>
        </tr>
    `;
    $shopCar.innerHTML = $html;
}

function refreshPrice($input, precio, subtotal_id) {
    document.getElementById("subtotal-element-" + subtotal_id).innerText = "$" + $input.value * precio;
    updateProductList(subtotal_id, $input.value);
    $product_list = getProductList();
    const total = $product_list
        .map(
            (producto) =>
                producto.cantidad * producto_array.find((item) => item.producto_id == producto.producto_id).producto_precio
        )
        .reduce((a, b) => a + b, 0);
    document.getElementById("total-element").innerText = "$" + total;
}

function addProduct(producto_id) {
    const storage = localStorage.getItem("product-list");
    let product_list = JSON.parse(storage);
    if (!storage) product_list = [];
    const $producto = product_list.find((producto) => producto.producto_id == producto_id);
    if ($producto) {
        $producto.cantidad++;
    } else {
        product_list.push({ producto_id, cantidad: 1 });
    }
    localStorage.setItem("product-list", JSON.stringify(product_list));
    loadProductList();
}

function deleteProduct(producto_id) {
    const storage = localStorage.getItem("product-list");
    let product_list = JSON.parse(storage);
    if (!storage) product_list = [];
    product_list = product_list.filter((producto) => producto.producto_id != producto_id);
    localStorage.setItem("product-list", JSON.stringify(product_list));
    loadProductList();
}

function dropProductList() {
    localStorage.removeItem("product-list");
    loadProductList();
}

function updateProductList(producto_id, cantidad) {
    const storage = localStorage.getItem("product-list");
    let product_list = JSON.parse(storage);
    if (!storage) product_list = [];
    const $producto = product_list.find((producto) => producto.producto_id == producto_id);
    $producto.cantidad = cantidad;
    localStorage.setItem("product-list", JSON.stringify(product_list));
    loadProductList();
}

function getProductList() {
    const storage = localStorage.getItem("product-list");
    let product_list = JSON.parse(storage);
    if (!storage) product_list = [];
    return product_list;
}

function logout() {
    fetch_query(null, "usuario", "logout").then((res) => {
        if (res) return (location.href = root_url);
    });
}

main();
