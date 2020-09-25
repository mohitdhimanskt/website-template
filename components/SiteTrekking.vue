<template>
  <div>
    <div class="site-trekking">
      <h2 class="head-stl">
        <span> Trekking</span>
      </h2>
      <p class="text">
        Trek through glacial valleys, high mountain passes and pristine valleys
        with an experienced team of friendly and knowledgeable guides and
        porters. Whether you are an avid trekker or just starting out, our range
        of trekking trip programs will accommodate your every need
      </p>
      <div class="col-12">
        <div class="section">
          <img
            src="https://renokadventures.com/wp-content/uploads/2016/09/28464279894_7b42c0574c_z-1.jpg"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>6 Days Manali Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
        <div class="section">
          <img
            src="https://www.nativeplanet.com/img/2017/04/pic5-05-1491387866.jpg"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>3 Days Dharamshala Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
        <div class="section">
          <img
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover-for-10-Treks-Near-Kasol.jpg"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>10 Days Kasol Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
        <div class="section">
          <img
            src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1580145945%2Fdk4v76za7xz8uap92ney.jpg"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>8 Days Bir Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
        <div class="section">
          <img
            src="https://images.thrillophilia.com/image/upload/s--f5G2TFKw--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/110/565/original/1492157230_Tosh_glacier.jpg.jpg?1492157230"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>12 Days Tosh Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
        <div class="section">
          <img
            src="https://www.trawell.in/admin/images/upload/454282746Kullu_Kheer_Ganga_Main.jpg"
            alt="#"
          />

          <div class="template">
            <div class="left">
              <nuxt-link class="navbar-item" to="home-page">
                <h3>5 Days Khir Ganga Trekking Tour Himachal Pradesh</h3>
              </nuxt-link>
            </div>
            <a class="btn primary" href="">View More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SiteTrekking'
}
</script>
<style scoped>
h2 span {
  display: block;
  color: black;
  text-align: center;
  font-size: 30px;
}
.title-line h2 span {
  font-weight: 300;
}
.head-stl {
  font-weight: 700 !important;
  font-size: 34px !important;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  color: black;
  font-size: 10px;
  margin: 15px 0;
  font-size: 23px;
}
.col-12 {
  display: grid;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin: 0 10px;
  width: calc(25% - 20px);
  min-height: 250px;
}
.section {
  position: relative;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  margin-top: 30px;
  margin-right: 40px;
}
h3 {
  font-size: 18px;
  padding-bottom: 5px;
  text-transform: uppercase;
  color: inherit;
}
.btn {
  margin: 0 auto;
}
.btn {
  color: #fff;
  padding: 13px 25px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  background: #0072bb;
  border-radius: 3px;
  position: relative;
  box-shadow: none;
  display: inline-block;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  border: none;
}
.a {
  color: #fff;
  border: 1px solid transparent;
}
</style>
