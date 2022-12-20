import { Table } from "flowbite-react";
import UpcomingJobModal from "./upcomingJobModal";

const UpcomingJobs = () => {
  return (
    <div className="w-full	">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Patient Need</Table.HeadCell>
          <Table.HeadCell>Compensation</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Time</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Companion Care
            </Table.Cell>
            <Table.Cell>$150</Table.Cell>
            <Table.Cell>2830 West Field Drive, San Jose</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <UpcomingJobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Mobility Support
            </Table.Cell>
            <Table.Cell>$240</Table.Cell>
            <Table.Cell>1800 Strawberry Ave, San Jose</Table.Cell>
            <Table.Cell>Monday January 9, 2023</Table.Cell>
            <Table.Cell>3:00pm - 11:00pm</Table.Cell>
            <Table.Cell>
              <UpcomingJobModal />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default UpcomingJobs;
