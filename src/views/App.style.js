import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.greenish};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
