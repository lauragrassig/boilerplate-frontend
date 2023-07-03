<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { getData } from '@/services/test.service'

import { onMounted } from 'vue'

onMounted(() => {
	getData('your-endpoint')
		.then((/*data*/) => {
			// Use the data here
		})
		.catch((/*error*/) => {
			// Handle the error here
		})
})
</script>

<template>
	<main>
		<TheWelcome />
	</main>
</template>
