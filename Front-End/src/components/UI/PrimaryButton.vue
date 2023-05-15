<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    background-color: #41B883;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #737372;
}

button:hover {
    background-color: rgb(55, 141, 98);
    transition: 0.12s;
}
</style>
