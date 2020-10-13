<template>
  <div>
    <site-hero title="Team Member" image="/uploads/team-hero.jpg"></site-hero>

    <div class="template">
      <div class="member">
        <img
          src="https://prioritypixels.co.uk/wp-content/uploads/2019/09/paul-clapp-300x300.jpg"
          alt="Paul Clapp"
        />
        <h2>Paul Clapp</h2>
        <p><strong>Co-Founder & Director</strong></p>
        <p>
          Paul’s extensive background is in web design and marketing and he is
          responsible for delivering each client’s vision. Paul oversees all
          aspects of the web development cycle, from the graphic design and
          content imagery through to technical SEO and digital strategies.
        </p>
      </div>
      <div class="member">
        <img
          src="https://prioritypixels.co.uk/wp-content/uploads/2020/04/nathan-300x300.jpg"
          alt="Nathan Yendle"
        />
        <h2>Nathan Yendle</h2>
        <p><strong>Co-Founder & Director</strong></p>
        <p>
          Nathan is an accomplished digital marketeer and his vast and varied
          experience includes running successful SEO and PPC campaigns. He
          manages all the PPC campaigns we undertake and heads up all of our
          digital strategy and content marketing projects.
        </p>
      </div>
      <div class="member">
        <img
          src="https://prioritypixels.co.uk/wp-content/uploads/2020/09/team-michelle-sims-300x300.jpg"
          alt="Michelle Sims"
        />
        <h2>Michelle Sims</h2>
        <p><strong>Senior Digital Manager</strong></p>
        <p>
          Michelle is our Senior Digital Manager with over 12 years experience
          in marketing and graphic design. Liaising with clients and getting to
          know their business, she helps to develop in-depth marketing
          strategies using both online and offline techniques to increase ROI.
        </p>
      </div>
      <div class="member">
        <img
          src="https://prioritypixels.co.uk/wp-content/uploads/2020/09/team-danni-webber-300x300.jpg"
          alt="Danni Webber"
        />
        <h2>Danni Webber</h2>
        <p><strong>Web Developer</strong></p>
        <p>
          Danni is an expert web developer and PHP coder. She is obsessed with
          details and has a keen eye for design and aesthetics. Her skills help
          us to provide outstanding, future-proof sites for our customers and
          deliver their digital brand goals.
        </p>
      </div>
    </div>

    <!-- <div class="col-12">
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
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
const imageDimensionDefault = '16x9'
export default {
  head() {
    return {
      title: `TeamMember | ${this.$siteConfig.siteName}`
    }
  },
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
.empty {
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
.template {
  display: flex;
  // grid-template-columns: repeat(auto-fit, minmax(18.75rem, 0.5fr));
  // gap: calc(var(--space) * 2);
  margin: 10px;
  padding: 0;
  margin-top: 10px;
  text-align: center;
}
.member {
  position: relative;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  margin-right: 40px;
}
h2 {
  font-size: 18px;
  padding-bottom: 5px;
  text-transform: uppercase;
  color: inherit;
  text-align: center;
}
p {
  text-align: center;
}
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
</style>
