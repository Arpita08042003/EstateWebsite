
import { colors } from "../Colour";
import "./Navbar.css"
// navabar


function Navbar() {
    return(
        <div class="sticky-top"  >
        <nav class="navbar navbar-expand-lg bg-light ">
        <div class="container-fluid col-8  " >
          <a class="navbar-brand " style={{color:colors.first}} href="#">Navbar</a>
          <div class="float-end">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <img src="https://www.svgrepo.com/show/315606/menu-left.svg" alt="icon"  style={{width:'30px'}}/>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                 
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Residencies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Our Value</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Get Started</a>
              </li>
               
            </ul>
            </div>
          </div>
        </div>
      </nav>
        
        </div>
    );
}

export default Navbar;