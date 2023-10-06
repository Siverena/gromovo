// import cottage from '@/stores/data/d-cottage.js';
import { mapState, mapActions } from 'pinia';
import { useCottagesStore } from '@/stores/cottagesStore.js';

export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapState(useCottagesStore, ['getCottage']),
    },
    watch: {},
    methods: {
        ...mapActions(useCottagesStore, ['fetchCottage']),
        async loadData() {
            try {
                this.loading = true;
                await this.fetchCottage(this.$route.params.id);
                this.loading = false;
            } catch (e) {
                console.log(e);
            }
        },
        getBooking() {},
    },
    async created() {
        await this.loadData();
    },
};
