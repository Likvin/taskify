import { ButtonProps, StyledState } from "./types";
import { StyledButton } from "./styles";
import { MouseEvent, FC, FocusEvent, useState } from "react";
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from "./constants";
export {
	BUTTON_COLORS,
	BUTTON_SIZES,
	BUTTON_VARIANTS,
	BUTTON_TYPES,
} from "./constants";

export const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		type = BUTTON_TYPES.BUTTON,
		color = BUTTON_COLORS.PRIMARY,
		size = BUTTON_SIZES.MEDIUM,
		variant = BUTTON_VARIANTS.TEXT,
		onClick,
		onMouseEnter,
		onMouseLeave,
		onFocus,
		onBlur,
		loading = false,
		className,
		disabled = false
	} = props

	const [hovered, setHover] = useState(false)
	const [pressed, setPressed] = useState(false)
	const [focused, setFocused] = useState(false)

	const styledState: StyledState = {
		hovered,
		disabled,
		pressed,
		focused,
		variant,
		loading,
		size,
		color,
		type
	}

	const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
		onMouseEnter?.(event);
		setHover(true)
	};

	const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
		onMouseLeave?.(event);
		setHover(false)
	};

	const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
		onBlur?.(event);
		setFocused(false)
	}

	const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
		onFocus?.(event);
		setFocused(true)
	}

	const handleMouseUp = (event: MouseEvent<HTMLButtonElement>) => {
		setPressed(false)
	}

	const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
		setPressed(true)
	}

	return (
		<StyledButton
			styledState={styledState}
			onMouseUp={handleMouseUp}
			onMouseDown={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onClick={onClick}
			className={className}
		>{children}</StyledButton>
	)
}