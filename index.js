/*

<div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators" col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/teen1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/teen2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/teen3.jpg" class="d-block w-100" alt="...">
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

*/

document.getElementById('van').style.display = 'none'
document.getElementById('pdown').onclick = function (){
  document.getElementById('van').style.display = 'block'
  document.getElementById('pdown').style.display = 'none'
  document.getElementById('hadto').innerHTML = 'See less?'
  document.getElementById('hadto').style.animation = 'none'
  document.getElementById('hadto').style.marginLeft = '90%'
}
document.getElementById('hadto').onclick = function (){
  document.getElementById('van').style.display = 'none'
  document.getElementById('pdown').style.display = 'block'
  document.getElementById('hadto').innerHTML = 'click the arrow to see more'
  document.getElementById('hadto').style.animation = 'bling'
  document.getElementById('hadto').style.marginLeft = '80%'
}