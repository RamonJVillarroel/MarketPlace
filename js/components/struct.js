
//Navabar 
const header = document.getElementById('header');
header.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <p class="navbar-brand">Navbar</p>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</div>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
 <div class="navbar-nav">
 <div class="me-auto p-2 bd-highlight">      
  <a class="nav-link active" aria-current="page" href="/">Home</a>
  </div>
  <div class="p-2 bd-highlight">
  <a class="nav-link active" href="#">Categorias</a>
  </div>
  <div class="p-2 bd-highlight">
  <a class="nav-link active" id="vendedores">vendedores</a>
  </div>
 </div>
</div>
</nav>`;
//carrusel general para la pagina principal
const body = document.getElementById('body');
body.innerHTML=`
   <div class="m-2">
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-indicators ">
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1900/hellofresh_s3/image/HF_Y24_R17_W20_ES_ESC0174-3_Main__3high-209b9075.jpg" class="d-block w-100" alt="...">
   </div>
   <div class="carousel-item">
     <img src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1900/hellofresh_s3/image/HF_Y24_R17_W20_ES_ESC0174-3_Main__3high-209b9075.jpg" class="d-block w-100" alt="...">
   </div>
   <div class="carousel-item">
     <img src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1900/hellofresh_s3/image/HF_Y24_R17_W20_ES_ESC0174-3_Main__3high-209b9075.jpg" class="d-block w-100" alt="...">
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
 </div>
   </div>
`;
//Card para categorias
const categorias= document.getElementById("categorias");
categorias.innerHTML=`
<h1 class="m-2 text-center">Categorias</h1>
<div class="card-group d-flex justify-content-center">
  <span class="border border-success m-3"> 
    <a href="/quesos" >
    <div class="card-body d-flex justify-content-center">
 <img width="50" height="50" class="" src="https://img.icons8.com/ios/50/cheese.png" alt="cheese"/>
  </div>
  <p class="text-center">quesos</p>
  </a>
</span>

<span class="border border-success m-3"> 
<a href="/quesos" >
  <div class="card-body d-flex justify-content-center">
 <img width="50" height="50" class="" src="https://img.icons8.com/ios/50/cheese.png" alt="cheese"/>
  </div>
  <p class="text-center">quesos</p>
  </a>
</span>
<span class="border border-success m-3"> 
<a href="/quesos" >
  <div class="card-body d-flex justify-content-center">
 <img width="50" height="50" class="" src="https://img.icons8.com/ios/50/cheese.png" alt="cheese"/>
  </div>
  <p class="text-center">quesos</p>
  </a>
</span>
</div>
`;
// Card para los vendedores
const card = document.getElementById("card")
card.innerHTML=`
<h1 class="m-2 text-center"> Vendedores</h1>
<div class="container-fluid">
<div class="card mb-3 mt-3 border-success " style="max-width: 100%;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlI2C8DG0h08kawIMmVH3uGc1FL7PdWBVebB18gtRwQ&s" class="img-fluid rounded-start" alt="imagenes de productos por vendedores">
  </div>
  <div class="col-md-8">
    <div class="card-body ">
      <h5 class="card-title text-center">Card title</h5>
      <p class="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="container-fluid d-flex justify-content-center">
      <a href="#"><img width="30" height="30" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/></a>
      <a href="#"><img width="30" height="30" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
      <a href="#"><img width="30" height="30" src="https://img.icons8.com/ios/50/internet--v1.png" alt="internet--v1"/></a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
`;


const footer = document.getElementById('footer')
footer.innerHTML= `
<div><h3 class="text-center">testfooter<h3></div>

`