/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';


const row = (x, i, header) =>
	// Rendering each row of the table
	<TableRow key={`tr-${i}`} >
		{header.map((y, k) =>
			<TableRowColumn key={`trc-${k}`}>
				{x[y.prop]}
			</TableRowColumn>
		)}
	</TableRow>;


export default ({ data, header, handleSort }) =>

	<Table>
		<TableHeader>
			<TableRow>
				{header.map((x, i) =>
					<TableHeaderColumn key={`thc-${i}`}>
						<div onClick={() => handleSort(x.prop)}>{x.name}</div>
					</TableHeaderColumn>
				)}
			</TableRow>
		</TableHeader>
		<TableBody>
			{data.map((list, i) => row(list, i, header))}
		</TableBody>
	</Table>;


