<template>
    <div class="type-list-container">
        <div v-for="type in props.typeList" v-bind:key="type.value">
            <div
                v-bind:class="{ 'active': activeRadioValueModelRef === type.value }"
                v-bind:data-type="type.type"
                v-bind:data-value="type.value"
                v-on:click="handleChangeActiveRadio"
                class="radio">
                {{ type.name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue';
import useHeroListStore from '@/store/modules/hero-list-store';
import type { HeroListStore } from '@/types/store/hero-list-store';
const heroListStore: HeroListStore = useHeroListStore();
const props: {
    readonly typeList?: (PayType | HeroType)[] | undefined;
} = defineProps({
    typeList: {
        type: Array<PayType | HeroType>
    }
});
const heroListModelRef: ModelRef<Hero[] | undefined, string> = defineModel('heroList', {
    type: Array<Hero>
});
const activeRadioValueModelRef: ModelRef<number | undefined, string> = defineModel('activeRadioValue', {
    type: Number
});
function handleChangeActiveRadio(event: MouseEvent): void {
    const radio: HTMLElement = event.target as HTMLElement;
    const type: string = radio.dataset['type'] as string;
    const value: number = parseInt(radio.dataset['value'] as string);
    heroListModelRef.value = heroListStore.filterHeroList(type, value);
    activeRadioValueModelRef.value = value;
}
</script>

<style scoped>
.type-list-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 1rem;
    font-size: 14px;
}

.radio {
    position: relative;
    padding: 0 0 0 28px;
    min-width: 90px;
    height: 52px;
    line-height: 52px;
    cursor: pointer;
}

.radio:not(:last-child) {
    margin: 0 1rem 0 0;
}

.radio::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 0;
    border-radius: 50%;
    transform: translate(0, -50%);
    border: 1px solid #b3b3b3;
}

.radio.active::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    left: 4px;
    border-radius: 50%;
    transform: translate(0, -50%);
    background: #5488d5;
}
</style>