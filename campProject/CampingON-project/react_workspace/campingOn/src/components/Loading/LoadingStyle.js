import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 80vh;
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

// 내가 이거 오랜만에 써봐서 기억이 잘 안나는데 하여튼 이런식으로
// 조건문 처리가 가능함!

export { Container, Message, LoadingImg };
