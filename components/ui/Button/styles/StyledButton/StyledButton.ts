import styled from "@emotion/styled"
import { BUTTON_COLORS, BUTTON_VARIANTS } from "../../constants"
import { StyledButtonProps } from "./types"
import { getTextStyles } from "./utils"

export const StyledButton = styled("button")<StyledButtonProps>(({ styledState }) => {
	const { variant, color } = styledState


	return {
		// базовые стили кнопки
		display: "flex",
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
		...(variant === BUTTON_VARIANTS.OUTLINED && {
			color: "yellow"
		}),
		...(variant === BUTTON_VARIANTS.CONTAINED && {
			color: "blue"
		}),
		...(variant === BUTTON_VARIANTS.TEXT && getTextStyles(color)),
	}
})