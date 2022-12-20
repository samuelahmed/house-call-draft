import { ListGroup, Avatar } from "flowbite-react";

const FriendListPreview = () => {
  return (
<div className="w-64">
  <ListGroup>
    <ListGroup.Item>
    <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    status="online"
  /> 
  Stephanie
    </ListGroup.Item>
    <ListGroup.Item>
    <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
    status="offline"
  /> 
      Suzan
    </ListGroup.Item>
    <ListGroup.Item>
    <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
    status="busy"
  /> 
      Joe
    </ListGroup.Item>
    <ListGroup.Item>
    <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
    status="away"
  /> 
      Bill
    </ListGroup.Item>
  </ListGroup>
</div>


  );
};

export default FriendListPreview;