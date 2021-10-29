import { useEffect, useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const mainStyle = {
}

function TeamsTable() {

	const [teamData, setTeamData] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const teamDataResponse = await fetch(`http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%272021%27`);
			const teamData = await teamDataResponse.json();
			setTeamData(teamData.team_all_season.queryResults.row);
		}
		loadData();
	}, [])

	return (
		<div className="TeamsTable" style={mainStyle}>
			<div>
				<TableContainer component={Paper} style={{maxHeight: 500, minWidth: 900}}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Team Name</TableCell>
								<TableCell align="right">City</TableCell>
								<TableCell align="right">Venue</TableCell>
								<TableCell align="right">League</TableCell>
								<TableCell align="right">Division</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{teamData.map((row) => (
								<TableRow
									key={row.mlb_org}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.mlb_org}
									</TableCell>
									<TableCell align="right">{row.city}</TableCell>
									<TableCell align="right">{row.venue_name}</TableCell>
									<TableCell align="right">{row.league}</TableCell>
									<TableCell align="right">{row.division}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export default TeamsTable;
