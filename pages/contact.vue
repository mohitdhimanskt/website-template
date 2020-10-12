<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact Us"
      subtitle="Example Contact Page"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                What can I do for you?
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <!-- <strong>
                    Edit this page in<code>/pages/contact.vue</code>to fit your
                    needs.
                  </strong> -->
                </p>
                <p>
                  This form doesn't actually work but would be easy enough to
                  slap an action on to have it post wherever you'd like. Or put
                  the netlify attribute on it and have netlify handle all your
                  form submissions...
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
      >
    </main-section>
    <client-only>
      <div class="customMap">
        <google-map
          id="map"
          ref="Map"
          :center="defaultMapOptions.center"
          :zoom="defaultMapOptions.zoom"
          :options="defaultMapOptions"
          map-type-id="terrain"
        >
          <!-- <google-map-marker
          :key="index"
          v-for="(infowindow, index) in infoWindowsList"
          :position="infowindow.position"
          @click="toggleInfoWindow(infowindow)"
        ></google-map-marker> -->
          <google-map-infowindow
            :position="infoWIndowContext.position"
            :show.sync="showInfo"
            :options="{ maxWidth: 300 }"
            @info-window-clicked="infoClicked"
          >
            <h4>Test</h4>
            <p>test</p>
          </google-map-infowindow>
        </google-map>
      </div>
    </client-only>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm },
  data() {
    return {
      defaultMapOptions: {
        zoom: 8,
        minZoom: 3,
        center: {
          lat: 41.89193,
          lng: 12.51133
        }
      },
      showInfo: false,
      infoWIndowContext: {
        position: {
          lat: 44.2899,
          lng: 11.8774
        }
      }
      // infoWindowsList: cities
    }
  },
  methods: {
    toggleInfoWindow(context) {
      this.infoWIndowContext = context
      this.showInfo = true
    },
    infoClicked(context) {
      console.log(context)
    }
  }
}
</script>
<style>
.customMap {
  width: 900px;
  height: 500px;
}
</style>
