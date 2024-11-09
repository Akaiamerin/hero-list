import type { Ref } from 'vue';
import type { Store, _UnwrapAll } from 'pinia';
declare interface HeroTypeListSetupStore {
    heroTypeListRef: Ref<HeroType[]>;
}
declare type HeroTypeListStore = Store<
    'heroTypeListStore',
    _UnwrapAll<Pick<HeroTypeListSetupStore, 'heroTypeListRef'>>,
    Pick<HeroTypeListSetupStore, never>,
    Pick<HeroTypeListSetupStore, never>
>;