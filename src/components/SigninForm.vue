<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="E-mail" v-model="email" autocomplete="false" />
        <input type="password" required placeholder="Password" v-model="password" autocomplete="false" />
        <div class="error">{{ error }}</div>
        <button>Sign In</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useSignin from '@/composables/useSignin';

export default {
    setup(props, context) {
        const { error, signin } = useSignin();
        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => {
            await signin(email.value, password.value);
            if (!error.value) {
                context.emit('signin');
            }
        }

        return { email, password, handleSubmit, error };
    }
}
</script>

<style></style>