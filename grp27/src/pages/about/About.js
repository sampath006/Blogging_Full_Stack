import React from 'react'
import './about.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@material-ui/core/Button'
import img from "../../assets/about-img.jpg"
import img2 from "../../assets/about-img-2.jpg"
export default function About() {
    return (
        <div className='about-content'>
            <h1 className="about-heading">About us</h1>
            <hr/>
            <span>
            <div className="text-block-left"> 
                <h2>Blogs page Project</h2>
                <p>We are team of 5 members. We created this page to share their experience in the form 
                    of a blogs.
                    <br/>Here you can start blogging and share your experience in word format with 
                    everyone. Our team details are:
                </p>
                    <ul className='names'>
                    <li>M Sampath</li>
                    <li>Deepak</li>
                    <li>Aditya Medarametla</li>
                    <li>Bodhi Aditya</li>
                    <li>Borra hemanth sai</li>
                    </ul>
            </div>
            <div className='about-img'>
                <img src={img2} width={500} height={300}></img>
            </div>
            <div className='text-block-right'>
            <Button variant="outlined" color="blue" href="https://www.facebook.com/">Facebook<FacebookIcon/></Button>
            <Button variant="outlined" color="black" href="mailto:someone@yoursite.com">CONTACT US</Button>
            <Button variant="outlined" color="pink" href="https://www.instagram.com/?hl=en">Instagram<InstagramIcon/></Button>
            </div>
            </span>
        </div>
    )
}
