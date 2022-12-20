import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards, HiInbox, HiUser } from "react-icons/hi";


const SideNav = () => {



  return (
    <div className="fixed z-30 w-64 shadow-sm">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/messages" icon={HiInbox}>
              Messages
            </Sidebar.Item>
            <Sidebar.Item href="/account" icon={HiUser}>
              Account
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/help" icon={HiViewBoards}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideNav;
