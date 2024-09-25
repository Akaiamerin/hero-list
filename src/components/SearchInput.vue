<template>
    <div class="search-input-container">
        <input
            v-model="keywordRef"
            v-on:compositionstart="handleDisableSearch"
            v-on:compositionend="handleEnableSearch"
            v-on:input="handleSearch"
            class="search-input" type="text" placeholder="请输入你要搜索的英雄名" autocomplete="off">
        <div class="search-icon"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref, ModelRef } from 'vue';
import useHeroListStore from '@/store/modules/hero-list-store';
import type { HeroListStore } from '@/types/store/hero-list-store';
const heroListStore: HeroListStore = useHeroListStore();
const heroListModelRef: ModelRef<Hero[] | undefined, string> = defineModel('heroList', {
    type: Array<Hero>
});
let enableSearch: boolean = true;
const keywordRef: Ref<string> = ref('');
function handleSearch(): void {
    if (enableSearch === true) {
        heroListModelRef.value = heroListStore.filterHeroList('keyword', keywordRef.value);
    }
}
function handleDisableSearch(): void {
    enableSearch = false;
}
function handleEnableSearch(): void {
    enableSearch = true;
    handleSearch();
}
</script>


<style scoped>
.search-type-list .search-input-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    right: 10%;
    bottom: 6px;
    width: 220px;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border: 1px solid #d2d2d2;
    color: #747475;
}

.search-input-container .search-input {
    width: 80%;
    height: 100%;
    border: none;
    outline: none;
    color: inherit;
    background: transparent;
}

.search-input-container .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 12px;
    width: 24px;
    height: 24px;
    border-left: 1px solid #d2d2d2;
}
</style>