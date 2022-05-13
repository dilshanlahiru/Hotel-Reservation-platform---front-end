import React from 'react'
import './landing.css';
import './css/Home.css';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Home = () => {
  return (
    <div>
        <section class="hero">
    <div class="container">
      <div class="hero-image"></div>
      <div class="hero-text">
      <h1 >Ceylon Grand </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a href="#" class="button">Book</a>
      </div>
    </div>
  </section>



{/* <div class="site-section bg-light">
<div class="containerO">
<div class="row">
<div class="">
<h2 style={{marginTop:20}}>Our Rooms</h2>
</div>
</div>
<div class="row">

<div style={{marginLeft:189}} class="col-md-3">

<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="140"
    image="https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
</Card>

</div>
<div class="col-md-3">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    
    </div>
    <div class="col-md-3">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    
    </div>



</div>
</div>
</div> */}

{/* //about us */}


<div style={{paddingTop: 90,paddingBottom:90}} class="about_area">
  <h1>About us</h1>
<div style={{paddingTop: 100,paddingBottom:100}} class="abtcontainer">
<div class="row">
<div class="col-xl-5 col-lg-5">
<div class="about_info">
<div class="section_title mb-20px">
<span>About Us</span>
<h3>A Luxuries Hotel <br/>
with Nature</h3>
</div>
<p className='abttext'>Savour your penchant for finer comforts.
   Partner with sheer luxury at Ceylon Grand,
    as you attend a business event in the capital city.
     Let the opulence of our meeting rooms and conference 
     halls seep into flourishing work partnerships.
      Raise a toast to all the success at our plush restaurants and taste
       jubilance like never before. When you’ve enjoyed every bit of your Grand accomplishments,
        retire to your room, and relish in the exquisite comforts that Colombo’s
         most lavish business hotel has to offer.</p>
<a href="#" class="line-button">Learn More</a>
</div>
</div>
<div class="col-xl-7 col-lg-7">
<div class="about_thumb d-flex">
<div class="img_1">
<img src="https://preview.colorlib.com/theme/montana/img/about/xabout_1.png.pagespeed.ic.LF5rkD9bee.webp"/>
</div>
<div class="abtimg_2">
<img src="https://preview.colorlib.com/theme/montana/img/about/xabout_2.png.pagespeed.ic.Iswjjsyaxg.webp" alt="" data-pagespeed-url-hash="965061259" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
</div>
</div>
</div>
</div>
</div>
</div>

{/* ongoing offors */}
<div class="ofoffers_area">
<div class="ofcontainer">
<div class="ofrow">
<div class="ofcol-xl-12">
<div class="section_title oftext-center ofmb-100">
<span>Our Offers</span>
<h3>Ongoing Offers</h3>
</div>
</div>
</div>
<div class="ofrow">
<div class="col-xl-4 col-md-4">
<div class="single_offers">
<div class="about_thumb">
<img src="https://preview.colorlib.com/theme/montana/img/offers/x1.png.pagespeed.ic.CPgqevbSyX.webp" alt="" data-pagespeed-url-hash="900117794" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
</div>
<h3 className='offers_area'>Up to 35% savings on Club <br/>
rooms and Suites</h3>
<ul>
<li>Luxaries condition</li>
<li>3 Adults &amp; 2 Children size</li>
<li>Sea view side</li>
</ul>
<a href="#" class="book_now">book now</a>
</div>
</div>
<div class="col-xl-4 col-md-4">
<div class="single_offers">
<div class="about_thumb">
<img src="https://preview.colorlib.com/theme/montana/img/offers/x2.png.pagespeed.ic.MbYDoANTJ3.webp" alt="" data-pagespeed-url-hash="1194617715" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
</div>
<h3>Up to 35% savings on Club <br/>
rooms and Suites</h3>
<ul>
<li>Luxaries condition</li>
<li>3 Adults &amp; 2 Children size</li>
<li>Sea view side</li>
</ul>
<a href="#" class="book_now">book now</a>
</div>
</div>
<div class="col-xl-4 col-md-4">
<div class="single_offers">
<div class="about_thumb">
<img src="https://preview.colorlib.com/theme/montana/img/offers/x3.png.pagespeed.ic.Y_ffhAZTDD.webp" alt="" data-pagespeed-url-hash="1489117636" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
</div>
<h3>Up to 35% savings on Club <br/>
rooms and Suites</h3>
<ul >
<li>Luxaries condition</li>
<li>3 Adults &amp; 2 Children size</li>
<li>Sea view side</li>
</ul>
<a href="#" class="book_now">book now</a>
</div>
</div>
</div>
</div>
</div>


  
    </div>
  )
}

export default Home