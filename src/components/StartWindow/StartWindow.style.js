import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const StatrButton = styled(Link)`
  height: 200px;
  width: 200px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 15px 30px;
  padding: 10px 20px;
  border: transparent 5px solid;
  transition: border 0.7s;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.greenDark};
  svg {
    width: 50%;
    height: 50%;
  }

  :hover {
    border: ${({ theme }) => theme.colors.greenDark} 5px solid;
  }

  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    margin: 30px 60px;
    padding: 10px 20px;
    height: 300px;
    width: 300px;
  }
`;
