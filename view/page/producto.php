                            <?php

                            if (isset($viewPage)) {
                            ?>
                                <div class="header">
                                    <span>PRODUCTO</span>
                                    <input type="search" placeholder="Buscar registros.." class="idea_search" id="idea_search">
                                    <button onclick="entity.fun.showModalForm(null)">+</button>
                                </div>

                                <div class="idea_content_table">
                                    <table class="idea_table">
                                        <thead>
                                            <tr>
                                                <td>PRODUCTO ID</td>
                                                <td>NOMBRE</td>
                                                <td>PRECIO</td>
                                                <td>DESCRIPCION</td>
                                                <td>IMG</td>

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
                                            <input type="hidden" name="producto_id">

                                            <div class="row">
                                                <span>NOMBRE: </span>
                                                <input type="text" name="producto_nombre" placeholder="NOMBRE">
                                            </div>

                                            <div class="row">
                                                <span>PRECIO: </span>
                                                <input type="number" name="producto_precio" placeholder="PRECIO">
                                            </div>

                                            <div class="row">
                                                <span>DESCRIPCION: </span>
                                                <input type="text" name="producto_descripcion" placeholder="DESCRIPCION">
                                            </div>

                                            <div class="row">
                                                <span>IMG: </span>
                                                <input type="file" name="producto_img" placeholder="IMG">
                                            </div>

                                        </div>
                                        <div class="buttons">
                                            <button onclick="entity.producto.fun.insertOrUpdate()">GUARDAR</button>
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
                                            <button onclick="entity.fun.pressYesModalConfirm(() => entity.producto.crud.delete())">SI</button>
                                            <button onclick="entity.fun.hideModalConfirm()">NO</button>
                                        </div>
                                    </div>
                                </div>
                                <script src="control/script/producto.js"></script>
                            <?php
                            } else {
                                header("location: ../../panel.php");
                            }
                            ?>