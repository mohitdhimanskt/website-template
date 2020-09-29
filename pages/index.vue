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
      title="5 days of tour in himachal"
      image="/uploads/himalayas.jpeg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="3 Days of tour in himachal pradesh"
      image="/uploads/mountain-bikking-hero.jpg"
    ></SiteFeaturedCard>
    <SiteFeaturedCard
      title="12 Days OF tour in himachal pradesh"
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
    <SiteTrekking></SiteTrekking>
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
