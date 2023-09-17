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



//testimonial slide

document.getElementById('frr').style.opacity = '1'
document.getElementById('imgg').innerHTML = '<img src="img/teen2.jpg" alt="ttmn1">'
document.getElementById('tname').innerHTML = 'Ajuwaghan Praise'
document.getElementById('ttype').innerHTML = 'Ex-student'
document.getElementById('ttmn').innerHTML = 'I love this school! They have really carved me in to the person I am today! Kudos to [name of. School]! I owe you guys one.'

document.getElementById('oneee').onclick = function (){
    document.getElementById('frr').style.opacity = '1'
    document.getElementById('imgg').innerHTML = '<img src="img/teen2.jpg" alt="ttmn1">'
    document.getElementById('tname').innerHTML = 'Ajuwaghan Praise'
    document.getElementById('ttype').innerHTML = 'Ex-student'
    document.getElementById('ttmn').innerHTML = 'I love this school! They have really carved me in to the person I am today! Kudos to [name of. School]! I owe you guys one.'
    
    document.getElementById('scd').style.opacity = '.5'
    document.getElementById('fth').style.opacity = '.5'
    document.getElementById('trd').style.opacity = '.5'
}

document.getElementById('twooo').onclick = function (){
    document.getElementById('scd').style.opacity = '1'
    document.getElementById('imgg').innerHTML = '<img src="img/teen1.jpg" alt="ttmn1">'
    document.getElementById('tname').innerHTML = 'Dele Badmus'
    document.getElementById('ttype').innerHTML = 'Former Teacher'
    document.getElementById('ttmn').innerHTML = '[name of. School] is a place were leaders are built, and memories are made. I\m so glad that I was a part of these memories.'

    document.getElementById('frr').style.opacity = '.5'
    document.getElementById('fth').style.opacity = '.5'
    document.getElementById('trd').style.opacity = '.5'
}
document.getElementById('threee').onclick = function (){
    document.getElementById('trd').style.opacity = '1'
    document.getElementById('imgg').innerHTML = '<img src="img/teen3.jpg" alt="ttmn1">'
    document.getElementById('tname').innerHTML = 'Chris Jekulski'
    document.getElementById('ttype').innerHTML = 'Set 2020/21 Valedictorian'
    document.getElementById('ttmn').innerHTML = 'When I was in JSS3, I didn\'t really understand Mathematics until, I transferred to [name of. School]. I have been having A\'s ever since!'
    
    document.getElementById('frr').style.opacity = '.5'
    document.getElementById('scd').style.opacity = '.5'
    document.getElementById('fth').style.opacity = '.5'
}
document.getElementById('fourrr').onclick = function (){
    document.getElementById('fth').style.opacity = '1'
    document.getElementById('imgg').innerHTML = '<img src="img/teen4.jpg" alt="ttmn1">'
    document.getElementById('tname').innerHTML = 'Deborah Dale'
    document.getElementById('ttype').innerHTML = 'Present Head Girl'
    document.getElementById('ttmn').innerHTML = 'What I like best about this school is its computer lab. It\'s air-conditioned, It\'s quiet. It is everything I ever wished for!'
    
    document.getElementById('frr').style.opacity = '.5'
    document.getElementById('scd').style.opacity = '.5'
    document.getElementById('trd').style.opacity = '.5'
}
//testimonial slide ends
