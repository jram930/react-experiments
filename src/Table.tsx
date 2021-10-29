import baseballImage from './images/baseball.jpg';
import TeamsTable from './TeamsTable';

const appStyle = {
	height: '100%',
	backgroundColor: '#333333'
}

const backgroundStyle = {
	backgroundImage: `url(${baseballImage})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '100%',
	opacity: '50%'
}

const tableContainerStyle = {
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	paddingTop: '10%'
}

function Table() {
	return (
		<div className="Table" style={appStyle}>
			<div style={backgroundStyle}>
				<div style={tableContainerStyle}>
				<TeamsTable />
				</div>
			</div>
		</div>
	);
}

export default Table;
