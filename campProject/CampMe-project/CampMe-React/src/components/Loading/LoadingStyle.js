import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

const LoadingImg = styled.div`
  width: auto;
  height: auto;
`;

const Message = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #85c89a;
`;

export { Container, Message, LoadingImg };
