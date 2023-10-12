import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: balck;
  text-decoration: none;

  &.hover {
    color: #b0beed;
  }
`;

export const StyledMainLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.hover {
    color: #b0beed;
  }
`;
