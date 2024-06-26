import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const H1Container = styled.h1(
    ({ theme }) => css`
        font-size: ${theme.fontSizeH1};
    `
);
