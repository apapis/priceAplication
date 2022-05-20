import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FunctionBtn = styled(Link)`
  margin: 1px 4px;
  padding: 2px 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.greenDark};
  transition: color 0.7s;
  width: 20px;
  height: 20px;

  svg {
    text-decoration: none;
  }

  :hover {
    color: ${({ theme }) => theme.colors.greenDarkMore};
  }
`;
