import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$center ? 'center' : 'flex-start')};
  gap: 15px;
  max-width: 200px;
  padding: 40px 300px;
  margin-top: 50px;
  margin-right: ${props => (props.$center ? 'auto' : 0)};
  margin-left: ${props => (props.$center ? 'auto' : 0)};
  background-color: #e8f3ff;
`;
