import "./Home.css"

function Home(){
    return(
        <div>
        <div class="main ">
            <div class="row">
      <div class="col-lg-6 d-flex align-content-center flex-wrap "  >
        <h1 class="big-heading "><br/>Discover Most Suitable Property</h1>
        <p class="small-heading "><br/><br/>Find a variety of properties that suit you very easilty </p>
        <p class="small-heading ">Forget all difficulties in finding a residence for you</p>
    <form class="d-flex form-search mx-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    <div class="row mx-auto ">
        <div class="col-4 ">
            <p class="prices" data-end="+">9,000 </p>
            <p class="price_detail">Premium Product</p>
        </div>
        <div class="col-4 ">
            <p class="prices" data-end="+">2,000 </p>
            <p class="price_detail">Happy Customer</p>
        </div>
        <div class="col-4 ">
            <p class="prices" data-end="+">50 </p>
            <p class="price_detail">Awards Winning</p>
        </div>
    </div>
         
      </div>
      <div class="col-lg-6 "  >
        <img src="https://real-estate-web.pages.dev/hero-image.png" alt="home" class="home_img"/>
      </div>
      
  </div>
  </div>
        {/* Footer of Home page */}
        <div class="sponser ">
            <div class="row sponser2 mx-auto">
                <div class="col-lg-3 col-6  ">
                     <img src="https://www.dlf.in/images/logo.svg" class="img-fluid"/>
                </div>
                <div class="col-lg-3 col-6  ">
                     <img src="https://www.godrejproperties.com/images/logo_godrej_properties.png" class="img-fluid"/>
                </div>
                <div class="col-lg-3 col-6  ">
                     <img src="https://www.oberoirealty.com/images/oberoi_logo.png" class="img-fluid"/>
                </div>
                <div class="col-lg-3 col-6  ">
                     <img src="https://www.lntrealty.com/wp-content/themes/lntrealty/assets/images/brand-logo-desktop.webp" class="img-fluid"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;