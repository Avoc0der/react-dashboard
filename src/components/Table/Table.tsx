import React from 'react'
// Styles
import styled from 'styled-components'
import 'react-virtualized/styles.css'
// Components
import { AutoSizer, Column, Table } from 'react-virtualized'
import Card from '../Card/Card'
// Data
import { tableRows, tableColumns } from '../../utils/Data'
import { mediumGrey } from '../GlobalStyle/GlobalStyle'

type TableCellProps = {
    align: string
    header?: boolean
}

const ROW_HEIGHT = 48
const TableCell = styled.div<TableCellProps>`
    display: flex;
    color: black;
    ${({ align }) => align === 'right' && `flex-direction:row-reverse`}
`

type ReactVirtualizedTableProps = {
    columns: any
}

// eslint-disable-next-line react/prefer-stateless-function
class ReactVirtualizedTable extends React.Component<
    ReactVirtualizedTableProps,
    never
> {
    cellRenderer = ({ cellData, columnIndex }: any) => {
        const { columns } = this.props
        return (
            <TableCell align={columns[columnIndex].numeric ? 'right' : 'left'}>
                {cellData}
            </TableCell>
        )
    }

    headerRenderer = ({ label, columnIndex }: any) => {
        const { columns } = this.props
        return (
            <TableCell
                header
                align={columns[columnIndex].numeric ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        )
    }

    render(): JSX.Element {
        const { columns } = this.props
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={ROW_HEIGHT}
                        headerHeight={ROW_HEIGHT}
                        rowCount={tableRows.length}
                        rowGetter={({ index }) => tableRows[index]}
                        rowStyle={{
                            borderBottom: `1px solid ${mediumGrey}`,
                            boxSizing: 'border-box',
                        }}
                    >
                        {columns.map(
                            ({ dataKey, ...other }: any, index: any) => (
                                <Column
                                    key={dataKey}
                                    dataKey={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    cellRenderer={this.cellRenderer}
                                    {...other}
                                />
                            )
                        )}
                    </Table>
                )}
            </AutoSizer>
        )
    }
}

const VirtualizedTable = () => {
    return (
        <Card height={400}>
            <ReactVirtualizedTable columns={tableColumns} />
        </Card>
    )
}

export default VirtualizedTable
