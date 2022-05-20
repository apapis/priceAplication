import styled from 'styled-components';

export const TabeleHeadings = styled.tr`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.greenLight};

  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.xlPlus};
  }
`;

export const TabeleHeading = styled.td`
  padding: 2px 5px;

  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    padding: 5px 10px;
  }
`;

export const Table = styled.table`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Row = styled.tr`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  :nth-child(odd) {
    background: ${({ theme }) => theme.colors.greenLight};
  }

  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const Cell = styled.td`
  padding: 3px 5px;
  margin: 2px 3px;

  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    padding: 10px 15px;
    margin: 5px 10px;
  }
`;
