import Button from '@mui/material/Button';
import homeImage from './images/desert.jpg';
import { Link } from 'react-router-dom';

const appStyle = {
	backgroundImage: `url(${homeImage})`,
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
	marginTop: '14%'
}

const buttonContainerStyle = {
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	paddingLeft: '2em'
}

const buttonStyle = {
	marginRight: '2em',
	color: '#123C69',
}

function Home() {
	return (
		<div className="Home" style={appStyle}>
			<div style={titleContainerStyle}>
				<h1 style={titleStyle}>REACT EXPERIMENTS</h1>
			</div>
			<div style={buttonContainerStyle}>
				<Button style={buttonStyle} variant="text" to="/table" component={Link} >Table</Button>
				<Button style={buttonStyle} variant="text" to="/graph" component={Link} >Graph</Button>
				<Button style={buttonStyle} variant="text" to="/something" component={Link} >Something</Button>
			</div>
		</div>
	);
}

export default Home;
