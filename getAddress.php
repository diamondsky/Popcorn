<?php
//Kiana Slimak 04.02.18 

  $streetAddress = array("Bennet" => "567 Mulberry ln.",
                         "Randy" => "984 Strawberry Cir.",
                         "Chris" => "736 Orange Ave.",
                         "Andrew" => "945 Sapote Ct.",
                         "Kiana" => "234 Watermelon ST.",
                     );
  header("Content-Type: text/plain");
  $name = $_GET["name"];
  if (array_key_exists($name, $streetAddress))
    print $streetAddress[$name];
  else
    print "error";
?>