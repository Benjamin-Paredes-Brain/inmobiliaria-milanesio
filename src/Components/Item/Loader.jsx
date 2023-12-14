import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <div style={{ height: '100vh', margin: '10% auto' }}>
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
