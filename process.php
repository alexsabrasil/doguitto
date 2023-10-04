<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    
    $response = ["success" => true];

    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    
    http_response_code(405); 
    echo json_encode(["error" => "Método não permitido"]);
}
?>
