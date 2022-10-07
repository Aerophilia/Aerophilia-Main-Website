import React,{useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

//Importing images for gallery
import img1 from './images/1.webp'
import img2 from './images/2.webp'
import img3 from './images/3.webp'
import img4 from './images/4.webp'
import img5 from './images/5.webp'
import img6 from './images/6.webp'
import img7 from './images/7.webp'
import img8 from './images/8.webp'
import img9 from './images/9.webp'
import img10 from './images/10.webp'
import img11 from './images/11.webp'
import img12 from './images/12.webp'
import img13 from './images/13.webp'
import img14 from './images/14.webp'
import img15 from './images/15.webp'
import img16 from './images/16.webp'
import img17 from './images/17.webp'
import img18 from './images/18.webp'
import img19 from './images/19.webp'
import img20 from './images/20.webp'


// Run this command to get the responsive gallery >> npm install react-responsive-masonry --save

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
]

export default function ReactimageGallery() {
    const [data, setData] = useState({img: '', i:0})

    const viewImage = (img, i)=>{
        setData({img, i})
    }

    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1})
        }
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1})
        }
        if(!action){
            setData({img: '', i: 0})
        }
    }
  return (
    <>
        {data.img &&
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                <button onClick={() => imgAction()} style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
                <button onClick={() => imgAction('previous-img')}>Previous</button>
                <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '80%', border: '2px solid #f1f1f1', borderRadius: '5px'}} alt="Gallery" />
                <button  onClick={() => imgAction('next-img')}>Next</button>
            </div>
        }
        <div style={{padding: '20px 60px'}}>
            <h1 className='subtitle'>GALLERY <div className='bottom_line'></div>
            </h1>
            <p className='gallery_p_tag'>Experience the real joy of learning</p>
            <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: "pointer", border: '2px solid #f1f1f1', borderRadius: '5px' }}
                            alt="GalleryImage"
                            onClick={()=>viewImage(image, i)} 
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        
    </>    
  )
}
