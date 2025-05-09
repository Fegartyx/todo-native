<?php
session_start();
require 'core/connection.php';

if (isset($_SESSION['id'])) {
  header("Location: index.php");
}

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $_SESSION['id'] = $row['id'];
    $_SESSION['username'] = $row['username'];
    header("Location: index.php");
  } else {
    $error = "Email atau password salah";
  }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <title>Belajar</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="assets/css/owl.css">
  <link rel="stylesheet" href="assets/css/animate.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <!--

TemplateMo 586 Scholar

https://templatemo.com/tm-586-scholar

-->
</head>

<body>

  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <h1>Belajar</h1>
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#courses">Courses</a></li>
              <li class="scroll-to-section"><a href="#contact">Register Now!</a></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
  <?php if (!empty($error)): ?>
    <p class="error"><?php echo htmlspecialchars($error); ?></p>
  <?php endif; ?>
  <div class="contact-us section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="contact-us-content">
            <form id="contact-form" action="" method="POST">
              <div class="row">
                <div class="col-lg-12">
                  <fieldset>
                    <input type="text" name="email" id="email" placeholder="E-mail" required="">
                  </fieldset>
                </div>
                <div class="col-lg-12">
                  <fieldset class="password-field">
                    <input type="password" name="password" id="password" placeholder="Kata Sandi" required>
                  </fieldset>
                </div>
                <button type="submit" id="form-submit" class="orange-button mb-3">Login</button> <br><br> <br>
                <a href="register.php"><button type="submit" id="form-submit" class="orange-button">Register</a></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .password-field {
      display: flex;
      align-items: center;
    }

    .eye-icon {
      justify-self: end;
    }
  </style>

  <footer>
    <div class="container">
      <div class="col-lg-12">
        <p>Copyright © 2025 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp;</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/custom.js"></script>
  <script>
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', (e) => {
      // toggle the type attribute
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);

      // toggle the eye icon
      togglePassword.classList.toggle('fa-eye-slash');
    });
  </script>

</body>

</html>