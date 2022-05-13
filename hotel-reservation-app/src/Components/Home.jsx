import React from 'react'
import './landing.css';


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


  

  <div className='container-fluid'>
    <h1>Our Rooms</h1>
    <div className='row hidden-md-up'>
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



<div class="site-section bg-light">
<div class="containerO">
<div class="row">
<div class="col-md-6 mx-auto text-center mb-5 section-heading">
<h2 class="mb-5">Our Rooms</h2>
</div>
</div>
<div class="row">
<div class="col-md-6 col-lg-4 mb-5">
<div class="hotel-room text-center">
<a href="#" class="d-block mb-0 thumbnail">
  <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js">
    </script>
   <img src="https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp" alt="Image" class="img-fluid" data-pagespeed-url-hash="3036630142" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></a>
<div class="hotel-room-body">
<h3 class="heading mb-0"><a href="#">Standard Room</a></h3>
<strong class="price">$350.00 / per night</strong>
</div>
</div>
</div>
<div class="col-md-6 col-lg-4 mb-5">
<div class="hotel-room text-center">
<a href="#" class="d-block mb-0 thumbnail"><img src="https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp" alt="Image" class="img-fluid" data-pagespeed-url-hash="3331130063" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></a>
<div class="hotel-room-body">
<h3 class="heading mb-0"><a href="#">Family Room</a></h3>
<strong class="price">$400.00 / per night</strong>
</div>
</div>
</div>
<div class="col-md-6 col-lg-4 mb-5">
<div class="hotel-room text-center">
<a href="#" class="d-block mb-0 thumbnail"><img src="https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp" alt="Image" class="img-fluid" data-pagespeed-url-hash="3625629984" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></a>
<div class="hotel-room-body">
<h3 class="heading mb-0"><a href="#">Single Room</a></h3>
<strong class="price">$255.00 / per night</strong>
</div>
</div>
</div>
</div>
</div>
</div>



  
    </div>
  )
}

export default Home