import JobList from "./dashboardComponents/joblist";
import SearchBar from "./dashboardComponents/searchBar";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard, MdHistory } from "react-icons/md";
import { Pagination, Tabs } from "flowbite-react";
import UpcomingJobs from "./dashboardComponents/upcomingJobs";
import PastJobs from "./dashboardComponents/pastJobs";

const CaregiverDashboard = () => {
  //empty function for pagination
    const onPageChange = () => ({});

  return (
    <div className="">

          <Tabs.Group
            className="justify-center"
            aria-label="Tabs with icons"
            style="underline"
          >
            <Tabs.Item active={true} title="Find Patient" icon={HiUserCircle}>
              <div className="justify-items-center md:grid ">
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
            <div className="justify-items-center md:grid ">
            <SearchBar />

              < UpcomingJobs />
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



            <Tabs.Item title="Past Sessions" icon={MdHistory}>
            <div className="justify-items-center md:grid ">

            <SearchBar />

              < PastJobs />
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
          </Tabs.Group>

    </div>
  );
};

export default CaregiverDashboard;
