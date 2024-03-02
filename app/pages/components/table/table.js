import React from 'react';
import { CodeBlock } from 'react-code-blocks';

import Button from '../../../../components/button/button';
import Table from '../../../../components/table/table';

function PageTable() {
	return (
		<div className="page">
			<header>
				<h1>Table</h1>
			</header>
			<div className="page-body">
				<section>
					<h3>Basic Table</h3>
					<div className="section-content">
						<Table
							data={{
								columns: [
									{ id: 'id', name: 'Id' },
									{ id: 'name', name: 'Name' },
									{ id: 'age', name: 'Age' },
								],
								rows: [
									{ values: { id: '1', name: 'John Doe', age: 42 } },
									{ values: { id: '2', name: 'Jane Smith', age: 33 } }
								]
							}}
						/>
						<br />
						<CodeBlock
							text={
`let data= {
  columns: [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    { id: 'age', name: 'Age' },
  ],
  rows: [
    { values: { id: '1', name: 'John Doe', age: 42 } },
    { values: { id: '2', name: 'Jane Smith', age: 33 } }
  ]
};

<Table data={data} />`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Columns can have size</h3>
					<div className="section-content">
						<Table
							data={{
								columns: [
									{ id: 'id', name: 'Id', size: '40px' },
									{ id: 'name', name: 'Name', size: '2fr' },
									{ id: 'age', name: 'Age', size: '1fr' },
								],
								rows: [
									{ values: { id: '1', name: 'John Doe', age: 42 } },
									{ values: { id: '2', name: 'Jane Smith', age: 33 } }
								]
							}}
						/>
						<br />
						<CodeBlock
							text={
`let data= {
  columns: [
    { id: 'id', name: 'Id', size: '40px' },
    { id: 'name', name: 'Name', size: '2fr' },
    { id: 'age', name: 'Age', size: '1fr' },
  ],
  rows: [
    { values: { id: '1', name: 'John Doe', age: 42 } },
    { values: { id: '2', name: 'Jane Smith', age: 33 } }
  ]
};

<Table data={data} />`}
							language="jsx"
						/>
					</div>
				</section>

				<section>
					<h3>Columns can have custom content</h3>
					<div className="section-content">
						<Table
							data={{
								columns: [
									{ id: 'id', name: 'Id' },
									{ id: 'name', name: 'Name' },
									{
										id: 'edit',
										name: 'Edit',
										render: ({ index, label }) => (
											<Button
												theme="primary"
												size="sm"
												onClick={() => console.log('edit row index', index)} // eslint-disable-line no-console
											>
												{label}
											</Button>
										)
									},
								],
								rows: [
									{ values: { id: '1', name: 'John Doe', edit: { index: 0, label: 'Edit' } } },
									{ values: { id: '2', name: 'Jane Smith', edit: { index: 1, label: 'Edit' } } }
								]
							}}
						/>
						<br />
						<CodeBlock
							text={
`let data= {
  columns: [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    {
      id: 'edit',
      name: 'Edit',
      render: ({ index, label }) => (
        <Button
          theme="primary"
          size="sm"
          onClick={() => console.log('edit row index', index)}
        >
          {label}
        </Button>
      )
    },
  ],
  rows: [
    { values: { id: '1', name: 'John Doe', edit: { index: 0, label: 'Edit' } } },
    { values: { id: '2', name: 'Jane Smith', edit: { index: 1, label: 'Edit' } } }
  ]
};

<Table data={data} />`}
							language="jsx"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default PageTable;