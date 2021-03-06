import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as GearIcon } from '@Images/gear.svg';
import { UserContext } from '@Stores/UserStore';
import AssigneeSelector from './AssigneeSelector';

const AddAssigneeSideBar = ({
  selectedAssignees,
  setSelectedAssignees,
}) => {
  const { userState } = useContext(UserContext);
  const getUsername = (userId) => userState.find((user) => user.user_id === userId).username;
  return (
    <Div>
      <FlexColumn>
        <AssigneeSelector
          selected={selectedAssignees}
          setSelected={setSelectedAssignees}
          userState={userState}
        />
        <GearIcon
          width="16px"
          height="16px"
          fill="#727272"
        />
      </FlexColumn>
      {
        selectedAssignees.length !== 0
          ? selectedAssignees.map((assginee) => (<Item key={assginee}>{getUsername(assginee)}</Item>))
          : (<Item>No one</Item>)
      }
    </Div>
  );
};

const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Item = styled.div`
  padding: 0;
  width: 100%;
  box-sizing:border-box;
  font-size: 14px;
  font-size: 12px;
  color: #757575;

`;

const Div = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  box-sizing:border-box;
`;

export default AddAssigneeSideBar;
