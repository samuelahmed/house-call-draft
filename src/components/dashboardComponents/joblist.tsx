import { Table } from "flowbite-react";
import JobModal from "../dashboardComponents/jobModal";

const JobList = () => {

  return (
    <div className="w-full">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Patient Need</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Compensation</Table.HeadCell>
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
            <Table.Cell>San Jose</Table.Cell>
            <Table.Cell>$25 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Mobility Support
            </Table.Cell>
            <Table.Cell>Milpitas</Table.Cell>
            <Table.Cell>$35 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Personal Care
            </Table.Cell>
            <Table.Cell>Mountain View</Table.Cell>
            <Table.Cell>$20 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Nutrition Assistance
            </Table.Cell>
            <Table.Cell>Milpitas</Table.Cell>
            <Table.Cell>$25 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Conversation
            </Table.Cell>
            <Table.Cell>Santa Clara</Table.Cell>
            <Table.Cell>$20 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Personal Care Services
            </Table.Cell>
            <Table.Cell>San Jose</Table.Cell>
            <Table.Cell>$40 / hour</Table.Cell>
            <Table.Cell>Saturday January 7, 2023</Table.Cell>
            <Table.Cell>11:00am - 5:00pm</Table.Cell>
            <Table.Cell>
              <JobModal />
            </Table.Cell>
          </Table.Row>

          {/* last two rows hidden for now testing style */}
          {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Specialized Home Care
          </Table.Cell>
          <Table.Cell>San Jose</Table.Cell>
          <Table.Cell>$50 / hour</Table.Cell>
          <Table.Cell>
          < JobModal />

          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Adult Day Care
          </Table.Cell>
          <Table.Cell>Palo Alto</Table.Cell>
          <Table.Cell>$30 / hour</Table.Cell>
          <Table.Cell>
          < JobModal />
          </Table.Cell>
        </Table.Row> */}
        </Table.Body>
      </Table>
    </div>
  );
};

export default JobList;
