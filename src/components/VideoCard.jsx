import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // store history in json
    const {caption,youTubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youTubeLink,timeStamp}
    try {
      await saveHistoryAPI(historyDetails)
    } catch (err) {
      console.log(err);
      
    }
    
  }
  const deleteVideo = async (id) =>{
    try {
      const result = await removeVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    } catch (error) {
      console.log(err);
      
    }
  }
  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("Inside videoCardDragStarted with videoID: "+dragVideoDetails?.id);
    // share data using event drag start
     e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    
  }
  return (
    <>
       <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ height:'250px' }}>
          <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.imgUrl} />
          <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
          <p style={{color:'white'}}>{displayData?.caption}</p>
          {
          !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          }
          </Card.Text>  
          </Card.Body>
        </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youTubeLink}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>  
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard