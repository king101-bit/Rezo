import Navbar from './Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css'
import AnimatedFavorite from './AnimatedFavourite';
const header = () => {
  return (
<>
  <Navbar/>
  <Container className='py-5' style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
    <Row className="align-items-center">
      <Col lg={6}><h1 className='display-4 fw-bold mb-4'>From Classics to New Releases: Find Your
  <AnimatedFavorite />
</h1> <p className='lead mb-4'>Ready to discover your next binge-worthy show or movie? Look no further than our online streaming store, where you&lsquo;ll find a wide selection of classic titles and new releases, all available at your fingertips.
</p>
            <Button size="lg" style={{backgroundColor: '#2C8C99',    borderColor: '#2C8C99',
}}>Get Started</Button>
</Col>
  <Col lg={6}>
          <div className="position-relative" style={{ height: '600px' }}>
            <div 
              className="position-absolute rounded-circle" 
              style={{ 
                backgroundColor: '#2C8C99',
                right: '-10%', 
                top: '0%', 
                width: '110%', 
                height: '110%', 
                zIndex: 0 
              }} 
            />
            <div className="position-relative h-100 mb-3">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https://m.media-amazon.com/images/M/MV5BZDI4ZWYwMGUtZGE1Yi00OTc5LWI3NDctMGY4ZWE4NzI4NWUwXkEyXkFqcGc@._V1_.jpg&f=1&h=500"
                alt="Movie Poster 1"
                className="position-absolute shadow-lg"
                style={{ 
                  top: '5%', 
                  right: '15%', 
                  zIndex: 3,
                  width: '300px',
                  height: '350px', 
                  objectFit: 'fill', 
                  borderRadius: '20px',
                  transform: 'rotate(5deg)'
                }}
              />
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_.jpg&f=1&h=500"
                alt="Movie Poster 2"
                className="position-absolute shadow-lg"
                style={{ 
                  top: '15%', 
                  right: '40%', 
                  zIndex: 2,
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover', 
                  borderRadius: '20px',
                  transform: 'rotate(-5deg)'
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Official_cover_art_for_A_Tribe_Called_Judah_movie_2023.jpg/220px-Official_cover_art_for_A_Tribe_Called_Judah_movie_2023.jpg"
                alt="Movie Poster 3"
                className="position-absolute shadow-lg"
                style={{ 
                  top: '25%', 
                  right: '25%', 
                  zIndex: 1,
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover', 
                  borderRadius: '20px',
                  transform: 'rotate(2deg)'
                }}
              />
            </div>
          </div>
        </Col>
    </Row>
  </Container>
</>
)
}

export default header