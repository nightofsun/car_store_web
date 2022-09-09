<template>
  <div>
    <Search />
    <img id="img-1" :src="img"/>
    <div class="table-box">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>{{ $t('default.brand') }}</th>
            <th>{{ $t('default.name') }}</th>
            <th>{{ $t('default.carType') }}</th>
            <th>{{ $t('default.driveSystem') }}</th>
            <th>{{ $t('default.gearType') }}</th>
            <th>{{ $t('default.oil') }}</th>
            <th>{{ $t('default.price') }}</th>
            <th>{{ $t('default.year') }}</th>
            <th>{{ $t('default.engine') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in carList" :key="car.carID">
            <td>{{ verifyString(car.brand) }}</td>
            <td>{{ verifyString(car.name) }}</td>
            <td>{{ verifyString(car.carType) }}</td>
            <td>{{ verifyString(car.driveSystem) }}</td>
            <td>{{ verifyString(car.gearType) }}</td>
            <td>{{ verifyString(car.oilType) }}</td>
            <td>{{ verifyString(car.price).toLocaleString() }}</td>
            <td>{{ verifyString(car.year) }}</td>
            <td>{{ verifyString(car.engine) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import Search from '@/components/SearchCar.vue'
import AppFooter from '@/components/Footer.vue';
import { isInteger } from 'lodash'
import { request } from '@/services/api';
import axios from 'axios';
const { mapState: mapCarState } = createNamespacedHelpers('car')
export default {
  computed: {
    ...mapCarState({
      carList: state => state.carList
    })
  },
  data() {
    return {
      img: ''
    }
  },  
  methods: {
    verifyString(str) {
      if (isInteger(str)) {
        return str
      }
      if (this.$isEmpty(str)) {
        return "-";
      }
      return str;
    },
    async getImg() {
      const result = await axios.get('')
      this.img = result
    }
  },
  components: { Search, AppFooter }
}
</script>
<style scoped>
#img-1 {
  image-orientation: from-image;
}
</style>