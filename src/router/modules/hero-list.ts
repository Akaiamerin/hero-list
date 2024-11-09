export default [
    {
        path: '/hero-list',
        name: 'heroList',
        component: () => {
            return import('@/views/HeroListView.vue');
        }
    }
];