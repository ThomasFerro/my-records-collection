import { ref } from 'vue';
export const recordsManagement = () => {
    const records = ref([]);
    
    // TODO: Call the API

    return {
        records,
    }
};
