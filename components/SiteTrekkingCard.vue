<template>
  <div>
    <div class="col-12">
      <div class="section">
        <component :is="link ? 'nuxt-link' : 'span'" :to="link">
          <figure :class="`image is-${imageRatioClass}`">
            <opti-image
              v-if="image"
              :src="responsiveImage.src"
              :srcset="responsiveImage.srcSet"
              :width="imageRatio[0]"
              :height="imageRatio[1]"
              :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
            />
            <loading-spinner position="absolute" />
          </figure>
        </component>

        <div class="template">
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
              <a class="btn primary" href="">View More</a>
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
  name: 'SiteTrekkingCard',
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
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.col-12 {
  display: flex;
  // grid-template-columns: repeat(auto-fit, minmax(18.75rem, 0.5fr));
  // gap: calc(var(--space) * 2);
  margin: 10px;
  padding: 0;
  margin-top: 10px;
}
.section {
  position: relative;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
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
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
