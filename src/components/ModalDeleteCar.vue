<template>
    <div class="modal-container">
        <div class="custom-modal-backdrop">
            <div>
                <b-container class="custom-modal-content">
                    <b-row align-h="center">
                        <b-col cols="6" class="title">{{ $t('default.editCarTitle') }}</b-col>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <label class="input-label">{{ `${$t('default.confirmMessage')} ${carData.name}` }}</label>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <b-col cols="6">
                            <b-button variant="danger" class="button-size" @click="submit">{{ $t('button.delete') }}
                            </b-button>
                        </b-col>
                        <b-col cols="6">
                            <b-button variant="secondary" class="button-size" @click="cancel">{{ $t('button.cancel') }}
                            </b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>
<script>
import * as commonConstant from '@/common/constant'
import { deleteCar, getCarList } from '@/services/carService'
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapSpinnerAction } = createNamespacedHelpers('spinner')
export default {
    props: {
        car: Object
    },
    data() {
        return {
            carData: {},
            brandList: commonConstant.brandList,
            driveSystemList: commonConstant.driveSystemList,
            gearList: commonConstant.gearList,
            typeList: commonConstant.typeList,
            oilList: commonConstant.oilList
        }
    },
    mounted() {
        this.carData = this.car
    },
    methods: {
        ...mapSpinnerAction({
            setOpenSpinner: 'setOpenSpinner',
            setCloseSpinner: 'setCloseSpinner'
        }),
        async submit() {
            await this.setOpenSpinner()
            await deleteCar({
                carID: this.carData.carID
            })
            await getCarList()
            await this.setCloseSpinner()
            this.$emit('close')
        },
        cancel() {
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
</style>