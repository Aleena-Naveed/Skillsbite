import styled, { css } from 'styled-components';
import { sizeMobile, sizeTablet } from '~/styles';

export const TypographyH1 = styled.h1`
  text-align: center;
  font-weight: 600;
  letter-spacing: 0px;
  word-break: break-word;
  font-size: 63px;
  margin: 10px 0;
  ${sizeTablet(css`
    font-size: 56px;
    margin: 0.5rem 0;
  `)}
  ${sizeMobile(css`
    font-size: 35px;
    padding: 0 20px;
    margin: 0.5rem 20px;
  `)}
`;
