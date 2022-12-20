import { Table, Button, Modal } from "flowbite-react";
import { useState } from 'react';

const JobList = () => {

  const [showModal, setShowModal] = useState(false);

  function closeModal () {
    setShowModal(false)
  } 


  return (
    <>

    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Patient Need</Table.HeadCell>
        <Table.HeadCell>Location</Table.HeadCell>
        <Table.HeadCell>Compensation</Table.HeadCell>
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
          <Table.Cell>

          <Button onClick={()=>setShowModal(true)}>
             Toggle modal
             </Button>



                        <Modal
                          show={showModal}
                          // onClose={() => setShowModal(false)}
                        >
                          <Modal.Header>
                            Terms of Service
                          </Modal.Header>
                          <Modal.Body>
                            <div className="space-y-6">
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                              </p>
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                              </p>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={()=>setShowModal(false)}>
                              I accept
                            </Button>
                            <Button
                              color="gray"
                              onClick={()=>setShowModal(false)}
                            >
                              Decline
                            </Button>
                          </Modal.Footer>
                        </Modal>




          </Table.Cell>
        </Table.Row>

        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Mobility Support
          </Table.Cell>
          <Table.Cell>Milpitas</Table.Cell>
          <Table.Cell>$35 / hour</Table.Cell>
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
            Personal Care
          </Table.Cell>
          <Table.Cell>Mountain View</Table.Cell>
          <Table.Cell>$20 / hour</Table.Cell>
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
            Nutrition Assistance
          </Table.Cell>
          <Table.Cell>Milpitas</Table.Cell>
          <Table.Cell>$25 / hour</Table.Cell>
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
            Conversation
          </Table.Cell>
          <Table.Cell>Santa Clara</Table.Cell>
          <Table.Cell>$20 / hour</Table.Cell>
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
            Personal Care Services
          </Table.Cell>
          <Table.Cell>San Jose</Table.Cell>
          <Table.Cell>$40 / hour</Table.Cell>
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
            Specialized Home Care
          </Table.Cell>
          <Table.Cell>San Jose</Table.Cell>
          <Table.Cell>$50 / hour</Table.Cell>
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
            Adult Day Care
          </Table.Cell>
          <Table.Cell>Palo Alto</Table.Cell>
          <Table.Cell>$30 / hour</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Learn More
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </>

  );
};

export default JobList;
