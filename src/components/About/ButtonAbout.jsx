import "./About.css";
export default function ButtonAbout({ ButtonValue, GOTO }) {
	return <a href={GOTO} className="about_btn">{ButtonValue}</a>;
}
