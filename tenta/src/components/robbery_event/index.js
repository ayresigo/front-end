import {
  Button,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function RobberyEvents(props) {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          {props.ambush ? <Th>Account</Th> : null}
          <Th>Robbery</Th>
          <Th>Participants</Th>
          <Th>Time Left</Th>
          <Th>Difficulty</Th>
          {props.myRobberies ? <Th>Claim</Th> : null}
        </Tr>
      </Thead>
      <Tbody>
        {props.myRobberies.map((robbery, id) => {
          return (
            <Tr>
              {props.ambush ? <Td>1234</Td> : null}
              <Td>{robbery.name}</Td>
              <Td>{robbery.participants}</Td>
              <Td>{robbery.duration}</Td>
              <Td>☆ ☆ ☆ ☆ ★</Td>
              {robbery.claimable ? <Td>claim</Td> : <Td>claimed</Td>}
            </Tr>
          );
        })}
      </Tbody>
      <Tfoot>
        <Tr>
          {props.ambush ? <Th>Account</Th> : null}
          <Th>Robbery</Th>
          <Th>Participants</Th>
          <Th>Time Left</Th>
          <Th>Difficulty</Th>
          {props.myRobberies ? <Th>Claim</Th> : null}
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default RobberyEvents;
