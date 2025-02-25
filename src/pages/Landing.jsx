import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/gold-music-png-19.png'
import feature1 from '../assets/video.jpg'
import feature2 from '../assets/jazz.jpeg'
import feature3 from '../assets/dj.jpeg'
import Card from 'react-bootstrap/Card'


const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* Landing part */}
      <div className='row align-items-center'>
        <div className='col lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' src={landingimg} alt="" />
        </div>
      </div>
      {/* Features part */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
              <Card className='p-2' style={{ width: '21rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
              Users can upload, view and remove the videos.
              </Card.Text>
              </Card.Body>
              </Card>
          </div>
          <div className='col-lg-4'>
              <Card className='p-2' style={{ width: '21rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
              Users can categorise the videos by drag and drop feature.
              </Card.Text>
              </Card.Body>
              </Card>
          </div>
          <div className='col-lg-4'>
              <Card className='p-2' style={{ width: '21rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
              Users can manage the watch history of all videos.
              </Card.Text>
              </Card.Body>
              </Card>
          </div>
        </div>
      </div>
      {/* Last */}
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className='col-lg-5'>
          <h3 className='text-warning'>Simple,Fast & Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything!!</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolorem quas alias natus ad quisquam vitae neque, non quos blanditiis unde nisi illo laudantium, veritatis veniam atque. Velit, consectetur quam?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorize videos!!</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolorem quas alias natus ad quisquam vitae neque, non quos blanditiis unde nisi illo laudantium, veritatis veniam atque. Velit, consectetur quam?</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Manage history!!</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolorem quas alias natus ad quisquam vitae neque, non quos blanditiis unde nisi illo laudantium, veritatis veniam atque. Velit, consectetur quam?</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="Interstellar - Trailer - Official Warner Bros. UK" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

    </div>
  )
}

export default Landing