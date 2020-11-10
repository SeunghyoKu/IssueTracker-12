import React from 'react';
import styled from 'styled-components';
import Dropdown from '@Components/commons/Dropdown';
import Searchbar from '@Components/commons/Searchbar';
import ButtonWithIcon from '@Components/commons/ButtonWithIcon';
import Button from '@Components/commons/Button';
import LabelMilestoneTag from '@Components/commons/LabelMilestoneTag';
import labelIcon from '@Images/label.svg';
import milestoneIcon from '@Images/milestone.svg';
import { IssueMenuFilter } from './Filters';

const IssueMenu = () => {
  return (
    <FlexRowDiv>
      <IssueMenuFilter />
      <IssueFilterSearchbar 
        className="issue-filter-searchbar"
        />
      <LabelMilestoneTag />
      <NewIssueButton>New Issue</NewIssueButton>
    </FlexRowDiv>
  );
}


const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const common = `
  height: 35px;
  box-sizing: border-box;
  border: 1px solid lightgrey;
`;

const IssueFilterSearchbar = styled(Searchbar)`
  ${common}
  border-radius: 0 5px 5px 0;
  line-height: 20px;
  margin-right: 20px;
`;

const NewIssueButton = styled(Button)`
  line-height: 25px;
  margin-left: 20px;
`;

export default IssueMenu;
