<?php
if (isset($viewPage)) {
?>
    <div class="header">
        <span>USUARIO</span>
        <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
        <button onclick="entity.fun.showModalForm(null)">+</button>
    </div>

    <div class="idea_content_table">
        <table class="idea_table">
            <thead>
                <tr>
                    <td>NOMBRES</td>
                    <td>APELLIDOS</td>
                    <td>CEDULA</td>
                    <td>TELEFONO</td>
                    <td>EMAIL</td>
                    <td>GENERO</td>
                    <td>NACIMIENTO</td>
                    <td>PASS</td>
                    <td>AUTORIZE</td>
                    <td>ADMIN</td>
                    <td>FOTO</td>

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
                <input type="hidden" name="usuario_id">

                <div class="row">
                    <span>NOMBRES: </span>
                    <input type="text" name="usuario_nombres" placeholder="NOMBRES">
                </div>

                <div class="row">
                    <span>APELLIDOS: </span>
                    <input type="text" name="usuario_apellidos" placeholder="APELLIDOS">
                </div>

                <div class="row">
                    <span>CEDULA: </span>
                    <input type="text" name="usuario_cedula" placeholder="CEDULA">
                </div>

                <div class="row">
                    <span>TELEFONO: </span>
                    <input type="text" name="usuario_telefono" placeholder="TELEFONO">
                </div>

                <div class="row">
                    <span>EMAIL: </span>
                    <input type="text" name="usuario_email" placeholder="EMAIL">
                </div>

                <div class="row">
                    <span>GENERO: </span>
                    <select name="usuario_genero" id="">
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>

                </div>

                <div class="row">
                    <span>FECHA NACIMIENTO: </span>
                    <input type="date" name="usuario_nacimiento">
                </div>

                <div class="row">
                    <span>USER: </span>
                    <input type="text" name="usuario_user" placeholder="USER">
                </div>

                <div class="row">
                    <span>PASS: </span>
                    <input type="text" name="usuario_pass" placeholder="PASS">
                </div>

                <div class="row">
                    <span>AUTORIZE: </span>
                    <select name="usuario_autorize" id="">
                        <option value="">Seleccionar</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>

                </div>

                <div class="row">
                    <span>ADMIN: </span>
                    <select name="usuario_admin" id="">
                        <option value="">Seleccionar</option>
                        <option value="1">SI</option>
                        <option value="0">NO</option>
                    </select>

                </div>

                <div class="row">
                    <span>FOTO: </span>
                    <input type="file" name="usuario_foto" placeholder="FOTO">
                </div>

            </div>
            <div class="buttons">
                <button onclick="entity.usuario.fun.insertOrUpdate()">GUARDAR</button>
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
                <button onclick="entity.fun.pressYesModalConfirm(() => entity.usuario.crud.delete())">SI</button>
                <button onclick="entity.fun.hideModalConfirm()">NO</button>
            </div>
        </div>
    </div>
    <script src="control/script/usuario.js"></script>
<?php
} else {
    header("location: ../../panel.php");
}
?>