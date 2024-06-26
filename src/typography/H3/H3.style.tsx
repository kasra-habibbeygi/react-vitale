import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H3Container = styled.h3(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH3};
    `
);
