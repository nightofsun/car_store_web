<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <BaseInfo imgSrc="error.png" title="ERROR" />
    </div>
    <div v-if="isSpinner">
      <div :class="spinnerBackdrop">
        <div class="spinner-position">
          <b-spinner label="Large Spinner" class="spinner"></b-spinner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { BSpinner } from 'bootstrap-vue'
import AppHeader from './components/Header.vue'
import BaseInfo from './components/BaseInfo.vue'
const { mapState: mapSpinnerState } = createNamespacedHelpers('spinner')
const { mapActions: mapSpinnerAction } = createNamespacedHelpers('spinner')
export default {
  name: 'App',
  computed: {
    ...mapSpinnerState({
      isSpinner: state => state.isSpinner,
      spinnerBackdrop: state => state.spinnerBackdrop
    })
  },
  components: {
    BSpinner,
    AppHeader,
    BaseInfo
},
  methods: {
    ...mapSpinnerAction({
      setOpenSpinner: 'setOpenSpinner',
      setCloseSpinner: 'setCloseSpinner'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 8vh;
}

.spinner-backdrop {
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9998;
  height: 92vh;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
}

.spinner-position {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9999;
}

.content {
  position: absolute;
  height: 92vh;
  width: 100%;
}

.spinner {
  width: 10rem !important;
  height: 10rem !important;
}
</style>
