import { Label, TextInput, Button, Dropdown } from "flowbite-react";

const SearchBar = () => {
  return (
    <div className="grid h-12 grid-cols-4 content-start">
      <TextInput id="small" type="text" sizing="sm" />

      <Button color="gray">Search</Button>

      <Dropdown label="Patient Needs" size="sm" inline={true}>
        <Dropdown.Item>Compasion Care</Dropdown.Item>
        <Dropdown.Item>Mobility Support</Dropdown.Item>
        <Dropdown.Item>Conversation</Dropdown.Item>
        <Dropdown.Item>Adult Day Care</Dropdown.Item>
      </Dropdown>

      <Dropdown label="Availability" size="sm" inline={true}>
        <Dropdown.Item>Monday</Dropdown.Item>
        <Dropdown.Item>Tuesday</Dropdown.Item>
        <Dropdown.Item>Wednesday</Dropdown.Item>
        <Dropdown.Item>Thursday</Dropdown.Item>
        <Dropdown.Item>Friday</Dropdown.Item>
        <Dropdown.Item>Saturday</Dropdown.Item>
        <Dropdown.Item>Sunday</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default SearchBar;
