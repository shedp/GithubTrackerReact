import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from 'react-redux'
import { Chart as ChartJS, ArcElement, Tooltip, Colors } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Colors);

const LanguagesChart = ({data}) => {
    const values = Object.values(data)
	console.log(values)
	const labels = Object.keys(data)
	console.log(labels)


    return(
		<div style={{ height: "8rem", display: "flex", justifyContent: "center" }}>
			<Doughnut
				data={{
					labels: labels,
					datasets: [
						{
							label: "Number of repositories",
							data: values,
							backgroundColor: [
								'rgb(255, 99, 132)',
								'rgb(54, 162, 235)',
								'rgb(255, 205, 86)'
							  ],
							borderWidth: 1,
						},
					],
				}}
			/>
		</div>
    )
    
}

export default LanguagesChart;
