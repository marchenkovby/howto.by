<?php

// Open Graph
$og_site_name = "howto.by";
$og_type = "website";

// Breadcrumbs
$breadcrumbs = true;

// Comments
$comments = true;

// Scripts
$scripts = false;

// Development
$development = true;

// Get width
function get_width_image($url) {
    list($width, $height) = getimagesize($url);
    return $width;
}

// Get width
function get_height_image($url) {
    list($width, $height) = getimagesize($url);
    return $height;
}

?>
