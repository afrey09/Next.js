// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import { Table } from "@nextui-org/react";
import StoreRow from "./StoreRow";

export default function MyTable() {

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  const seattleData = [315, 278, 177, 234, 240, 164, 234, 177, 177, 328, 366, 391, 397, 171, 315];

  const seattle = 'Seattle'
  const seattleTotal = 3964

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>City</Table.Column>
        {
          hours.map((hour, index) => (<Table.Column key={`Table-${index}`}>{hour}</Table.Column>))
        }
        <Table.Column>Total Sold</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>{seattle}</Table.Cell>
          {
            seattleData.map((hour, index) => (<Table.Cell key={`Table-${index}`}>{hour}</Table.Cell>))
          }
          <Table.Cell>{seattleTotal}</Table.Cell>
        </Table.Row>
        <StoreRow city={seattle} data={seattleData} total={seattleTotal} row={2}/>
        {/* <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  );
}
