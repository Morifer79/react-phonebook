import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  height: auto;
  width: 40%;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.32),
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);
`;

export const ContactsListItem = styled.li`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  list-style: none;
  pointer-events: none;
  :hover {
    color: #fa8072;
  }
`;

export const ButtonDel = styled.button`
  cursor: pointer;
  pointer-events: auto;
  padding: 10px 30px;
  margin-top: 10px;
  font-size: 15px;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  background: none;
  color: rgba(255, 255, 255, 0.63);
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
    -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
  :hover {
    color: #fa8072;
    background-color: rgb(22, 9, 52);
  }
  :active {
    box-shadow: inset 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
      inset -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
    color: rgba(255, 255, 255, 0.24);
  }
`;
