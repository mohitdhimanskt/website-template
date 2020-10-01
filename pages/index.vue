<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
        class="button is-primary"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
    <SiteFeaturedTemplate></SiteFeaturedTemplate>
    <SiteFeaturedCard
      title="5 days of tour in himachal pradesh"
      image="/uploads/himalayas.jpeg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="3 Days of tour in himachal pradesh"
      image="/uploads/mountain-bikking-hero.jpg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="12 Days Of tour in himachal pradesh"
      image="/uploads/trek2.jpg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="16 Days of tour in himachal pradesh"
      image="/uploads/walk.jpg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="18 Days of tour in himachal pradesh"
      image="/uploads/jeepsafari-hero.jpg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="20 Days Of tour in himachal pradesh"
      image="/uploads/trip.jpg"
    ></SiteFeaturedCard>
    <SiteWalking></SiteWalking>
    <SiteHiking></SiteHiking>
    <SiteHikingCard
      title="5 Days Triund Hiking Tour Himachal Pradesh"
      image="https://himachaltourism.gov.in/wp-content/uploads/2018/01/Trekkers-in-Spiti-valley-min.jpg"
    ></SiteHikingCard>
    <SiteHikingCard
      title="3 Days Pravati Hiking Tour Himachal Pradesh"
      image="https://i1.wp.com/www.inditrip.in/wp-content/uploads/2018/06/5509798756_c2e02970cb_z.jpg?fit=600%2C300&ssl=1"
    ></SiteHikingCard>
    <SiteTrekking></SiteTrekking>
    <SiteTrekkingCard
      title="6 Days Manali Trekking Tour Himachal Pradesh"
      image="https://renokadventures.com/wp-content/uploads/2016/09/28464279894_7b42c0574c_z-1.jpg"
    ></SiteTrekkingCard>
    <SiteTrekkingCard
      title="3 Days Dharamshala Trekking Tour Himachal Pradesh"
      image="https://www.nativeplanet.com/img/2017/04/pic5-05-1491387866.jpg"
    ></SiteTrekkingCard>
    <SiteTrekkingCard
      title="10 Days Kasol Trekking Tour Himachal Pradesh"
      image="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover-for-10-Treks-Near-Kasol.jpg"
    ></SiteTrekkingCard>
    <SiteTrekkingCard
      title="8 Days Bir Trekking Tour Himachal Pradesh"
      image="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1580145945%2Fdk4v76za7xz8uap92ney.jpg"
    ></SiteTrekkingCard>
    <SiteTrekkingCard
      title="12 Days Tosh Trekking Tour Himachal Pradesh"
      image="https://images.thrillophilia.com/image/upload/s--f5G2TFKw--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/110/565/original/1492157230_Tosh_glacier.jpg.jpg?1492157230"
    ></SiteTrekkingCard>
    <SiteTrekkingCard
      title="5 Days Khir Ganga Trekking Tour Himachal Pradesh"
      image="https://www.trawell.in/admin/images/upload/454282746Kullu_Kheer_Ganga_Main.jpg"
    ></SiteTrekkingCard>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
