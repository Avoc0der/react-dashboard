import React from 'react'
// Styles
import styled from 'styled-components'
import 'react-virtualized/styles.css'
// Components
import { AutoSizer, Column, Table } from 'react-virtualized'
import Card from '../Card/Card'
// Data
import { tableRows, tableColumns } from '../../utils/Data'

const ROW_HEIGHT = 48

type ReactVirtualizedTableProps = {
    columns: any
}

// eslint-disable-next-line react/prefer-stateless-function
class ReactVirtualizedTable extends React.Component<
    ReactVirtualizedTableProps,
    never
> {
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
                    >
                        {columns.map(({ dataKey, ...other }: any) => (
                            <Column
                                key={dataKey}
                                dataKey={dataKey}
                                {...other}
                            />
                        ))}
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
