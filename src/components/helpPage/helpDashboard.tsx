import { Tabs } from "flowbite-react";
import ContactUs from "./contactUs";
import SupportDocumentation from "./supportDocumentation";
import Forums from "./forums";

const HelpDashboard = () => {
  return (
    <div className="">
      <Tabs.Group
        className="justify-center"
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item active={true} title="Support Documentation">
          <div className="justify-items-center md:grid ">
            <SupportDocumentation />
          </div>
        </Tabs.Item>

        <Tabs.Item title="Contact Support">
          <div className="justify-items-center md:grid ">
            <ContactUs />
          </div>
        </Tabs.Item>

        <Tabs.Item title="Community Forums">
          <div className="justify-items-center md:grid ">
            <Forums />
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default HelpDashboard;
