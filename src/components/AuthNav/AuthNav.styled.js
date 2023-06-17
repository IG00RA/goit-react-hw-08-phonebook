import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &.hover {
    color: #b0beed;
  }
`;
