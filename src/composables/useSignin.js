import { ref } from 'vue';
import { projectAuth } from '@/firebase/config';

const error = ref(null);
const signin = async (email, password) => {
    error.valeu = null;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        return res;
    } catch (err) {
        error.value = 'Incorrect sign in credentials!';
    }
}

const useSignin = () => {
    return { error, signin };
}

export default useSignin;