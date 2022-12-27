import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
						eveniet voluptatem enim minima aut doloremque vero at perferendis
						beatae!
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/in/castro-mbithi-1129b4b8/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>

						<a
							href="https://www.facebook.com/castro.sammy/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://www.instagram.com/castrombithi/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
						<a
							href="https://twitter.com/castrosammy1"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/courses">Courses</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/s">FAQs</Link>
				</article>
				<article>
					<h4>Get in Touch</h4>
					<Link to="/contact">Contact</Link>
					<Link to="/s">Support</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small>
					&copy; PATASKILL {new Date().getFullYear()} All Rights Reserved
				</small>
			</div>
		</footer>
	);
};

export default Footer;
