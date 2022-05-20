import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Label = styled.label`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.greenDark};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 5px 5px;
  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
  padding: 10px 10px;
  border: 4px solid ${({ theme }) => theme.colors.greenDarkMore};
  transition: background 0.7s;

  :focus {
    background-color: ${({ theme }) => theme.colors.greenish};
  }
  @media (min-width: ${({ theme }) => theme.size.mobileM}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
