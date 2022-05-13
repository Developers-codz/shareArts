import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 25rem;
  width: 30rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--color-dark);
  border-radius: 10px;
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: .5rem 3rem;
`;
export const Header = styled.h1`
  font-size: ${(props) => (props.small ? "1.2rem" : "2.5rem")};
  margin-top: 1rem;
`;
export const FormInput = styled.input`
  width: 25rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--color-dark);
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 1.5rem 0 0 0;
  font-size: 1.2rem;
  color: var(--color-secondary-dark);
  &::placeholder {
    font-weight: 500;
    font-size: 1.2rem;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-secondary-dark);
  }
`;
export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 6rem;
  background-color: var(--color-primary);
  border: 2px solid transparent;
  color: var(--color-secondary-dark);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.03, 1.03);
    border: 2px solid var(--color-secondary-dark);
    white-space: nowrap;
  }
`;
export const PrimaryButton = styled(Button)`
  margin: 1.5rem 0rem 0rem 0rem;
  padding: 0.5rem 8rem;
  background-color: var(--color-secondary-dark);
  color: var(--color-light);
`;

export const Para = styled.span`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
