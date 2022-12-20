import { Modal, Button } from "flowbite-react";
import { useState } from "react";

const JobModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button color="gray" onClick={() => setShowModal(true)}>
        Learn More
      </Button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Companion Care - San Jose - $25/hour</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <ul> Patient: Stephanie</ul>
              <ul> Age: 65</ul>
              <ul> Patient Need: Companion Care</ul>
              <ul>Location: San Jose</ul>
              <ul>Compensation: $25/hour</ul>
              <ul>Date: Weekly on Wednesday and Thursday afternoons</ul>
              <ul> Medical Notes: None</ul>
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Overview: Hi, I am stephanie, it would help a lot to have someone
              visit and talk a few times a week. My grandchildren moved away and
              I spend a lot of time alone now.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>Schedule Session</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobModal;
