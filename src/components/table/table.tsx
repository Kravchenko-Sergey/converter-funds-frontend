// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { TableContainer, Table, Thead, Tr, Th, Td } from '@chakra-ui/react'

type TableProps = {
	data: any
	columns: any
}

export const Table1 = ({ data, columns }: TableProps) => {
	const [sorting, setSorting] = useState([])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting: sorting
		},
		onSortingChange: setSorting
	} as any)

	return (
		<TableContainer>
			<Table variant='simple'>
				<Thead>
					{table.getHeaderGroups().map(headerGroup => (
						<Tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<Th
									key={header.id}
									style={header.column.columnDef.sortable && { cursor: 'pointer' }}
									onClick={header.column.columnDef.sortable && header.column.getToggleSortingHandler()}
									bgColor='#dee2f0'
								>
									<>
										{header.isPlaceholder ? null : (
											<div style={{ display: 'flex', alignItems: 'center', gap: '4px', minWidth: '124px' }}>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{
													{
														asc: header.column.columnDef.sortable && <FaChevronUp />,
														desc: header.column.columnDef.sortable && <FaChevronDown />
													}[header.column.getIsSorted() ?? '']
												}
											</div>
										)}
									</>
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<Tr key={row.id}>
							{row.getVisibleCells().map(cell => {
								if (cell.column.id === 'viewDetails') {
									return <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
								}
								return <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
							})}
						</Tr>
					))}
				</tbody>
			</Table>
		</TableContainer>
	)
}
