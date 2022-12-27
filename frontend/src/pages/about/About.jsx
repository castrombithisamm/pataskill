import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.svg";
import StoryImage from "../../images/about1.svg";
import VisionImage from "../../images/about2.svg";
import MissionImage from "../../images/about3.svg";
import "./about.css";

const About = () => {
	return (
		<>
			<Header title="About Us" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit
				nam fugiat molestiae, rem labore.
			</Header>

			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="Our Story Image" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
							provident! Nisi eveniet, nihil tempora assumenda perspiciatis
							quasi minima, sunt voluptatibus, ab quae aut sed facere!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
						</p>
						<p>
							reprehenderit aut nesciunt minima, aspernatur quae provident! Nisi
							eveniet, nihil tempora assumenda perspiciatis
						</p>
					</div>
				</div>
			</section>
			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
							provident! Nisi eveniet, nihil tempora assumenda perspiciatis
							quasi minima, sunt voluptatibus, ab quae aut sed facere!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="Our Vision Image" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="Our Mission Image" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
							provident! Nisi eveniet, nihil tempora assumenda perspiciatis
							quasi minima, sunt voluptatibus, ab quae aut sed facere!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Mollitia, quasi! Odit quibusdam dolore illo praesentium velit
							soluta sequi reprehenderit aut nesciunt minima, aspernatur quae
						</p>
						<p>
							reprehenderit aut nesciunt minima, aspernatur quae provident! Nisi
							eveniet, nihil tempora assumenda perspiciatis
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
