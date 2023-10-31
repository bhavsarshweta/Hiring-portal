<template>
    <div>
        <body>
  <div class="container p-0 m-0 border border-black print:grid print:grid-cols-3">
    <div class="header ">
      <div>
        <h1>John Doe</h1>
        <p>UI/UX Designer</p>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile Picture" class="py-2" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
    <div class="divider1"></div>
   
    
    <div class="left-section p-2 bg-blue-600">
      <div class="section mt-4">
        <h2 class="section-title">Contact Details</h2>
        <div class="section-content contact-info">
          <p>Email: john@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
      <hr>
     
      <div class="section mt-4">
        <h2 class="section-title">Skills</h2>
        <div class="section-content skills">
          <ul>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div><hr>

      <div class="section mt-4">
        <h2 class="section-title">Languages</h2>
        <div class="section-content languages">
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
        </div>
      </div><hr>

      <div class="section mt-4">
        <h2 class="section-title">Social Media</h2>
        <div class="section-content social-media">
          <ul>
            <li><a href="https://linkedin.com/johndoe">LinkedIn</a></li>
            <li><a href="https://twitter.com/johndoe">Twitter</a></li>
            <li><a href="https://github.com/johndoe">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="right-section">
      <div class="section experience mt-4 px-4">
        <h2 class="section-title" style="font-size: 18px;">Experience</h2>
        <div class="section-content">
          <div class="experience-item">
            <h3 class="font-semibold">UI/UX Designer</h3>
            <p>ABC Company</p>
            <p>January 2020 - Present</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, enim corporis explicabo tempore odio neque fugit, saepe ducimus cumque adipisci voluptates impedit hic quisquam error, quos consectetur excepturi. Facilis, quod.
            </p>
          </div>
          <div class="experience-item">
            <h3 class="font-semibold">Web Designer</h3>
            <p>XYZ Agency</p>
            <p>June 2018 - December 2019</p>
            <p>Ut cursus lectus id felis dignissim hendrerit.</p>
          </div>
        </div>
      </div>

      <div class="section education px-4">
        <h2 class="section-title " style="font-size: 18px;">Education</h2>
        <div class="section-content">
          <div class="education-item">
            <h3 class="font-semibold">Bachelor of Science in Interaction Design</h3>
            <p>University of ABC</p>
            <p>2014 - 2018 </p>          
            <h3>Bachelor of Science in Interaction Design</h3>
            <p>University of ABC</p>
            <p>2014 - 2018</p>
          </div>
          <div class="education-item">
            <h3 class="font-semibold">High School Diploma</h3>
            <p>XYZ High School</p>
            <p>2010 - 2014</p>
          </div>
        </div>
      </div> 
    </div>
  </div>
</body>


    </div>
</template>

<script>
  
definePageMeta({
  layout: false
});
</script>


 <style>
   

    body {
      font-family:'Times New Roman', Times, serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 20px;
    }

    .container {
      background-color: #fff;
      border-radius: 5px;
    
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1/2fr 1fr;
      /* grid-gap: 5px; */
    }

    .header {
      grid-column: 1 / span 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* margin-bottom: 20px; */
      padding-left: 40px;
      padding-right: 40px;
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

    .section-title {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 18px;
      color:white;
    }

    

    .left-section {
      grid-column:1;
      /* border-right: 2px solid blue; */
      width: 300px;
      padding-left:40px;
      /* margin-top:10px; */
      
    }

    .right-section {
    grid-column: 2;
    margin-top:10px ;
    /* border-left: 2px solid blue; */
    padding-left: 0px;
    }

    .contact-info {
      margin-bottom: 20px;
    }

    .contact-info p {
      margin-bottom: 5px;
      font-size: 16px;
      color: white;
    }
   

    .skills {
      margin-bottom: 20px;
    }

    .skills ul {
      list-style:disc;
      margin: 10px;
      padding: 0;
      
    }

    .skills li {
      margin-bottom: 5px;
      font-size: 16px;
      color:white
    }

    .languages {
      margin-bottom: 20px;
    }

    .languages ul {
      list-style:disc;
      margin: 10px;
      padding: 0;
    }

    .languages li {
      margin-bottom: 5px;
      font-size: 16px;
      color:white;
    }

    .social-media {
      margin-bottom: 20px;
      color: white;
    }

    .social-media ul {
      list-style:disc;
      margin: 10px;
      padding: 0;
    }

    .social-media li {
      margin-bottom: 5px;
      font-size: 16px;
      color:white;
    }

    .experience {
      margin-bottom: 30px;
    }

    .experience h2 {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 24px;
      color: #333;
    }

    .experience-item {
      margin-bottom: 10px;
      color: #555;
    }

    .education {
      margin-bottom: 30px;
    }

    .education h2 {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 24px;
      color: #333;
    }

    .education-item {
      margin-bottom: 10px;
      color: #555;
    }

    .divider1 {
      grid-column: 1 / span 2;
      border-top: 2px solid rgb(53, 53, 175);
      /* margin-top: 30px; */
    }


    @media print {
  .print\:grid {
    display: grid;
  }

  .print\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .print\:skills li{
    color: white;
  }
  .contact-info p,
  .skills li,
    .languages li,
    .social-media li ,.section-title
    {
      color: black;
    }
}
    
</style>