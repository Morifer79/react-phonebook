import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  padding: 20px 30px;

  height: auto;
  width: 40%;
  border-radius: 12px;
  box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.32),
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);
`;

export const ContactsListItem = styled.li`
  padding-right: 30px;

  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  pointer-events: none;
  transition: color 250ms linear;

  :hover {
    color: #fa8072;
  }
`;

export const ButtonDel = styled.button`
  padding: 10px 30px;
  margin-top: 10px;

  cursor: pointer;
  pointer-events: auto;
  font-size: 15px;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  background: none;
  color: rgba(255, 255, 255, 0.63);
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
    -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
  transition: color 250ms linear, background-color 250ms linear;

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
