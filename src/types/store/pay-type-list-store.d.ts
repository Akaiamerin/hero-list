import type { Reactive } from 'vue';
import type { Store } from 'pinia';
import type { PayType } from '@/types/pay-type';
export declare interface PayTypeListSetupStore {
    payTypeList: Reactive<PayType[]>;
}
export declare type PayTypeListStore = Store<
    'payTypeListStore',
    Pick<PayTypeListSetupStore, 'payTypeList'>,
    Pick<PayTypeListSetupStore, never>,
    Pick<PayTypeListSetupStore, never>
>;