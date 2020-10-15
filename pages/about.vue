<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About Us" image="/uploads/about-hero.jpg"></site-hero>
    <main-section theme="sidebar">
      <template v-slot:default>
        <div class="content">
          <h3>Trekking</h3>
          <p>
            Trekking is an outdoor activity of walking for more than a day.It is
            a form of walking, undertaken with the specific purpose of exploring
            and enjoying the scenery. Trekking could be a motive, It could be a
            commitment, an aim, an objective, a mission, a party.
          </p>

          <h3>Importance of Trekking</h3>
          <p>
            Everest base camp trekking Company basically provides two types
            trekking which are Teahouse Trekking, Camping Trekking, and Hiring
            guide and porters. Teahouse is the local lodge where you can eat and
            sleep during your trek. If you are going for a teahouse trek, you
            will have to stay in this type of accommodations. Whereas, Camping
            trek is a fully Organised Supported Trek.
          </p>
          <quote-card />
          <h3>Types of Trekking</h3>
          <p>
            Everest base camp trekking Company basically provides two types
            trekking which are Teahouse Trekking, Camping Trekking, and Hiring
            guide and porters. Teahouse is the local lodge where you can eat and
            sleep during your trek. If you are going for a teahouse trek, you
            will have to stay in this type of accommodations. Whereas, Camping
            trek is a fully Organised Supported Trek.
          </p>
        </div>

        <div class="tile is-ancestor">
          <!-- <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div> -->
          <!-- <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div> -->
          <!-- <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div> -->
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
<style scoped>
.section {
  margin-left: 45px;
}
.content {
  margin-left: 300px;
}
</style>
