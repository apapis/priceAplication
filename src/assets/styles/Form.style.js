import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PopupStyle = styled.div`
  position: relative;
  margin: 0 10px;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const PopupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CloseBtn = styled(Link)`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.greenDark};
  transition: all 0.7s;
  border-radius: 50px;

  svg {
    width: 100%;
    height: 100%;
  }
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greenDark};
  }

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    width: 40px;
    height: 40px;
    top: 10px;
    right: 20px;
  }
`;

export const Heading = styled.h1`
  margin: 5px 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const StatusMessage = styled.h2`
  margin: 5px 10px 30px 10px;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const SubmitBtn = styled.button`
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 30px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.greenDark};
  border: transparent 5px solid;
  transition: all 0.8s;
  border-radius: 25px;
  background: none;

  :hover {
    border: ${({ theme }) => theme.colors.greenDark} 5px solid;
    background-color: ${({ theme }) => theme.colors.greenDark};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
