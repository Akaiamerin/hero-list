import { reactive, toRef } from 'vue';
import type { Reactive } from 'vue';
import { defineStore } from 'pinia';
import type { PayTypeListSetupStore } from '@/types/store/pay-type-list-store';
export default defineStore('payTypeListStore', (): PayTypeListSetupStore => {
    const payTypeList: Reactive<PayType[]> = reactive([
        {
            value: 10,
            type: 'free',
            name: '本周免费'
        },
        {
            value: 11,
            type: 'recommend',
            name: '新手推荐'
        }
    ]);
    return {
        payTypeListRef: toRef(payTypeList)
    };
});