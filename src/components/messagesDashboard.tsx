import MessagePreview from "./dashboardComponents/messagePreview";
import { Tabs } from "flowbite-react";
import FriendListPreview from "./dashboardComponents/friendListPreview";

//When closing screen the Sidebar Menu does not open / close anymore.

const MessagesDashboard = () => {
  return (
    <>
      <Tabs.Group
        className="justify-center"
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item active={true} title="Message">
        <MessagePreview />

        </Tabs.Item>
        <Tabs.Item title="Connection List">
          <FriendListPreview />
        </Tabs.Item>
      </Tabs.Group>
    </>
  );
};

export default MessagesDashboard;
