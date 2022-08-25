<template>
    <b-container>
        <b-row align-h="center" class="container-row">
            <b-col cols="6">
                <b-form-input :placeholder="$t('default.search')" @change="setName" :value="name"></b-form-input>
            </b-col>
            <b-col cols="3">
                <b-button class="button-size" variant="success" :disabled="$v.validationGroup.$invalid"
                    @click="searchCar">{{ $t('button.search') }}</b-button>
            </b-col>
            <b-col cols="3">
                <b-button class="button-size" variant="secondary" v-b-toggle.collapse>{{ $t('button.filter') }}</b-button>
            </b-col>
        </b-row>
        <b-collapse id="collapse">
            <b-row align-h="center" class="container-row">
                <b-col cols="4">
                    <label class="input-label">{{ $t('default.brand') }}</label>
                    <b-form-select v-model="brandSelect" :options="brandList" @change="setBrand"></b-form-select>
                </b-col>
                <b-col cols="4">
                    <label class="input-label">{{ $t('default.carType') }}</label>
                    <b-form-select v-model="typeSelect" :options="typeList" @change="setCarType"></b-form-select>
                </b-col>
                <b-col cols="4">
                    <label class="input-label">{{ $t('default.gearType') }}</label>
                    <b-form-select v-model="gearSelect" :options="gearList" @change="setGearType"></b-form-select>
                </b-col>
            </b-row>
            <b-row align-h="center" class="container-row">
                <b-col cols="4">
                    <label class="input-label">{{ `${$t('default.price')} ${$t('default.minPrice')}` }}</label>
                    <b-form-input :placeholder="$t('default.minPrice')" @change="setMinPrice" :value="minPrice">
                    </b-form-input>
                    <label class="input-error" v-if="$v.minPrice.$invalid">{{ `* ${$t('formError.intergerOnly')}${$t('formError.maxPriceInvalid')}`
                    }}</label>
                </b-col>
                <b-col cols="4">
                    <label class="input-label">{{ `${$t('default.price')} ${$t('default.maxPrice')}` }}</label>
                    <b-form-input :placeholder="$t('default.maxPrice')" @change="setMaxPrice" :value="maxPrice">
                    </b-form-input>
                    <label class="input-error" v-if="$v.maxPrice.$invalid">{{ `* ${$t('formError.intergerOnly')}${$t('formError.maxPriceInvalid')}`
                    }}</label>
                </b-col>
                <b-col cols="4">
                    <label class="input-label">{{ $t('default.sortBy') }}</label>
                    <b-form-select v-model="sortSelect" :options="sortList" @change="setSortBy"></b-form-select>
                </b-col>
            </b-row>
            <b-row align-h="center" class="container-row">
                <b-col cols="3">
                    <b-button class="button-size" variant="success" v-b-toggle.collapse
                        :disabled="$v.validationGroup.$invalid" @click="searchCar">{{ $t('button.search') }}</b-button>
                </b-col>
                <b-col cols="3">
                    <b-button class="button-size" @click="resetFilter">{{ $t('button.resetFilter') }}</b-button>
                </b-col>
            </b-row>
        </b-collapse>
    </b-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { integer, minValue, maxValue } from 'vuelidate/lib/validators'
import { getCarList } from '@/services/carService'
import { brandList, typeList, gearList, sortList, MAX_INTEGER_VALUE } from '@/common/constant'
const { mapState: mapFilterState } = createNamespacedHelpers('filter')
const { mapActions: mapFilterAction } = createNamespacedHelpers('filter')
const { mapActions: mapCarAction } = createNamespacedHelpers('car')
const { mapActions: mapSpinnerAction } = createNamespacedHelpers('spinner')
export default {
    data() {
        return {
            brandSelect: '',
            typeSelect: '',
            gearSelect: '',
            sortSelect: '0',
            brandList: brandList,
            typeList: typeList,
            gearList: gearList,
            sortList: sortList
        }
    },
    computed: {
        ...mapFilterState({
            name: state => state.name,
            gearType: state => state.gearType,
            carType: state => state.carType,
            brand: state => state.brand,
            minPrice: state => state.minPrice,
            maxPrice: state => state.maxPrice,
            sortBy: state => state.sortBy,
            page: state => state.page
        })
    },
    methods: {
        ...mapFilterAction([
            'setName',
            'setGearType',
            'setCarType',
            'setBrand',
            'setMinPrice',
            'setMaxPrice',
            'setSortBy',
            'setPage'
        ]),
        ...mapCarAction([
            'setCarList',
            'setShowStartAt',
            'setShowEndAt',
            'setTotalCar',
            'setTotalPage'
        ]),
        ...mapSpinnerAction([
            'setOpenSpinner',
            'setCloseSpinner',
        ]),
        resetFilter() {
            this.brandSelect = ''
            this.typeSelect = ''
            this.gearSelect = ''
            this.sortSelect = '0'
            this.setName('')
            this.setGearType('')
            this.setCarType('')
            this.setBrand('')
            this.setMinPrice('')
            this.setMaxPrice('')
            this.setSortBy('0')
        },
        async searchCar() {
            await this.setPage('1')
            await this.setOpenSpinner()
            await getCarList()
            await this.setCloseSpinner()
        }

    },
    validations() {
        return {
            minPrice: {
                integer,
                maxValue: maxValue(this.$isEmpty(this.maxPrice)? MAX_INTEGER_VALUE: this.maxPrice)
            },
            maxPrice: {
                integer,
                minValue: minValue(this.$isEmpty(this.minPrice)? "0": this.minPrice)
            },
            validationGroup: ['minPrice', 'maxPrice']
        }
    },
    mounted() {
        this.brandSelect = this.brand
        this.gearSelect = this.gearType
        this.typeSelect = this.carType
        this.sortSelect = this.sortBy
    }

}
</script>
<style scoped>

.filter {
    width: 500px;
}

.container-row {
    margin: 5px;
}
</style>