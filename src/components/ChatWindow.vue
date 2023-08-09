<template>
    <div class="chat-window">
        <div class="error" v-if="error">{{ error }}</div>
        <div class="messages" v-if="documents" ref="messages">
            <div class="single" v-for="doc in formatedDocuments" :key="doc.id">
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, ref, onUpdated } from 'vue'

export default {
    setup() {
        const { error, documents } = getCollection('messages');
        const formatedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate());
                    return { ...doc, createdAt: time };
                })
            }
        })

        const messages = ref(null);
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        })
        return { error, documents, formatedDocuments, messages };
    }
}
</script>

<style>
.chat-window {
    background-color: #fafafa;
    padding: 30px 20px;
    text-align: start;
}

.single {
    margin: 18px 0;
}

.created-at {
    display: block;
    color: #999999;
    font-size: 12px;
    margin-bottom: 5px;
}

.name {
    font-weight: bold;
    margin-right: 7px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>