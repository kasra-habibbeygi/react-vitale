import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H6Container = styled.h6(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH6};
    `
);
