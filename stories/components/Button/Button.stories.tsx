import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "./Button"

export default {
	title: "Test/Components/Button",
	component: Button
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args} />;
