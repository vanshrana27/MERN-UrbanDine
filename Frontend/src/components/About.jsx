import React from 'react'
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowRight } from 'react-icons/hi' 
const About = () => {
return (
    <section className="about" alt='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet eum obcaecati rerum tenetur sapiente, esse aspernatur odio laudantium atque repellat sunt perspiciatis quis eligendi magni dolores cum, soluta fugit animi eius quos earum! Commodi quibusdam alias ea tenetur, id amet fugiat ducimus natus voluptatibus quis voluptatem itaque nesciunt nulla.</p>
                <Link to={"/"}>Explore Menu 
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about"/>
            </div>
        </div>
    </section>
    );
};

export default About