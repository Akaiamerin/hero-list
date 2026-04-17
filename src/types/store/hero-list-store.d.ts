import type { Store } from 'pinia';
import { Hero } from '@/types/hero';
export declare interface HeroListSetupStore {
    fetchHeroList: () => Promise<Hero[]>;
    filterHeroList: (type: string, value: number | string) => Hero[];
}
export declare type HeroListStore = Store<
    'heroListStore',
    Pick<HeroListSetupStore, never>,
    Pick<HeroListSetupStore, never>,
    Pick<HeroListSetupStore, 'fetchHeroList' | 'filterHeroList'>
>;