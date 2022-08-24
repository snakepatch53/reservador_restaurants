const $modal_pedidos = document.getElementById("modal_pedidos");
const $modal_pedidos_window = document.getElementById("modal_pedidos_window");
const $modal_pedidos_button_close = document.getElementById("modal_pedidos_button_close");

$modal_pedidos_button_close.onclick = () => showModalPedido(false, "");

function showModalPedido(bool, content) {
    if (bool) {
        $modal_pedidos.classList.add("open");
    } else {
        $modal_pedidos.classList.remove("open");
    }
    $modal_pedidos_window.innerHTML = content;
}
