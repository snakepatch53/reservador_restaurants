                            
<?php
/*
_____________________________________________________________________________________________
- CREA UN ARCHIVO CON EL NOMBRE Y EXTENSION INDICADA.
- RUTA: proyect/view/page/pedido_producto.php
*/
if (isset($viewPage)) {
?>
<div class="header">
<span>PEDIDO_PRODUCTO</span>
<input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
<button onclick="entity.fun.showModalForm(null)">+</button>
</div>

<div class="idea_content_table">
<table class="idea_table">
<thead>
<tr>
<td>PEDIDO_PRODUCTO_ID</td>
            <td>PEDIDO_PRODUCTO_CANTIDAD</td>
<td>PEDIDO_PRODUCTO_PRECIO</td>
<td>PEDIDO_ID</td>
<td>PRODUCTO_ID</td>
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
<input type="hidden" name="pedido_producto_id">
            
<div class="row">
<span>PEDIDO_PRODUCTO_CANTIDAD: </span>
<input type="number" name="pedido_producto_cantidad" placeholder="PEDIDO_PRODUCTO_CANTIDAD">
</div>

<div class="row">
<span>PEDIDO_PRODUCTO_PRECIO: </span>
<input type="number" name="pedido_producto_precio" placeholder="PEDIDO_PRODUCTO_PRECIO">
</div>

<div class="row">
<span>PEDIDO_ID: </span>
<select name="pedido_id"></select>
</div>
                    
<div class="row">
<span>PRODUCTO_ID: </span>
<select name="producto_id"></select>
</div>
                    
</div>
<div class="buttons">
<button onclick="entity.pedido_producto.fun.insertOrUpdate()">GUARDAR</button>
<button onclick="entity.fun.hideModalForm()">CANCELAR</button>
</div>
</form>
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
<button onclick="entity.fun.pressYesModalConfirm(() => entity.pedido_producto.crud.delete())">SI</button>
<button onclick="entity.fun.hideModalConfirm()">NO</button>
</div>
</div>
</div>
<script src="control/script/pedido_producto.js"></script>
<?php
} else {
header("location: ../../panel.php");
}
?>
            
                        