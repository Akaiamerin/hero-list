import type { Ref } from 'vue';
import type { Store, _UnwrapAll } from 'pinia';
declare interface PayTypeListSetupStore {
    payTypeListRef: Ref<PayType[]>;
}
declare type PayTypeListStore = Store<
    'payTypeListStore',
    _UnwrapAll<Pick<PayTypeListSetupStore, 'payTypeListRef'>>,
    Pick<PayTypeListSetupStore, never>,
    Pick<PayTypeListSetupStore, never>
>;