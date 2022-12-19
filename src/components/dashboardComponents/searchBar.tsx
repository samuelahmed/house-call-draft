import { Label, TextInput, Button, Dropdown } from "flowbite-react";

const SearchBar = () => {
  return (
<div className="flex flex-col gap-4 pb-4">
<div className="flex gap-4 items-center">

      <TextInput id="small" type="text" sizing="md" />



<Dropdown color="gray" label="Patient Needs" size="sm" >
        <Dropdown.Item>Compasion Care</Dropdown.Item>
        <Dropdown.Item>Mobility Support</Dropdown.Item>
        <Dropdown.Item>Conversation</Dropdown.Item>
        <Dropdown.Item>Adult Day Care</Dropdown.Item>
      </Dropdown>



      <Dropdown color="gray" label="Days" size="sm">
        <Dropdown.Item>Monday</Dropdown.Item>
        <Dropdown.Item>Tuesday</Dropdown.Item>
        <Dropdown.Item>Wednesday</Dropdown.Item>
        <Dropdown.Item>Thursday</Dropdown.Item>
        <Dropdown.Item>Friday</Dropdown.Item>
        <Dropdown.Item>Saturday</Dropdown.Item>
        <Dropdown.Item>Sunday</Dropdown.Item>
      </Dropdown>


      <Button color="gray">Search</Button>
    </div>
    </div>
  );
};

export default SearchBar;
