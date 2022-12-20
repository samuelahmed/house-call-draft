import { Sidebar } from "flowbite-react";
import { HiChartPie, HiViewBoards, HiInbox, HiUser } from "react-icons/hi";


// ISSUE 1: MENU BREAKS AFTER SCROLL ON REAL IPHONE TEST. NOT REPLICATED ON BROWSER PHONE MODE. RESOLVE ASAP
  // PROBABLY HAS TO DO WITH THE MOBILE CHECKING IN PAGES BUT SINCE 4X PUTTING ISSUE HERE. 
// ISSUE 2: NEED TO FIND SINGLE HOME FOR MOBILE CHECKING CODE AND NAV OPEN / CLOSE



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
