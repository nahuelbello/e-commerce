<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    background-color: #8b8e8d;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #737372;
}

button:hover {
    background-color: #444645;
    transition: 0.12s;
}
</style>
