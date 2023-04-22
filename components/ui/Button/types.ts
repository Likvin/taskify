import { ReactNode, MouseEvent, FocusEvent } from "react";
import {
	BUTTON_COLORS,
	BUTTON_SIZES,
	BUTTON_VARIANTS,
	BUTTON_TYPES,
} from "./constants";

type Values<T> = T[keyof T];
export type ButtonColors = Values<typeof BUTTON_COLORS>;
export type ButtonSizes = Values<typeof BUTTON_SIZES>;
export type ButtonVariants = Values<typeof BUTTON_VARIANTS>;
export type ButtonTypes = Values<typeof BUTTON_TYPES>;

export type StyledState = {
	hovered: boolean,
	disabled: boolean,
	pressed: boolean,
	focused: boolean,
	variant: ButtonVariants,
	size: ButtonSizes,
	loading: boolean
	color: ButtonColors,
	type: ButtonTypes
}


export type ButtonProps = {
	/**
	 * Содержимое кнопки
	 */
	children: ReactNode;
	/**
	 * Управление состоянием кнопки
	 */
	disabled?: boolean;
	/**
	 * Цвет кнопки
	 */
	color?: ButtonColors;
	/**
	 * Тип кнопки
	 */
	type?: ButtonTypes;
	/**
	 * Класс css
	 */
	className?: string;
	/**
	 * Размер кнопки
	 */
	size?: ButtonSizes;
	/**
	 * Вариант кнопки
	 */
	variant?: ButtonVariants;
	/**
	 * Загрука
	 */
	loading?: boolean;
	/**
	  * Обработчик, вызываемый при клике на кнопку
	  */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Обработчик, вызываемый при наведении курсора мыши
	 */
	onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Обработчик, вызываемый при потере наведения курсора мыши
	 */
	onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Обработчик, вызываемый при установке фокуса на кнопке
	 */
	onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
	/**
	 * Обработчик вызываемый при потере фокуса с кнопки
	 */
	onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
}