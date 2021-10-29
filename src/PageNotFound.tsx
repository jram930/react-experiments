import lostImage from './images/lost.jpg';

const appStyle = {
	backgroundImage: `url(${lostImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '100%'
}

const titleContainerStyle = {
	height: '40%',
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex'
}

const titleStyle = {
	color: "#AC3B61",
	marginTop: '10%'
}

function PageNotFound() {
	return (
		<div className="PageNotFound" style={appStyle}>
			<div style={titleContainerStyle}>
				<h1 style={titleStyle}>Help, I'm lost!</h1>
			</div>
		</div>
	);
}

export default PageNotFound;
