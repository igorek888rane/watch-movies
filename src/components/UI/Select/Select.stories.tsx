import Select from './Select'

export default {
	title: 'Select',
	component: Select,
}

const Template = arg => <Select {...arg} />

export const Default = Template.bind({})

Default.args = {
	name: 'Жанры',
	options: [
		'Вестерн',
		'Боевик',
		'Фантастика',
		'Комедия',
		'Детектив',
		'Триллер',
	],
}