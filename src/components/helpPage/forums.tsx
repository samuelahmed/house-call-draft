import { Button, Pagination } from "flowbite-react";

const Forums = () => {
    const onPageChange = () => ({});

    return (
      <>
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">


            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                 <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
                 <span className="mt-1 text-gray-500 text-sm">56 comments</span>
                 <span className="mt-1 text-gray-500 text-sm">72 likes</span>

                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">1. Getting started a guide for first time patients by a patient</h2>
                <p className="leading-relaxed">The first time I thought of using an App to allow a stranger into my house to help me, I was nervous. But after a year of amazing use I think it is worth sharing my experience and tips with the community...</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Read
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                 <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
                 <span className="mt-1 text-gray-500 text-sm">77 comments</span>
                 <span className="mt-1 text-gray-500 text-sm">32 likes</span>

                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">2. Power outage in Boston?</h2>
                <p className="leading-relaxed">It seems there is a major power outage in Boston, if anyone has information please let us know.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Read
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                 <span className="mt-1 text-gray-500 text-sm">12 Jun 2023</span>
                 <span className="mt-1 text-gray-500 text-sm">118 comments</span>
                 <span className="mt-1 text-gray-500 text-sm">1173 likes</span>

                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">3. Tips on healthy eating </h2>
                <p className="leading-relaxed">Having a healthy diet is an important and wonderful aspect of life. Here we can share tips and recipes that help us live our best lives.  </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">Read
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
<div className="flex flex-col items-center pt-4">

<Pagination
              currentPage={1}
              layout="pagination"
              onPageChange={onPageChange}
              showIcons={true}
              totalPages={1000}
              previousLabel="Go back"
              nextLabel="Go forward"
            />
<Button className="mt-4" color="gray" >
        Create Post
      </Button>
</div>



            </div>
        </div>
        </section>
      </>
    );
  };
  
  export default Forums;
  