import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

interface TextFieldProps {
  /**
   * @default 'inline'
   */
  display?: "block" | "inline" | "inline-block";
  /**
   * @default 'auto'
   */
  width?: string;
  /**
   * @default 'auto'
   */
  height?: string;
  /**
   * @default '0'
   */
  margin?: string;
  /**
   * @default 'standard'
   */
  variant?: "standard" | "outlined";
  /**
   * @default 'text'
   */
  type?: "text" | "password" | "email" | "url";
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  helperText?: string; // TODO: Add helper text
  /**
   * @default 'large'
   */
  size?: "small" | "large";
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

function TextField(props: TextFieldProps) {
  const theme = useTheme();
  const color = props.disabled
    ? theme.font.color.block
    : props.error
    ? theme.font.color.warning
    : theme.font.color.black;
  const Component = styled.input`
    display: ${props.display ?? "inline"};
    width: ${props.width ?? "auto"};
    height: ${props.height ?? "auto"};
    margin: ${props.margin ?? "0"};
    padding: 9px;

    border: none;
    color: ${color};
    font-size: ${({ theme }) => theme.font.size[props.size ?? "large"]}px;

    ${props.variant === "outlined"
      ? `border-radius:5px; box-shadow: 0px 0px 0px 1px;`
      : `border-bottom: 1px solid;`}

    &:focus {
      outline: none;
    }
  `;
  const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: ${color};
    font-size: ${({ theme }) => theme.font.size.small}px;
  `;
  return (
    <Label>
      <Component
        type={props.type ?? "text"}
        disabled={props.disabled}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.helperText}
    </Label>
  );
}

export default TextField;
