import { Table } from "@nextui-org/react";

export default function StoreRow({ city, data, total, row}) {
  
  return (
    <Table.Row key={row}>
      <Table.Cell>{city}</Table.Cell>
      {
        data.map((hour, index) => (<Table.Cell key={`Table-${city}${index}`}>{hour}</Table.Cell>))
      }
      <Table.Cell>{total}</Table.Cell>
    </Table.Row>
  )
}