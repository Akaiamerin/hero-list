import type { Reactive } from 'vue';
import type { Store } from 'pinia';
import type { HeroType } from '@/types/hero-type';
export declare interface HeroTypeListSetupStore {
    heroTypeList: Reactive<HeroType[]>;
}
export declare type HeroTypeListStore = Store<
    'heroTypeListStore',
    Pick<HeroTypeListSetupStore, 'heroTypeList'>,
    Pick<HeroTypeListSetupStore, never>,
    Pick<HeroTypeListSetupStore, never>
>;