import type { Ref } from 'vue';
import type { Store, _UnwrapAll } from 'pinia';
declare interface HeroListSetupStore {
    heroListRef: Ref<Hero[]>;
    fetchHeroList(): Promise<Hero[]>;
    filterHeroList(type: string, value: number | string): Hero[];
}
declare type HeroListStore = Store<
    'heroListStore',
    _UnwrapAll<Pick<HeroListSetupStore, 'heroListRef'>>,
    Pick<HeroListSetupStore, never>,
    Pick<HeroListSetupStore, 'fetchHeroList' | 'filterHeroList'>
>;