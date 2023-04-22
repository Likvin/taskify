import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Card } from "../Card"

export default {
	title: "Test/Components/Card",
	component: Card
} as ComponentMeta<typeof Card>

export const Default: ComponentStory<typeof Card> = (args) => <Card {...args}> Lolka </Card>;
