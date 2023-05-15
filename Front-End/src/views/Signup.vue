<template>
    <form @submit.prevent="submitForm">
        <div class="formItem">
            <label for="first_name">Nombre</label>
            <input name="first_name" type="text" v-model="first_name" />
            <label v-if="1 === 2" class="errorMessage" for="first_name">El nombre es obligatorio</label>
        </div>

        <div class="formItem">
            <label for="last_name">Apellido</label>
            <input name="last_name" type="text" v-model="last_name" />
            <label v-if="1 === 2" class="errorMessage" for="last_name">El apellido es obligatorio</label>
        </div>

        <div class="formItem">
            <label for="age">Edad</label>
            <input name="age" type="number" v-model="age" />
        </div>

        <div class="formItem">
            <label for="email">E-mail</label>
            <input name="email" type="text" v-model="email" />
            <label v-if="1 === 2" class="errorMessage" for="email">El e-mail es obligatorio</label>
        </div>

        <div class="formItem">
            <label for="password1">Contraseña</label>
            <input name="password1" type="password" v-model="password1" />
            <label v-if="1 === 2" class="errorMessage" for="password1">La contraseña es obligatoria</label>
        </div>

        <div class="formItem">
            <label for="password2">Repetir contraseña</label>
            <input name="password2" type="password" v-model="password2" />
            <label v-if="1 === 2" class="errorMessage" for="first_name">Las contraseñas deben coincidir</label>
        </div>

        <div class="buttonContainer">
            <SecondaryButton>REGISTRARSE</SecondaryButton>
        </div>
    </form>
</template>

<script>
import { SecondaryButton } from '@/components';

export default {
    components: {
        SecondaryButton
    },
    data() {
        return {
            API_URL: import.meta.env.VITE_API_URL,
            first_name: null,
            last_name: null,
            age: null,
            email: null,
            password1: null,
            password2: null
        };
    },
    methods: {
        submitForm() {
            const newUser = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                age: this.age,
                password: this.password1
            }
            fetch(`${this.API_URL}/sessions/signup`, {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())
                .then(resp => {
                    if (!resp.error) return this.$router.push({ path: '/login' })
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
