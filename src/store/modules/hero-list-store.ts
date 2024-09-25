import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { HeroListSetupStore } from '@/types/store/hero-list-store';
export default defineStore('heroListStore', (): HeroListSetupStore => {
    let heroListRef: Ref<Hero[]> = ref([]);
    async function fetchHeroList(): Promise<Hero[]> {
        const resp: Response = await fetch('/web201605/js/herolist.json');
        heroListRef.value = await resp.json();
        heroListRef.value.reverse();
        return heroListRef.value;
    }
    function getHeroList(): Hero[] {
        return heroListRef.value;
    }
    function filterHeroListByPayType(value: number | string): Hero[] {
        return heroListRef.value.filter((hero) => {
            return hero.pay_type === value;
        });
    }
    function filterHeroListByHeroType(value: number | string): Hero[] {
        return heroListRef.value.filter((hero) => {
            return hero.hero_type === value;
        });
    }
    function filterHeroListByKeyword(value: number | string): Hero[] {
        return heroListRef.value.filter((hero) => {
            return hero.cname.includes(value as string);
        });
    }
    const typeHeroListMap: Map<string, (value: number | string) => Hero[]> = new Map([
        ['all', getHeroList],
        ['free', filterHeroListByPayType],
        ['recommend', filterHeroListByPayType],
        ['type', filterHeroListByHeroType],
        ['keyword', filterHeroListByKeyword]
    ]);
    function filterHeroList(type: string, value: number | string): Hero[] {
        if (typeHeroListMap.has(type) === false) {
            return [];
        }
        const filterHeroList: Hero[] = (typeHeroListMap.get(type) as any)(value);
        return filterHeroList;
    }
    return {
        heroListRef: heroListRef,
        fetchHeroList: fetchHeroList,
        filterHeroList: filterHeroList
    };
});