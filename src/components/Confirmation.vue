<template>
	<div row>
    <div class="card col-xs-5">
      <div id="carousel-example-generic" class="carousel slide product-img" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <!-- <img src="../../assets/devices/TV.png" alt="First slide"> -->
            <img src="http://2.bp.blogspot.com/-pATX0YgNSFs/VP-82AQKcuI/AAAAAAAALSU/Vet9e7Qsjjw/s1600/Cat-hd-wallpapers.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <!-- <img src="../../assets/devices/WashingMachine.png" alt="Second slide"> -->
            <img src="http://newsyac.com/wp-content/uploads/2016/01/worried-cat.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img src="http://2.bp.blogspot.com/-pATX0YgNSFs/VP-82AQKcuI/AAAAAAAALSU/Vet9e7Qsjjw/s1600/Cat-hd-wallpapers.jpg" alt="Third slide">
          </div>
        </div>
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="icon-prev" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="icon-next" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
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
