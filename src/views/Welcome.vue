<template>
    <div class="welcome container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <h2>Sign In</h2>
            <SigninForm @signin="enterChat"></SigninForm>
            <p>No account yet? <span @click="showLogin = false">Sign Up!</span></p>
        </div>
        <div v-else>
            <h2>Sign Up</h2>
            <SignupForm @signup="enterChat"></SignupForm>
            <p>Already registered? <span @click="showLogin = true">Sign In!</span></p>
        </div>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import SigninForm from '@/components/SigninForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { SignupForm, SigninForm },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();

        const enterChat = () => {
            router.push({ name: 'chatroom' });
        }

        return { showLogin, enterChat };
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #dddddd;
    outline: none;
    color: #777777;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>