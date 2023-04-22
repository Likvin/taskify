import { CardProps, StyledState } from "./types";
import { StyledCard } from "./styles";
import { FC } from "react";

export const Card: FC<CardProps> = (props) => {
	const {
		children,
		active = false,
		hasHover = false,
		className,
		onClick,
		onMouseEnter,
		onMouseLeave
	} = props

	const styledState: StyledState = {
		active,
		hasHover
	}

	return (
		<StyledCard
			styledState={styledState}
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</StyledCard>
	)
}


