import { StyledHome } from './styles'
import { HomeProps } from './types'
import React, { useEffect } from 'react'
import Head from 'next/head'

export const Home = (props: HomeProps) => {
	return (
		<>
			<Head>
				<title>Taskify</title>
			</Head>
			<StyledHome>Once you have started, go to the end</StyledHome>
		</>
	)
}