<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'

const props = defineProps({ name: String })

const isProfilePopoutOpen = useState('profilePopoutOpen', () => false) // Used to hide the dropdown when the profile closes
</script>

<template>
    <div class="dropdown">
        <a class="button">{{ props.name }} <span class="align-right"><i class="bi bi-chevron-down"></i></span></a>
        <div ref="content" class="content hidden">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
a.button {
    display: block;
    text-align: left;
    
    text-decoration: none;

    padding: 1rem;
}

span.align-right {
    float: right;
}

a.dropdown:hover {
    text-decoration: none;
    cursor: pointer;
}

div.content {
    height: auto;
    overflow-y: hidden;

    transition-property: height;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
}

div.content.hidden {
    height: 0;
}
</style>