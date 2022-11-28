import styled from '@emotion/styled';

export const List = styled.ul`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const setBgColor = props => {
  if (props.online === true) {
    return '#47b04a';
  } else {
    return '#FF524C';
  }
  // OR WITH SWITCH:
  // switch (props.online) {
  //   case true:
  //     return '#47b04a';
  //   case false:
  //     return '#FF524C';
  //   default:
  //     return '#000';
  // }
};

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: 60px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
