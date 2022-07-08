import { Story, Meta } from '@storybook/react'
import {
	ChipSelector as ChipSelectorComponent,
	ChipSelectorProps,
} from './chip-selector'

export default {
	title: 'Chip Selector',
	component: ChipSelectorComponent,
	args: {
		label: 'Hello world',
	},
} as Meta

const Template: Story<ChipSelectorProps> = (args) => (
	<ChipSelectorComponent {...args} />
)

export const ChipSelector = Template.bind({})
