import { Tabs } from "flowbite-react";
import ContactUs from "./helpDashboardComponents/contactUs";

const HelpDashboard = () => {

  return (
    <div className="">
      <Tabs.Group
        className="justify-center"
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item active={true} title="Support Documentation" >
          <div className="justify-items-center md:grid ">
            Support Documentation Page
          </div> 
        </Tabs.Item>

        <Tabs.Item title="Contact Support" >
          <div className="justify-items-center md:grid ">
            < ContactUs />
          </div>
        </Tabs.Item>

        <Tabs.Item title="Community Forums" >
          <div className="justify-items-center md:grid ">
            Community Forums page
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default HelpDashboard;
