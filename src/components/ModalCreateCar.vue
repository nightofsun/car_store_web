<template>
    <div class="modal-container">
        <div class="custom-modal-backdrop">
            <div>
                <b-container class="custom-modal-content">
                    <b-row align-h="center">
                        <b-col cols="6" class="title">{{ $t('default.createCarTitle') }}</b-col>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <label class="input-label">{{ $t('default.brand') }}</label>
                        <b-form-select v-model="carData.brand" :options="brandList"></b-form-select>
                        <label class="input-error" v-if="$v.carData.brand.$invalid">{{ `* ${$t('formError.require')}`
                        }}</label>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <label class="input-label">{{ $t('default.name') }}</label>
                        <b-form-input :placeholder="$t('default.nameHover')" :value="carData.name" @change="setCarName">
                        </b-form-input>
                        <label class="input-error" v-if="$v.carData.name.$invalid">{{ `* ${$t('formError.require')}`
                        }}</label>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.driveSystem') }}</label>
                            <b-form-select v-model="carData.driveSystem" :options="driveSystemList"></b-form-select>
                        </b-col>
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.gearType') }}</label>
                            <b-form-select v-model="carData.gearType" :options="gearList"></b-form-select>
                            <label class="input-error" v-if="$v.carData.gearType.$invalid">{{ `*
                                                            ${$t('formError.require')}`
                            }}</label>
                        </b-col>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.year') }}</label>
                            <b-form-input :placeholder="$t('default.yearHover')" :value="carData.year"
                                @change="setYear">
                            </b-form-input>
                            <label class="input-error" v-if="$v.carData.year.$invalid">{{ `*
                                                            ${$t('formError.require')} ${$t('formError.intergerOnly')}`
                            }}</label>
                        </b-col>
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.price') }}</label>
                            <b-form-input :placeholder="$t('default.priceHover')" :value="carData.price"
                                @change="setPrice">
                            </b-form-input>
                            <label class="input-error" v-if="$v.carData.price.$invalid">{{ `*
                                                            ${$t('formError.require')} ${$t('formError.intergerOnly')}`
                            }}</label>
                        </b-col>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.carType') }}</label>
                            <b-form-select v-model="carData.carType" :options="typeList"></b-form-select>
                        </b-col>
                        <b-col cols="6">
                            <label class="input-label">{{ $t('default.oil') }}</label>
                            <b-form-select v-model="carData.oilType" :options="oilList"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <label class="input-label">{{ $t('default.engine') }}</label>
                        <b-form-input :placeholder="$t('default.engineHover')" :value="carData.engine" @change="setEngine">
                        </b-form-input>
                    </b-row>
                    <b-row align-h="start" class="container-row">
                        <b-col cols="6">
                            <b-button variant="success" class="button-size" @click="submit"
                                :disabled="$v.carData.$invalid">{{ $t('button.confirm') }}
                            </b-button>
                        </b-col>
                        <b-col cols="6">
                            <b-button variant="danger" class="button-size" @click="cancel">{{ $t('button.cancel') }}
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
import { createCar, getCarList } from '@/services/carService'
import { createNamespacedHelpers } from 'vuex'
import { required, integer } from 'vuelidate/lib/validators'
const { mapActions: mapSpinnerAction } = createNamespacedHelpers('spinner')
export default {
    data() {
        return {
            carData: {
                brand: '',
                name: '',
                driveSystem: '',
                gearType: '',
                year: '',
                engine: '',
                price: '',
                carType: '',
                oilType: ''
            },
            brandList: commonConstant.brandList,
            driveSystemList: commonConstant.driveSystemList,
            gearList: commonConstant.gearList,
            typeList: commonConstant.typeList,
            oilList: commonConstant.oilList
        }
    },
    methods: {
        ...mapSpinnerAction({
            setOpenSpinner: 'setOpenSpinner',
            setCloseSpinner: 'setCloseSpinner'
        }),
        async submit() {
            await this.setOpenSpinner()
            await createCar(
                this.carData
            )
            await getCarList()
            await this.setCloseSpinner()
            this.$emit('close')
        },
        cancel() {
            this.$emit('close')
        },
        setCarName(value) {
            this.carData.name = value
        },
        setYear(value) {
            this.carData.year = value
        },
        setPrice(value) {
            this.carData.price = value
        },
        setEngine(value) {
            this.carData.engine = value
        }
    },
    validations() {
        return {
            carData: {
                brand: {
                    required
                },
                name: {
                    required
                },
                gearType: {
                    required
                },
                year: {
                    required,
                    integer
                },
                price: {
                    required,
                    integer
                }
            },
        }
    },
}
</script>
<style scoped>
</style>