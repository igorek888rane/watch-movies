import Button from './Button'
import { ButtonPropsTypes } from './types'

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		type: {
			type: 'string',
			defaultValue: 'Button',
			description: 'Тип Button или Link',
			options: ['Button', 'Link'],
			control: {
				type: 'radio',
			},
		},
	},
}

const Template = (arg: ButtonPropsTypes) => <Button {...arg} />

export const Default = Template.bind({})
Default.args = {
	type: 'Button',
	url: '',
	imgLeft: '',
	imgRight: '',
	text: 'Смотреть 30 дней за 1 ₽',
	container: {
		background: '#ea003d',
		border: 'none',
		color: 'white',
		padding: '7px 11px',
		borderRadius: '11px',
		fontFamily: 'iviSans',
		fontWeight: '600',
	},
}
