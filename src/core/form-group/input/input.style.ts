import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputContainer = styled.div(
    ({ theme }) => css`
        width: 100%;

        input {
            width: 100%;
            color: ${theme.textActive};
            background-color: transparent;
            padding: 16px 10px;
            height: 56px;
            transition: all linear 0.1s;
            font-weight: 400;
            outline: none;
            font-size: ${theme.fontSizeBase};
            border: 1px solid transparent;

            &:hover {
                border: 1px solid ${theme.borderColorHover};
            }

            :focus {
                outline: none;
                border: 2px solid ${theme.borderColorFocused};
            }

            &::placeholder {
                color: ${theme.textSecondary};
                font-size: ${theme.fontSizeBase};
            }
        }

        &.disabled {
            opacity: 0.5;
        }

        .filled {
            background-color: #f5f5f5;
        }

        .shadow {
            box-shadow:
                rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }

        .outline {
            border: 1px solid ${theme.borderColorNormal};
        }

        .normal-radius {
            border-radius: ${theme.borderRadiusLarge};
        }

        .rounded-radius {
            border-radius: 50px;
        }

        .sharp-radius {
            border-radius: 0;
        }

        label {
            color: #4b4b4b;
            margin-bottom: 4px;
            display: block;
            font-size: ${theme.fontSizeBase};
            width: 100%;
        }
    `
);
