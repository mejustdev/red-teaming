import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => (
  <Row>
    <Col md='8'>
      {/* AUTHOR INTRO STARTS */}
      <Media className='mb-4 admin-intro'>
        <Image
          roundedCircle
          width={64}
          height={64}
          className='mr-3'
          src='https://ca.slack-edge.com/T0EJTUQ87-UJBNDFRR8-24ac6a7c191e-192'
          alt='Generic placeholder'
        />
        <Media.Body>
          <h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
          <p className='welcome-text'>
            My name is Mehmet and I am a web developer. This site is for APART.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro;
