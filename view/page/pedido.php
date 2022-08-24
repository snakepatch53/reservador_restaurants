<?php
if (isset($viewPage)) {
?>
    <link rel="stylesheet" href="view/css/modal_pedidos.css">
    <div class="header">
        <span>PEDIDO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick=""></button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>FECHA</td>
                    <td>USUARIO</td>
                    <td>ACCION</td>
                </tr>
            </thead>
            <tbody id="idea_table"></tbody>
        </table>
    </div>


    <div class="idea_form" id="idea_modal_form">
        <form id="idea_form">
            <span class="title">FORMULARIO</span>
            <div class="inputs">
                <input type="hidden" name="pedido_id">
                <input type="hidden" name="usuario_id" value="<?= $_SESSION['usuario_id'] ?>">
                <input type="hidden" name="pedido_cantidad" value="">

                <div class="row">
                    <span>FECHA: </span>
                    <input type="text" name="pedido_fecha" placeholder="FECHA">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.pedido.fun.insertOrUpdate()">GUARDAR</button>
                <button onclick="entity.fun.hideModalForm()">CANCELAR</button>
            </div>
        </form>
    </div>

    <div class="modal_pedido" id="modal_pedidos">
        <div class="window">
            <div id="modal_pedidos_window"></div>
            <button id="modal_pedidos_button_close">Cerrar</button>
        </div>
    </div>

    <div class="idea_message" id="idea_modal_message">
        <div class="message">
            <span id="idea_message"></span>
            <button onclick="entity.fun.hideModalMessage()">ACEPTAR</button>
        </div>
    </div>
    <div class="idea_confirm" id="idea_modal_confirm">
        <div class="confirm">
            <span id="idea_confirm"></span>
            <div class="buttons">
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.pedido.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/pedido.js"></script>
    <script src="control/script/modal_pedidos.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>