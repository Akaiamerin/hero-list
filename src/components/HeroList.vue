<template>
    <div class="hero-list-container">
        <ul class="hero-list">
            <li v-for="hero in props.heroList" v-bind:key="hero.ename">
                <a
                    v-bind:href="`https://pvp.qq.com/web201605/herodetail/${hero.id_name}.shtml`"
                    target="_blank" rel="noopener noreferrer">
                    <img
                        v-bind:src="`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`"
                        alt="">
                    <span>{{ hero.cname }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props: {
    readonly heroList?: Hero[] | undefined;
} = defineProps({
    heroList: {
        type: Array<Hero>
    }
});
</script>


<style scoped>
.hero-list {
    display: grid;
    grid-template-columns: repeat(10, 87px);
    gap: 34px 30px;
    margin: 40px auto 0 auto;
    width: 1140px;
    font-size: 14px;
    text-align: center;
    list-style: none;
}

.hero-list a {
    text-decoration: none;
    color: #363636;
}

.hero-list img {
    display: block;
    width: 83px;
    height: 83px;
    border: 2px solid #258df2;
    border-radius: 10px 0 10px 0;
}
</style>