<!DOCTYPE html>
<html>
  <head>
    <title>React WP</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1><?php the_title(); ?></h1>
    <?php echo 'TEST' ?>
    <div id="app"></div>


    <script src="<?php echo get_template_directory_uri(); ?>/bundle.js"></script>
  </body>
</html>