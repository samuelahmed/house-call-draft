import { type NextPage } from "next";
import JobList from "./dashboardComponents/joblist";
import SearchBar from "./dashboardComponents/searchBar";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Pagination, Tabs } from "flowbite-react";

const CaregiverDashboard: NextPage = () => {
  
    //empty function for pagination
    const onPageChange = () => ({});

  return (
    <>
      <div className="px-4 md:px-72">
        <div className="justify-items-center md:grid">
          <div className="pb-6 text-2xl">Caretaker Dashboard</div>

          <Tabs.Group
            className="justify-center"
            aria-label="Tabs with icons"
            style="underline"
          >
            <Tabs.Item active={true} title="Find Patient" icon={HiUserCircle}>
              <div className="justify-items-center md:grid">
                <SearchBar />
                <JobList />
                <Pagination
                  currentPage={1}
                  layout="pagination"
                  onPageChange={onPageChange}
                  showIcons={true}
                  totalPages={1000}
                  previousLabel="Go back"
                  nextLabel="Go forward"
                />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Scheduled Sessions" icon={MdDashboard}>
              List of scheduled sessions here
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </>
  );
};

export default CaregiverDashboard;
