import styled from "styled-components"

export const AnswerButton = styled.div<{ longText: boolean }>`
  padding: 0.5rem;
  color: #000;
  margin: 1rem 0.5rem;
  border: 1px solid #ccc;
  width: 200px;
  font-size: ${props => (props.longText ? "0.75rem" : "1.25rem")};
  text-align: center;
  height: 40px;
  line-height: 40px;
  overflow: hidden;

  &:hover {
    background-color: #ccaa;
    cursor: pointer;
  }
`
