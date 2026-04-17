<template>
    <div class="type-list-container">
        <div v-for="type in props.typeList" v-bind:key="type.value">
            <div
                v-bind:class="{
                    'active': type.value === activeRadioValueModelRef
                }"
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
import type { PayType } from '@/types/pay-type';
import type { HeroType } from '@/types/hero-type';
import type { Hero } from '@/types/hero';
const props: {
    readonly typeList: (PayType | HeroType)[];
} = defineProps({
    typeList: {
        type: Array<PayType | HeroType>,
        required: true
    }
});
const heroListModelRef: ModelRef<Hero[]> = defineModel('heroList', {
    type: Array<Hero>,
    required: true
});
const activeRadioValueModelRef: ModelRef<number> = defineModel('activeRadioValue', {
    type: Number,
    required: true
});
const heroListStore: HeroListStore = useHeroListStore();
function handleChangeActiveRadio(event: MouseEvent): void {
    const target: HTMLElement = event.target as HTMLElement;
    const type: string = target.dataset['type'] as string;
    const value: number = parseInt(target.dataset['value'] as string);
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