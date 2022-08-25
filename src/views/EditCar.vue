<template>
    <div>
        <div>
            <b-container>
                <b-row align-h="center">
                    <b-col cols="8">
                        <b-button variant="success" class="button-size" @click="openCreateModal">{{ $t('button.add') }}
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
            <Search />
        </div>
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
                        <th>{{ $t('button.edit') }}</th>
                        <th>{{ $t('button.delete') }}</th>
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
                        <td>
                            <b-button class="button-size" @click="selectCarForUpdate(car)">{{
                                    $t('button.edit')
                            }}</b-button>
                        </td>
                        <td>
                            <b-button variant="danger" class="button-size" @click="selectCarForDelete(car)"> {{
                                    $t('button.delete')
                            }}</b-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ModalEditCar v-if="isUpdateModal" :car="updateCar" @close="closeUpdateModal" />
        <ModalCreateCar v-if="isCreateModal" @close="closeCreateModal" />
        <ModalDeleteCar v-if="isDeleteModal" @close="closeDeleteModal" :car="deleteCar" />
        <AppFooter />
    </div>
</template >
                <script>
import { createNamespacedHelpers } from 'vuex'
import Search from '@/components/SearchCar.vue'
import AppFooter from '@/components/Footer.vue';
import { isInteger } from 'lodash'
import ModalEditCar from '@/components/ModalEditCar.vue';
import ModalCreateCar from '@/components/ModalCreateCar.vue';
import ModalDeleteCar from '@/components/ModalDeleteCar.vue';
const { mapState: mapCarState } = createNamespacedHelpers('car')
export default {
    data() {
        return {
            updateCar: {},
            deleteCar: {},
            isUpdateModal: false,
            isCreateModal: false,
            isDeleteModal: false
        }
    },
    computed: {
        ...mapCarState({
            carList: state => state.carList
        })
    },
    methods: {
        verifyString(str) {
            if (isInteger(str)) {
                return str
            }
            if (this.$isEmpty(str)) {
                return "-";
            } return str;
        },
        openCreateModal() {
            this.isCreateModal = true
        },
        closeCreateModal() {
            this.isCreateModal = false
        },
        closeDeleteModal() {
            this.isDeleteModal = false
        },
        selectCarForUpdate(car) {
            this.updateCar = car
            this.isUpdateModal = true
        },
        selectCarForDelete(car) {
            this.deleteCar = car
            this.isDeleteModal = true
        },
        closeUpdateModal() {
            this.isUpdateModal = false
        }
    },
    components: { Search, AppFooter, ModalEditCar, ModalCreateCar, ModalDeleteCar }
}
</script>
<style scoped>
</style>
