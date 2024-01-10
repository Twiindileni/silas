<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "your-email@example.com"; // Replace with your email address
  $subject = "New Form Submission";

  $fullName = $_POST["fullName"];
  $email = $_POST["email"];
  $address = $_POST["address"];
  $contactNumber = $_POST["contactNumber"];

  $message = "Full Name: $fullName\n";
  $message .= "Email: $email\n";
  $message .= "Address: $address\n";
  $message .= "Contact Number: $contactNumber\n";

  // Additional headers
  $headers = "From: $email";

  // Send email
  mail($to, $subject, $message, $headers);
}
?>
