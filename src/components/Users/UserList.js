import styled from "styled-components";
import Card from "../UI/Card";

const Ul = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const Li = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const UserList = (props) => {
  console.log("props", props.users);
  return (
    <Card>
      <Ul>
        {props.users.map((el) => (
          <Li key={el.id}>
            {el.name} ({el.age} years old)
          </Li>
        ))}
      </Ul>
    </Card>
  );
};

export default UserList;
