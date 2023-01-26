import { Container, Message, LoadingImg } from './LoadingStyle.js';
import LoadingSpinner from '../../images/Spinner.gif';

const Loading = () => {
  return (
    <Container>
      <LoadingImg>
        <img src={LoadingSpinner} alt="Logo" />
      </LoadingImg>
      <Message something>... Loading ...</Message>
    </Container>
  );
};

export default Loading;
