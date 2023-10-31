<template>


<head>
  <title>Resume Template</title>
</head>

<body>
  <div class="container">
    <div class="header">
      <div>
        <h1>John Doe</h1>
        <p>UI/UX Designer</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
    
    <div class="section">
      <h2 class="section-title">Summary</h2>
      <p class="section-content">A passionate and creative UI/UX designer with a strong foundation in web design and front-end development. Skilled in wireframing, prototyping, and creating visually appealing user interfaces. Looking to contribute and grow in a dynamic team environment.</p>
    </div>

    <div class="section">
      <h2 class="section-title">Education</h2>
      <div class="section-content">
        <p><strong>Bachelor of Science in Interaction Design</strong></p>
        <p>XYZUniversity, City, Country</p>
        <p>Graduation Year: 2022</p>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Skills</h2>
      <div class="section-content">
        <ul>
          <li>User Interface Design</li>
          <li>User Experience Design</li>
          <li>Wireframing and Prototyping</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Adobe Creative Suite</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Projects</h2>
      <div class="section-content">
        <p><strong>Project 1: Website Redesign</strong></p>
        <p>Redesigned the website of a local business to enhance user experience and improve conversions. Conducted user research, created wireframes, and collaborated with the development team to implement the design.</p>

        <p><strong>Project 2: Mobile App Design</strong></p>
        <p>Designed the user interface for a mobile app targeting fitness enthusiasts. Created high-fidelity prototypes and performed user testing to refine the design.</p>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Contact Information</h2>
      <div class="section-content contact-info">
        <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Portfolio: <a href="http://www.johndoeportfolio.com" target="_blank">www.johndoeportfolio.com</a></p>
        <p>LinkedIn: <a href="http://www.linkedin.com/in/johndoe" target="_blank">www.linkedin.com/in/johndoe</a></p>
      </div>
    </div>
  </div>
</body>






    
</template>


<style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 20px;
    }

    .container {
      background-color: #fff;
      border-radius: 5px;
      padding: 40px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      max-width: 700px;
      margin: 0 auto;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .header h1 {
      font-size: 36px;
      color: #333;
      margin: 0;
    }

    .header p {
      font-size: 18px;
      color: #777;
      margin: 0;
    }

    .section {
      margin-bottom: 30px;
    }

    .section:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 18px;
      color: #333;
    }

    .section-content {
      margin-left: 30px;
      color: #555;
    }

    .contact-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-top: 30px;
    }

    .contact-info p {
      margin-right: 20px;
      font-size: 16px;
      color: #555;
    }

    .contact-info a {
      color: #555;
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 16px;
    }

    .contact-info a:hover {
      color: #333;
    }

    @media only screen and (max-width: 480px) {
      .container {
        padding: 20px;
      }

      .header {
        flex-direction: column;
        align-items: flex-start;
      }

      .header h1 {
        font-size: 24px;
      }

      .header p {
        font-size: 16px;
      }

      .section-title {
        font-size: 20px;
      }
    }
  </style>