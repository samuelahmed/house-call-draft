import { Modal, Button } from "flowbite-react";
import { useState } from "react";

const JobModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button color="gray" onClick={() => setShowModal(true)}>
        Details
      </Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Companion Care - San Jose - $25/hour</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <p className="text-base font-semibold leading-relaxed text-black">
                <ul>Payment Overview</ul>
              </p>
              <ul>Total Paid: $142</ul>
              <ul>Date Paid: January 8, 2023</ul>
              <ul>Account: ***********9201 </ul>

              <p className="text-base font-semibold leading-relaxed text-black">
                <ul>Session Overview</ul>
              </p>
              <ul> Patient: Stephanie Marie</ul>
              <ul> Age: 65</ul>
              <ul>Address: 2830 West Field Drive, San Jose</ul>
              <ul>Compensation: $25/hour </ul>
              <ul>Total Compensation: $150</ul>
              <ul>Date: Saturday January 7, 2023</ul>
              <ul>Time: 11:00am - 5:00pm</ul>
              <ul>Scheduled: Dec 20, 2022 12:56pm</ul>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <ul> Patient Need: Companion Care</ul>
              <ul> Medical Notes: None</ul>
              Overview: Hi, I am stephanie, it would help a lot to have someone
              visit and talk a few times a week. My grandchildren moved away and
              I spend a lot of time alone now.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={() => setShowModal(false)}>
            Contact Patient
          </Button>
          <Button color="failure" onClick={() => setShowModal(false)}>
            Report Issue
          </Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobModal;
