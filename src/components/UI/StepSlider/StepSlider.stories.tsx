import StepSlider from './StepSlider'

export default {
	title: 'StepSlider',
	component: StepSlider,
	argTypes: {
		value: {
			type: 'number',
			description: 'Значение слайдера',
			defaultValue: 2,
			options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			control: {
				type: 'radio',
			},
		},
	},
}

const Template = arg => <StepSlider {...arg} />

export const Default = Template.bind({})

Default.args = {
	steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	value: 2,
	name: 'По рейтингу',
}