<template>
	<div class="colors">
		<div
			v-for="color in colors"
			:key="color"
			:style="{ 'background-color': `var(${color})` }"
			>{{ color }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				'--brand-1-1',
				'--brand-1-100',
				'--brand-1-200',
				'--brand-1-300',
				'--brand-1-400',
				'--brand-1-50',
				'--brand-1-500',
				'--brand-1-600',
				'--brand-1-700',
				'--brand-1-800',
				'--brand-1-900',
				'--brand-2-1',
				'--brand-2-100',
				'--brand-2-200',
				'--brand-2-300',
				'--brand-2-400',
				'--brand-2-50',
				'--brand-2-500',
				'--brand-2-600',
				'--brand-2-700',
				'--brand-2-800',
				'--brand-2-900',
				'--brand-3-300',
				'--brand-3-700',
				'--gray-1',
				'--gray-100',
				'--gray-200',
				'--gray-300',
				'--gray-400',
				'--gray-50',
				'--gray-500',
				'--gray-600',
				'--gray-700',
				'--gray-800',
				'--gray-900',
				'--gray-opacity-0',
				'--gray-opacity-12',
				'--gray-opacity-20',
				'--gray-opacity-30',
				'--gray-opacity-40',
				'--gray-opacity-60',
				'--gray-opacity-8',
				'--gray-opacity-80',
				'--system-green-100',
				'--system-green-200',
				'--system-green-300',
				'--system-green-400',
				'--system-green-50',
				'--system-green-500',
				'--system-green-600',
				'--system-green-700',
				'--system-green-800',
				'--system-green-green-900',
				'--system-orange-100',
				'--system-orange-200',
				'--system-orange-300',
				'--system-orange-400',
				'--system-orange-50',
				'--system-orange-500',
				'--system-orange-600',
				'--system-orange-700',
				'--system-orange-800',
				'--system-orange-900',
				'--system-red-100',
				'--system-red-200',
				'--system-red-300',
				'--system-red-400',
				'--system-red-50',
				'--system-red-500',
				'--system-red-600',
				'--system-red-700',
				'--system-red-800',
				'--system-red-red-900',
				'--white-opacity-0',
				'--white-opacity-100',
				'--white-opacity-12',
				'--white-opacity-20',
				'--white-opacity-30',
				'--white-opacity-40',
				'--white-opacity-60',
				'--white-opacity-8',
				'--white-opacity-80',
				'--white-opacity-90',
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.colors {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 20px;
}

.colors div {
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>