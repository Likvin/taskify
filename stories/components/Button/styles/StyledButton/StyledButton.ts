import styled from "@emotion/styled"
import { BUTTON_COLORS } from "../../constants"
import { StyledButtonProps } from "./types"

export const StyledButton = styled("button")<StyledButtonProps>(({ color }) => ({
	width: 99,
	height: 42,
	color: "white",
	backgroundColor: "black",
	borderRadius: 5,
	...(color === BUTTON_COLORS.PRIMARY && {
		color: "blue"
	})
}))