import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  margin: 5px 10px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Btn = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 10px;
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
    cursor: pointer;
  }
`;
