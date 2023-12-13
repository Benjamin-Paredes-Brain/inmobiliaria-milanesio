import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <div style={{ margin: '50% auto'}}>
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
