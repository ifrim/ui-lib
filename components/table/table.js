import React from 'react';
import './table.css';

function Table({ className, data }) {

	if (!data) return null;

	let templateColumns = data.columns.map(c => c.size ?? 'auto').join(' ');
	return (
		<div
			className={['ui-table', className].filter(Boolean).join(' ')}
			style={{ gridTemplateColumns: templateColumns }}
		>
			<div className="ui-table-header">
				{data.columns.map(col => (
					<div
						key={col.id}
						className="ui-table-column-header"
						style={{
							justifyContent: col.align ?? 'left'
						}}
					>
						{col.name}
					</div>
				))}
			</div>
			<div className="ui-table-body">
				{data.rows.map((row, ri) => (
					<div
						key={row.id ?? ri}
						className="ui-table-row"
					>
						{data.columns.map(col => (
							<div
								key={col.id}
								className="ui-table-cell"
								style={{
									justifyContent: col.align ?? 'left'
								}}
							>
								{col.render ? col.render(row.values[col.id]) : row.values[col.id]}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default Table;
