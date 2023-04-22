import { ReactNode, MouseEvent } from "react";

export type StyledState = {
	hasHover: boolean,
	active: boolean
}

export type CardProps = {
	/**
	 * Выбрана ли карточка
	 */
	active?: boolean,
	/**
	 * Изменение состоятния карточки
	 */
	hasHover?: boolean
	/**
	 * Содержимое карточки
	 */
	children: ReactNode;
	/**
	 * Класс css
	 */
	className?: string;
	/**
	 * Обработчик, вызываемый при клике на кнопку
	 */
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
	/**
	 * Обработчик, вызываемый при наведении курсора мыши
	 */
	onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
	/**
	 * Обработчик, вызываемый при потере наведения курсора мыши
	 */
	onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
}