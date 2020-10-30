import React, { useContext } from 'react'
// Styles
import styled from 'styled-components'
import 'react-virtualized/styles.css'
import { AutoSizer, Column, Table } from 'react-virtualized'
import { brandColor, mediumGrey } from '../GlobalStyle/GlobalStyle'
// Components
import Card from '../Card/Card'
// Data
import { tableRows, tableColumns } from '../../utils/Data'
// Context
import { ThemeContext } from '../Dashboard/Dashboard'

type TableCellProps = {
    align: string
    header?: boolean
    dark: boolean
}

const ROW_HEIGHT = 48
const TableCell = styled.div<TableCellProps>`
    display: flex;
    color: ${({ header, dark }) =>
        // eslint-disable-next-line no-nested-ternary
        dark ? (header ? brandColor : 'white') : 'black'};
    ${({ align }) => align === 'right' && `flex-direction:row-reverse`}
`

type ReactVirtualizedTableProps = {
    columns: any
    dark: boolean
}

// eslint-disable-next-line react/prefer-stateless-function
class ReactVirtualizedTable extends React.Component<
    ReactVirtualizedTableProps,
    never
> {
    cellRenderer = ({ cellData, columnIndex }: any) => {
        const { columns, dark } = this.props
        return (
            <TableCell
                dark={dark}
                align={columns[columnIndex].numeric ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        )
    }

    headerRenderer = ({ label, columnIndex }: any) => {
        const { columns, dark } = this.props
        return (
            <TableCell
                dark={dark}
                header
                align={columns[columnIndex].numeric ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        )
    }

    render(): JSX.Element {
        const { columns, dark } = this.props
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
                            borderBottom: `1px solid ${
                                dark ? 'grey' : mediumGrey
                            }`,
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

const VirtualizedTable = (): JSX.Element => {
    const [theme] = useContext(ThemeContext)
    const dark = theme === 'dark'
    return (
        <Card height={400} dark={dark}>
            <ReactVirtualizedTable dark={dark} columns={tableColumns} />
        </Card>
    )
}

export default VirtualizedTable
