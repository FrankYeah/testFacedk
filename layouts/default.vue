<template>
  <div class="default">
    <topBar v-if="isShowTopSide" />
    <sideBar v-if="isShowTopSide" />
    <div :class="[{'default-box': isShowTopSide}]">
      <div :class="[{'default-inner': isShowTopSide}]">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    topBar: require('~/components/top-bar.vue').default,
    sideBar: require('~/components/side-bar.vue').default, 
  },
  props: {

  },
  data () {
    return {
      isShowTopSide: true
    }
  },
  mounted () {

  },
  computed: {
    
  },
  methods: {

  },
  watch: {
    '$route.name': {
      handler: function(route) {
        this.isShowTopSide = route == 'login' ?  false : true
      },
      deep: true,
      immediate: true
    },
  }
}
</script>

<style lang="scss">

.default {
  background-color: #F2F3F7;
  
  &-box {
    padding: 95px 0px 0px 180px;
  }

  &-inner {
    position: relative;
    width: calc(100% - 20px);
    padding: 20px 0px 0px 10px;
  }
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
	line-height: 1;
  margin: 0px;
  padding: 0px;
  // font-family: 'Noto Sans TC', 'Noto Sans SC' ,sans-serif;
  font-size: 16px;
  color: rgb(14, 23, 38);
  font-family: 'SF';
  background-color: rgb(241, 242, 243);
  // font-family: 'SF Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,PingFang TC,Hiragino Sans GB,Microsoft JhengHei,sans-serif!important';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

input {
  padding: 0px;
  margin: 0px;
  outline: none;
  border: 0px;
 -webkit-appearance: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #D2D2D2;
  }
}

textarea {
  font-family: 'SF';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #D2D2D2;
  }
}

button {
  border: 0px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

@media( max-width: 500px ){

  .default {
    
  }

  body {

  }

}

</style>
