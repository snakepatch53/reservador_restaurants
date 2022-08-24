<?php
if (isset($viewPage)) {
?>
    <div class="header">
        <span>EMPRESA</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick=""></button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>NOMBRE</td>
                    <td>UBICACION</td>
                    <td>HORARIO</td>
                    <td>TELEFONO</td>
                    <td>EMAIL</td>
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
                <input type="hidden" name="empresa_id">

                <div class="row">
                    <span>EMPRESA_NOMBRE: </span>
                    <input type="text" name="empresa_nombre" placeholder="EMPRESA_NOMBRE">
                </div>

                <div class="row">
                    <span>EMPRESA_UBICACION: </span>
                    <input type="text" name="empresa_ubicacion" placeholder="EMPRESA_UBICACION">
                </div>

                <div class="row">
                    <span>EMPRESA_HORARIO_ATENCION: </span>
                    <input type="text" name="empresa_horario_atencion" placeholder="EMPRESA_HORARIO_ATENCION">
                </div>

                <div class="row">
                    <span>EMPRESA_TELEFONO: </span>
                    <input type="text" name="empresa_telefono" placeholder="EMPRESA_TELEFONO">
                </div>

                <div class="row">
                    <span>EMPRESA_EMAIL: </span>
                    <input type="text" name="empresa_email" placeholder="EMPRESA_EMAIL">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.empresa.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.empresa.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/empresa.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>