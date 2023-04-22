import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import { MouseEvent, FC, FocusEvent } from "react";
import { BUTTON_COLORS, BUTTON_MODES, BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from "./constants";
export {
	BUTTON_COLORS,
	BUTTON_SIZES,
	BUTTON_VARIANTS,
	BUTTON_TYPES,
	BUTTON_MODES,
} from "./constants";

export const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		type = BUTTON_TYPES.BUTTON,
		color = BUTTON_COLORS.PRIMARY,
		size = BUTTON_SIZES.MEDIUM,
		variant = BUTTON_VARIANTS.CONTAINED,
		mode = BUTTON_MODES.LIGHT,
		onClick,
		onMouseEnter,
		onMouseLeave,
		onFocus,
		onBlur,
		loading = false,
		className,
		disabled = false
	} = props

	const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
		onMouseEnter?.(event);
	};

	const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
		onMouseLeave?.(event);
	};

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		onClick?.(event);
	};

	const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
		onBlur?.(event);
	}

	const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
		onFocus?.(event);
	}

	return (
		<StyledButton
			type={type}
			color={color}
		>{children}</StyledButton>
	)
}