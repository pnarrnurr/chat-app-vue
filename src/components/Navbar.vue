<template>
    <nav v-if="user">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Currently logged in as... {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
export default {
    setup() {
        const { logout, error } = useLogout();
        const { user } = getUser();

        const handleClick = async () => {
            await logout();
            // if (!error.value) {
            //     console.log("user logged out");
            // }
        }

        return { error, handleClick, user };
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444444;
    text-align: start;
}

nav p.email {
    font-size: 14px;
    color: #888888;
}
</style>