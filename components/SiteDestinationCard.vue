<template>
  <div class="service">
    <div class="destinationCard">
      <div class="text">
        <div class="text1">
          <component :is="link ? 'nuxt-link' : 'span'" :to="link">
            <figure :class="`image is-${imageRatioClass}`">
              <opti-image
                v-if="image"
                :src="responsiveImage.src"
                :srcset="responsiveImage.srcSet"
                :width="imageRatio[0]"
                :height="imageRatio[1]"
                :sizes="
                  `(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`
                "
              />
              <loading-spinner position="absolute" />
            </figure>
          </component>

          <div class="text2">
            <div class="media">
              <div class="media-content">
                <nuxt-link :to="link">
                  <h3
                    :class="
                      `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
                    "
                  >
                    {{ title }}
                  </h3>
                  <h4
                    :class="{
                      subtitle: true,
                      'is-6': true,
                      'empty-content-placeholder': !$slots.default
                    }"
                  >
                    <slot></slot>
                  </h4>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '16x9'
export default {
  name: 'SiteDestinationCard',
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault }
  },
  computed: {
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  }
}
</script>
<style scoped>
.service {
  display: inline-flex;
  margin-left: 271px;
  margin-right: -163px;
}
.destinationCard {
  display: flex;
  flex-wrap: wrap;
}
.text {
  border: solid 1px #f2f2f2;
  margin: 5px;
}
.text1 {
  height: 206px;
  width: 300px;
  object-fit: cover;
}
.title.is-5 {
  text-align: center;
}
</style>
