<template>
    <b-container>
        <b-row align-h="end">
            <b-col cols="3" class="footer-content" align-self="center">{{ `${$t('default.show')}
                            ${showStartAt}-${showEndAt}
                            ${$t('default.all')} ${totalCar}`
            }}</b-col>
            <b-col v-if="page > 1" cols="2" class="footer-content">
                <b-button class="button-size" variant="info" @click="back">{{ $t('button.back') }}</b-button>
            </b-col>
            <b-col v-if="page < totalPage" cols="2" class="footer-content">
                <b-button class="button-size" variant="info" @click="next">{{ $t('button.next') }}</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
import { getCarList } from '@/services/carService'
const { mapState: mapCarState } = createNamespacedHelpers('car')
const { mapState: mapFilterState } = createNamespacedHelpers('filter')
const { mapActions: mapFilterAction } = createNamespacedHelpers('filter')
const { mapActions: mapSpinnerAction } = createNamespacedHelpers('spinner')
export default {
    computed: {
        ...mapCarState({
            showStartAt: state => state.showStartAt,
            showEndAt: state => state.showEndAt,
            totalCar: state => state.totalCar,
            totalPage: state => state.totalPage
        }),
        ...mapFilterState({
            page: state => state.page
        })
    },
    methods: {
        ...mapFilterAction([
            'setPage'
        ]),
        ...mapSpinnerAction([
            'setOpenSpinner',
            'setCloseSpinner'
        ]),
        async next() {
            await this.setPage(`${parseInt(this.page) + 1}`)
            await this.setOpenSpinner()
            await getCarList()
            await this.setCloseSpinner()
        },
        async back() {
            await this.setPage(`${parseInt(this.page) - 1}`)
            await this.setOpenSpinner()
            await getCarList()
            await this.setCloseSpinner()
        }
    }
}
</script>
<style scoped>
.footer-content {
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: end;
    height: 100%;
}
</style>