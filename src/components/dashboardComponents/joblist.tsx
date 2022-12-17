import { Table } from 'flowbite-react'

const JobList = () => {

  return (
    <Table hoverable={true}>
    <Table.Head>
      <Table.HeadCell>
        Patient Need
      </Table.HeadCell>
      <Table.HeadCell>
        Location
      </Table.HeadCell>
      <Table.HeadCell>
        Special Needs
      </Table.HeadCell>
      <Table.HeadCell>
        Compensation
      </Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">
          Edit
        </span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Conversation & Bathing
        </Table.Cell>
        <Table.Cell>
          San Jose
        </Table.Cell>
        <Table.Cell>
          None
        </Table.Cell>
        <Table.Cell>
          $25 / hour
        </Table.Cell>
        <Table.Cell>
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Learn More
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Microsoft Surface Pro
        </Table.Cell>
        <Table.Cell>
          White
        </Table.Cell>
        <Table.Cell>
          Laptop PC
        </Table.Cell>
        <Table.Cell>
          $1999
        </Table.Cell>
        <Table.Cell>
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Magic Mouse 2
        </Table.Cell>
        <Table.Cell>
          Black
        </Table.Cell>
        <Table.Cell>
          Accessories
        </Table.Cell>
        <Table.Cell>
          $99
        </Table.Cell>
        <Table.Cell>
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  );

};

export default JobList;