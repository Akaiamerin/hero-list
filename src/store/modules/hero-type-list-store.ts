import { reactive, toRef } from 'vue';
import type { Reactive } from 'vue';
import { defineStore } from 'pinia';
import type { HeroTypeListSetupStore } from '@/types/store/hero-type-list-store';
export default defineStore('heroTypeListStore', (): HeroTypeListSetupStore => {
    const heroTypeList: Reactive<HeroType[]> = reactive([
        {
            value: 0,
            type: 'all',
            name: '全部'
        },
        {
            value: 3,
            type: 'type',
            name: '坦克'
        },
        {
            value: 1,
            type: 'type',
            name: '战士'
        },
        {
            value: 4,
            type: 'type',
            name: '刺客'
        },
        {
            value: 2,
            type: 'type',
            name: '法师'
        },
        {
            value: 5,
            type: 'type',
            name: '射手'
        },
        {
            value: 6,
            type: 'type',
            name: '辅助'
        },
    ]);
    return {
        heroTypeListRef: toRef(heroTypeList)
    };
});