import { StyledCardProps } from "./types"
import styled from "@emotion/styled"

export const StyledCard = styled("div")<StyledCardProps>(({ styledState }) => {
	const { active, hasHover } = styledState
	return {
		// базовые стили 
		border: "1px solid gray",
		padding: 6,
		background: "white",
		boxSizing: "border-box",
		...(active && {
			borderColor: "blue"
		}),
		...(hasHover && {
			":hover": {
				borderColor: "blue"
			}
		})
	}
})