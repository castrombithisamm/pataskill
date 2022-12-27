import "./courses.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/about1..jpg";
import Card from "../../UI/Card";
import { courses } from "../../data";
import "./courses.css";

const Courses = () => {
	return (
		<>
			<Header title="Courses" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, impedit.
			</Header>
			<section className="courses">
				<div className="container courses__container">
					{courses.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="course">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`$${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available }, index) => {
									return (
										<p key={index} className={!available ? "disabled" : ""}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Course</button>
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Courses;
