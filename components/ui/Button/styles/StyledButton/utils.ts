import { CSSObject } from "@emotion/react";
import { ButtonColors } from "../../types";

// функции должны принимать styledState
export const getTextStyles = (color: ButtonColors): CSSObject => ({
	// все возможные стили для кнопки
	backgroundColor: "inherit",
	borderColor: "inherit",
	color: "red"
})