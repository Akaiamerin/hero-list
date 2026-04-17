import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { HeroListSetupStore } from '@/types/store/hero-list-store';
import type { Hero } from '@/types/hero';
export default defineStore('heroListStore', (): HeroListSetupStore => {
    const heroListRef: Ref<Hero[]> = ref([]);
    async function fetchHeroList(): Promise<Hero[]> {
        const resp: Response = await fetch('/web201605/js/herolist.json');
        heroListRef.value = await resp.json();
        heroListRef.value.reverse();
        return heroListRef.value;
    }
    function getAllHeroList(): Hero[] {
        return heroListRef.value;
    }
    function filterHeroListByPayType(value: number | string): Hero[] {
        return heroListRef.value.filter((hero: Hero): boolean => {
            return hero.pay_type === value;
        });
    }
    function filterHeroListByHeroType(value: number | string): Hero[] {
        return heroListRef.value.filter((hero: Hero): boolean => {
            return hero.hero_type === value;
        });
    }
    function filterHeroListByKeyword(value: number | string): Hero[] {
        return heroListRef.value.filter((hero: Hero): boolean => {
            return hero.cname.includes(value as string);
        });
    }
    const typeHeroListMap: Map<string, (value: number | string) => Hero[]> = new Map([
        ['all', getAllHeroList],
        ['free', filterHeroListByPayType],
        ['recommend', filterHeroListByPayType],
        ['type', filterHeroListByHeroType],
        ['keyword', filterHeroListByKeyword]
    ]);
    function filterHeroList(type: string, value: number | string): Hero[] {
        if (typeHeroListMap.has(type) === false) {
            return [];
        }
        return (typeHeroListMap.get(type) as (value: number | string) => Hero[])(value);
    }
    return {
        fetchHeroList: fetchHeroList,
        filterHeroList: filterHeroList
    };
});