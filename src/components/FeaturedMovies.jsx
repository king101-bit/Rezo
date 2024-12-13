import {Col, Row} from "react-bootstrap"
const FeaturedMovies = () => {
  return (
<section>
    <h1 className="text-center">Our Featured Movies</h1>
    <Row className="justify-content-center gap-2">
      <Col xs="auto">
        <img
          src="https://via.placeholder.com/300X200/FF6F61/FFFFFF"
          alt="Placeholder"
          className="rounded"
        />
      </Col>
      <Col xs="auto">
        <img
          src="https://via.placeholder.com/300X200/FF6F61/FFFFFF"
          alt="Placeholder"
          className="rounded"
        />
      </Col>
      <Col xs="auto">
        <img
          src="https://via.placeholder.com/300X200/FF6F61/FFFFFF"
          alt="Placeholder"
          className="rounded"
        />
      </Col>
      <Col xs="auto">
        <img
          src="https://via.placeholder.com/300X200/FF6F61/FFFFFF"
          alt="Placeholder"
          className="rounded"
        />
      </Col>
    </Row>
</section>  )
}

export default FeaturedMovies