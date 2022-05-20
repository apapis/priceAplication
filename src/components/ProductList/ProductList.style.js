import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1200px;
  padding: 40px 15px;
  margin: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxlPlus};
`;

export const BtnAdd = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 30px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.greenDark};
  border: transparent 5px solid;
  transition: all 0.8s;
  border-radius: 25px;
  text-align: center;

  :hover {
    border: ${({ theme }) => theme.colors.greenDark} 5px solid;
    background-color: ${({ theme }) => theme.colors.greenDark};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const GoBackMain = styled(Link)`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 40px;
  height: 40px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.greenDark};
  transition: color 0.8s;

  :hover {
    color: ${({ theme }) => theme.colors.greenDarkMore};
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    top: 20px;
    right: 50px;
    width: 60px;
    height: 60px;
  }
`;
