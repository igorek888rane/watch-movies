import Input from './Input'

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		type: {
			type: 'string',
			description: 'Тип инпута',
			defaultValue: 'text',
			options: ['text', 'password'],
			control: {
				type: 'radio',
			},
		},
	},
}

const Template = arg => <Input {...arg} />

export const Default = Template.bind({})

Default.args = {
	type: 'text',
	name: 'value',
	label: 'Label',
	placeholder: 'Введите значение',
}