<template>
    <div class="hero-list-view-container">
        <div class="search-hero-container">
            <div class="search-title-list">
                <div class="search-title-item">综合</div>
                <div class="search-title-item">游戏职业</div>
            </div>
            <div class="search-type-list">
                <div class="pay-type-list-wrapper">
                    <type-list
                        v-bind:type-list="payTypeListStore.payTypeListRef"
                        v-model:hero-list="heroListRef"
                        v-model:active-radio-value="activeRadioValueRef"></type-list>
                </div>
                <div class="hero-type-list-wrapper">
                    <type-list
                        v-bind:type-list="heroTypeListStore.heroTypeListRef"
                        v-model:hero-list="heroListRef"
                        v-model:active-radio-value="activeRadioValueRef"></type-list>
                </div>
                <div class="search-input-wrapper">
                    <search-input v-model:hero-list="heroListRef"></search-input>
                </div>
            </div>
        </div>
        <div class="hero-list-wrapper">
            <hero-list v-bind:hero-list="heroListRef"></hero-list>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import TypeList from '@/components/TypeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import HeroList from '@/components/HeroList.vue';
import useHeroListStore from '@/store/modules/hero-list-store';
import usePayTypeListStore from '@/store/modules/pay-type-list-store';
import useHeroTypeListStore from '@/store/modules/hero-type-list-store';
import type { HeroListStore } from '@/types/store/hero-list-store';
import type { HeroTypeListStore } from '@/types/store/hero-type-list-store';
import type { PayTypeListStore } from '@/types/store/pay-type-list-store';
const heroListStore: HeroListStore = useHeroListStore();
const payTypeListStore: PayTypeListStore = usePayTypeListStore();
const heroTypeListStore: HeroTypeListStore = useHeroTypeListStore();
const heroListRef: Ref<Hero[]> = ref([]);
const activeRadioValueRef: Ref<number> = ref(0);
onMounted(async (): Promise<void> => {
    heroListRef.value = await heroListStore.fetchHeroList();
});
</script>

<style scoped>
.hero-list-view-container {
    width: 1140px;
    margin: 0 auto 0 auto;
}

.search-hero-container {
    display: flex;
    border-radius: 5px;
    background: #efefef;
}

.search-hero-container .search-title-list {
    border-radius: 5px;
    color: #fff;
    background: #2c88e2;
}

.search-hero-container .search-type-list {
    position: relative;
    width: 100%;
    color: #686869;
}

.search-title-list .search-title-item {
    width: 80px;
    height: 52px;
    font-size: 16px;
    line-height: 52px;
    text-align: center;
}
</style>