import { ref, computed } from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

const records = ref([]);

const recordsRef = database.ref('/records');
recordsRef.on('value', (snapshot) => {
    if (snapshot.exists()) {
        records.value = Object
            .entries(snapshot.val())
            .map(([ id, data ]) => ({
                id,
                ...data,
            }));
    }
})

const includesIgnoreCase = (first, second) => {
    return first.toLowerCase().includes(second.toLowerCase());
}

export const recordsManagement = () => {
    const filter = ref('');

    const filteredRecords = computed(() => records.value.filter((record) => {
        return includesIgnoreCase(record.title, filter.value)
        || includesIgnoreCase(record.artists, filter.value)
        || includesIgnoreCase(String(record.year), filter.value)
    }));

    return {
        records,
        filter,
        filteredRecords,
    }
};
