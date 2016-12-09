<template>
  <div class="container">

                     <h1>Carousel <small>Bootstrap Visual Test</small></h1>
                     <p>Also, the carousel shouldn't slide when its window/tab is hidden. Check the console log.</p>
                     <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                       <ol class="carousel-indicators">
                         <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                         <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                         <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
                       </ol>
                       <div class="carousel-inner">
                         <div class="carousel-item active">
                           <img alt="First slide" src="https://37.media.tumblr.com/tumblr_m8tay0JcfG1qa42jro1_1280.jpg">
                         </div>
                         <div class="carousel-item">
                           <img alt="Second slide" src="https://37.media.tumblr.com/tumblr_m8tazfiVYJ1qa42jro1_1280.jpg">
                         </div>
                         <div class="carousel-item">
                           <img alt="Third slide" src="https://38.media.tumblr.com/tumblr_m8tb2rVsD31qa42jro1_1280.jpg">
                         </div>
                       </div>
                       <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                         <span class="glyphicon glyphicon-chevron-left"></span>
                       </a>
                       <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                         <span class="glyphicon glyphicon-chevron-right"></span>
                       </a>
                     </div>

                   </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      data_from_pg: null
    }
  }
}
</script>
