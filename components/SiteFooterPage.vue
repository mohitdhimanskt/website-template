<template>
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Single Widget -->
          <div class="single-widget">
            <h4>Other Link</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/teammember">TeamMember</a></li>
              <li><a href="/category">Category</a></li>
            </ul>
          </div>
          <!--/ End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Single Widget -->
          <div class="single-widget">
            <h4>Category</h4>
            <ul>
              <li><a href="/trek/india/walking">Walking</a></li>
              <li><a href="/trek/india/hiking">Hiking</a></li>
              <li><a href="/trek/nepal/trekking">Trekking</a></li>
              <li><a href="/trek/india/camping">Camping</a></li>
              <li><a href="/trek/india/backpacking">Backpacking</a></li>
            </ul>
          </div>
          <!--/ End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Single Widget -->
          <div class="single-widget">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="tel:9018860899">Mobile: +91 9018860899</a></li>
              <li><a href="tel:9149307205">+91 9149307205</a></li>
            </ul>
          </div>
          <!--/ End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Single Widget -->

          <div class="single-widget contact-us">
            <h4>Subscribe</h4>

            <form
              method="POST"
              action="https://www.bookmountaintours.com/subscribe"
              accept-charset="UTF-8"
              enctype="multipart/form-data"
            >
              <input
                name="_token"
                type="hidden"
                value="MGf8TGeidXuxzvD2LKmkpIBNpQAPqKw92yipmljs"
              />

              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required="required"
                />
              </div>

              <button type="submit" class="btn primary">Subscribe Now!</button>
            </form>
          </div>
        </div>
        <div class="rounded-social-buttons">
          <a
            class="social-button facebook"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            class="social-button twitter"
            href="https://www.twitter.com/"
            target="_blank"
          >
            <i class=""></i>
          </a>
          <a
            class="social-button linkedin"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <i class="fa fa-linkedin"></i>
          </a>
          <a
            class="social-button youtube"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <i class="fa fa-youtube"> </i>
          </a>
          <a
            class="social-button instagram"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--/ End Footer Top -->
</template>
<script>
export default {
  name: 'SiteFooterPage'
}
</script>
<style scoped>
.footer-top {
  padding: 90px 0 120px;
  background: rgba(33, 34, 39, 0.78) none repeat scroll 0 0;
}
.container {
  max-width: 1300px;
}
.row {
  display: flex;

  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
body,
button,
input,
select,
optgroup,
textarea {
  color: #303030;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}

.col-lg-3 {
  flex: 0 0 25%;
  max-width: 23%;
}
.single-widget {
  margin-top: 0px;
}
.single-widget h4 {
  color: #fff;
  font-size: 27px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
.single-widget h4:before {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 50px;
  height: 2px;
  background: #0072bb;
  bottom: -1px;
  content: '';
}
.single-widget ul li a {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}
.contact-us .form-group input {
  width: 100%;
  height: 52px;
  border: 1px solid #ddd;
  padding-left: 10px;
  border-radius: 5px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-weight: 400;
  border-radius: 0px;
  background: #f6fafa;
  outline: none;
}
.btn {
  margin: 17px auto;
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
body {
  background: #d0d8db;
  padding-top: 60px;
  padding-bottom: 40px;
}

textarea {
  resize: none;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
}

.svg-inline--fa {
  vertical-align: -0.2em;
}

.rounded-social-buttons {
  display: flex;
  margin-left: 500px;
  margin-bottom: -55px;
}

.rounded-social-buttons .social-button {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 3.125rem;
  height: 3.125rem;
  border: 0.125rem solid transparent;
  padding: 0;
  text-decoration: none;
  text-align: center;
  color: #fefefe;
  font-size: 1.5625rem;
  font-weight: normal;
  line-height: 2em;
  border-radius: 1.6875rem;
  transition: all 0.5s ease;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}

.rounded-social-buttons .social-button:hover,
.rounded-social-buttons .social-button:focus {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.rounded-social-buttons .fa-twitter,
.fa-facebook-f,
.fa-linkedin,
.fa-youtube,
.fa-instagram {
  font-size: 25px;
}

.rounded-social-buttons .social-button.facebook {
  background: #3b5998;
}

.rounded-social-buttons .social-button.facebook:hover,
.rounded-social-buttons .social-button.facebook:focus {
  color: #3b5998;
  background: #fefefe;
  border-color: #3b5998;
}

.rounded-social-buttons .social-button.twitter {
  background: #55acee;
}

.rounded-social-buttons .social-button.twitter:hover,
.rounded-social-buttons .social-button.twitter:focus {
  color: #55acee;
  background: #fefefe;
  border-color: #55acee;
}

.rounded-social-buttons .social-button.linkedin {
  background: #007bb5;
}

.rounded-social-buttons .social-button.linkedin:hover,
.rounded-social-buttons .social-button.linkedin:focus {
  color: #007bb5;
  background: #fefefe;
  border-color: #007bb5;
}

.rounded-social-buttons .social-button.youtube {
  background: #bb0000;
}

.rounded-social-buttons .social-button.youtube:hover,
.rounded-social-buttons .social-button.youtube:focus {
  color: #bb0000;
  background: #fefefe;
  border-color: #bb0000;
}

.rounded-social-buttons .social-button.instagram {
  background: #125688;
}

.rounded-social-buttons .social-button.instagram:hover,
.rounded-social-buttons .social-button.instagram:focus {
  color: #125688;
  background: #fefefe;
  border-color: #125688;
}
</style>
