<template>
	<div class="image-and-text">
		<h2>Headline-2</h2>
		<div class="redactor">
			<p>
				У [Назва вашої студії дизайну] ми розуміємо силу добре влаштованого простору і його здатність підняти ваш
				бізнес
				на новий рівень. Спеціалізуючись на створенні індивідуальних рішень для бізнесів, таких як барбершопи,
				косметологічні клініки та стоматологічні практики, ми прагнемо покращити візуальний вигляд і
				функціональність
				вашого закладу.
			</p>
			<h3>Наша мета</h3>
			<p>
				У [Назва вашої студії дизайну] ми розуміємо силу добре влаштованого простору і його здатність підняти ваш
				бізнес
				на новий рівень. Спеціалізуючись на створенні індивідуальних рішень для бізнесів, таких як барбершопи,
				<b>
					косметологічні клініки та стоматологічні практики, ми прагнемо покращити візуальний вигляд і
					функціональність
					вашого закладу.
				</b>
			</p>
			<a href="#">
				У [Назва вашої студії дизайну] ми розуміємо силу добре влаштованого простору і його здатність підняти ваш
				бізнес
				на новий рівень. Спеціалізуючись на створенні індивідуальних рішень для бізнесів, таких як барбершопи,
				косметологічні клініки та стоматологічні практики, ми прагнемо покращити візуальний вигляд і
				функціональність
				вашого закладу.
			</a>
			<h2>Headline 2</h2>
			<h3>Headline 3</h3>
			<h4>Headline 4</h4>
			<h5>Headline 5</h5>
			<h6>Headline 6</h6>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h2 {
	color: var(--text-on-bg-on-default-text-primary);
	font-size: 34px;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	letter-spacing: -0.68px;
}

.redactor:deep {
	h2 {
		color: var(--text-on-bg-on-default-text-primary);
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	h3 {
		color: var(--text-on-bg-on-default-text-primary);
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	h4 {
		color: var(--text-on-bg-on-tone-text-primary);
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	h5 {
		color: var(--text-on-bg-on-tone-text-primary);
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	h6 {
		color: var(--text-on-bg-on-tone-text-primary);
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 140%;
	}

	p,
	li {
		color: var(--text-on-bg-on-default-text-primary);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 160%;
	}

	a {
		color: var(--text-on-bg-on-default-link);
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 160%;
		text-decoration-line: underline;
	}
}
</style>