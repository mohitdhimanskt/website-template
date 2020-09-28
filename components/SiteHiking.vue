<template>
  <div>
    <div class="site-hiking">
      <h2 class="head-stl">
        <span>Hiking Trips</span>
      </h2>
      <p class="text">
        Hike through some of the enthralling trails in Nepal and Northern India,
        amid luscious forests and spectacular sceneries all around. Spellbind
        your heart and soul with our tailor made book hiking tour programs
      </p>
    </div>
    <div class="col-12">
      <div class="section">
        <img
          src="https://himachaltourism.gov.in/wp-content/uploads/2018/01/Trekkers-in-Spiti-valley-min.jpg"
          alt="#"
        />

        <div class="template">
          <div class="left">
            <nuxt-link class="navbar-item" to="home-page">
              <h3>5 Days Triund Hiking Tour Himachal Pradesh</h3>
            </nuxt-link>
          </div>
          <a class="btn primary" href="">View More</a>
        </div>
      </div>
      <div class="section">
        <img
          src="https://www.himachaltouristplaces.com/wp-content/uploads/2019/05/trekking-in-himachal-pradesh.jpg"
          alt="#"
        />

        <div class="template">
          <div class="left">
            <nuxt-link class="navbar-item" to="home-page">
              <h3>3 Days Pravati Hiking Tour Himachal Pradesh</h3>
            </nuxt-link>
          </div>
          <a class="btn primary" href="">View More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SiteHiking'
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
  color: #000;
  font-size: 10px;
  margin: 15px 0;
  font-size: 23px;
}
.col-12 {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 15px;
  margin-left: 250px;
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
