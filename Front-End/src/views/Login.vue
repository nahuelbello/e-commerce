<template>
    <form @submit.prevent="submitForm">
        <div class="formItem">
            <label for="email">E-mail</label>
            <input name="email" type="text" v-model="email" />
            <label v-if="1 === 2" class="errorMessage" for="email">El e-mail no está registrado</label>
        </div>

        <div class="formItem">
            <label for="password">Contraseña</label>
            <input name="password" type="password" v-model="password" />
            <label v-if="1 === 2" class="errorMessage" for="password">La contraseña es incorrecta</label>
        </div>

        <div class="buttonContainer">
            <SecondaryButton>INICIAR SESIÓN</SecondaryButton>
        </div>
    </form>
</template>

<script>
import { SecondaryButton } from '@/components';
import { routerKey } from 'vue-router';

export default {
    components: {
        SecondaryButton
    },
    data() {
        return {
            API_URL: import.meta.env.VITE_API_URL,
            email: null,
            password: null
        };
    },
    methods: {
        submitForm() {
            const user = {
                email: this.email,
                password: this.password
            }
            fetch(`${this.API_URL}/sessions/login`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())
                .then(resp => {
                    if (!resp.error) return this.$router.push({ path: '/profile' })
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
form {
    margin: 4rem auto;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    background-color: #ffffff;
}

.formItem {
    margin: 1rem 0;
}

label {
    font-weight: bold;
    color: black;
}

input {
    display: block;
    width: 100%;
    font: inherit;
    margin-top: 0.5rem;
}

.errorMessage { 
    color: red;
}

.buttonContainer {
    margin-top: 2rem;
    text-align: right;
}
</style>
