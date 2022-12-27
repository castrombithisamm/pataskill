import React, { useEffect } from "react";
import { ImBookmarks } from "react-icons/im";
import SectionHead from "./SectionHead";
import { programs } from "../data";

import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";
// import Modal from './components/Modal'
import axios from "axios";
import { useState } from "react";
import { SiReadthedocs } from "react-icons/si";
import { SiLit } from "react-icons/si";

const Programs = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/api/tasks/")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setTasks(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<section className="programs">
				<div className="container programs__container">
					<SectionHead icon={<ImBookmarks />} title="Programs" />
					<div className="programs__wrapper">
						{tasks.map(({ title, detail, id }) => {
							return (
								<Card className="programs__program" key={id}>
									<span>{<SiReadthedocs />}</span>
									<h4>{title}</h4>
									<small>{detail}</small>
									<Link key={id} to={"/courses"} className="btn sm">
										Learn More
										<GiArmoredBoomerang />
									</Link>
								</Card>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
};

export default Programs;
