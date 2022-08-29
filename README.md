# reservador_restaurants

CREATE FILE "config.php"

Write

``` php
<?php
$proyect = array(
    "name" => "{If it is in a hosting, leave it empty, but if it is in localhost, write the name of the folder inside www}",
    "url" => "Your domain",
    "lang" => "es"
)
?>

<script>
    const $proyect = JSON.parse('<?= json_encode($proyect) ?>');
</script>
```
