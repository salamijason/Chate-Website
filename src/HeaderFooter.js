let socialLinks = `
  <a class="social-media" href="https://www.facebook.com/profile.php?id=61557409119325"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.instagram.com/chate_thehook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.youtube.com/@Chate_TheHook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.tiktok.com/@chate_thehook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
  <a class="social-media" href="https://t.me/chatethehook"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram" aria-hidden="true"></i></a>
  <a class="social-media" href="https://www.linkedin.com/company/%E1%80%81%E1%80%BB%E1%80%AD%E1%80%90%E1%80%BA-the-hook/"
      target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
`;
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    if (window.location.pathname === "/videos.html") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link" href="/advising.html"><h3 class= "header-links">Advising</h3></a>
                          <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link"  href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link active" aria-current="page" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    } else if (window.location.pathname === "/articles.html") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link" href="/advising.html"><h3 class= "header-links">Advising</h3></a>
                          <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link active" aria-current="page" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    } else if (window.location.pathname === "/advising.html") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link active" aria-current="page" href="/advising.html"><h3 class= "header-links">Advising</h3></a>
                          <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    } else if (window.location.pathname === "/events.html") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>
            <hr \>
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link" href="/advising.html"><h3 class= "header-links">Advising</h3></a>
                          <a class="nav-link active" aria-current="page" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    } else if (window.location.pathname === "/") {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>

            <hr \ />
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link active" aria-current="page" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link" href="/advising.html"><h3 class= "header-links">Advising</h3></a>
                          <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    } else {
      this.innerHTML = `
            <a href="/">
                <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
            </a>

            <hr \ />
            <div class="row justify-content-start">
                <div class="col-4 m-2 mt-3">
                  ${socialLinks}
                </div>
                <div class="col-4">
                  <nav class="navbar navbar-expand sticky-top navbar-transparent p-0">
                      <div class="container-fluid m-2">
                      <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarNavAltMarkup"
                          aria-controls="navbarNavAltMarkup"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                      >
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div
                          class="collapse navbar-collapse justify-content-center"
                          id="navbarNavAltMarkup"
                          >
                        <div class="navbar-nav">
                          <a class="nav-link" href="/"><h3 class= "header-links">Home</h3></a>
                          <a class="nav-link" href="/events.html"><h3 class= "header-links">Events</h3></a>
                          <a class="nav-link" href="/articles.html"><h3 class= "header-links">Articles</h3></a>
                          <a class="nav-link" href="/videos.html"><h3 class= "header-links">Videos</h3></a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
            `;
    }
  }
}
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="footer">
                <div class="row  pl-5">
                    <div class="col-3 py-5 m-2" >
                        <img class="logo" src="media/logo-transparent.webp" alt="" srcset="">
                        <h3 class="text-center"> <span class="textaccent fw-semibold"> Chate </span> Your Dreams </h3>
                        <div class="text-center">
                        ${socialLinks}
                        </div>

                    </div>
                    <div class="col-2 mt-5" >
                        <br \>
                        <h3 class="fw-medium"> Events </h3>

                        <a class="footer-link" target="_self" href="/advising.html"><p class="m-0">Advising</p></a>
                        <a class="footer-link" target="_self" href="/events.html#WhiteCoat"><p class="m-0"> White Coat Memoirs </p></a>
                        <a class="footer-link" target="_self" href="/events.html#AboveBeyond"><p class="m-0"> Above & Beyond </p></a>
                        <a class="footer-link" target="_self" href="/events.html#SteppingStone"><p class="m-0"> Stepping Stone </p></a>
                        <a class="footer-link" target="_self" href="/events.html#KyaungShaut"><p class="m-0"> ကျောင်းလျှောက်ကြမယ် </p></a>

                    </div>
                    <div class="col-2 mt-5" >
                        <br \>
                        <h3 class="fw-medium"> Articles </h3>
                        <a class="footer-link" target="_self" href="/articles.html#FilterOne"><p class="m-0"> Scholarships </p></a>
                        <a class="footer-link" target="_self" href="/articles.html#FilterTwo"><p class="m-0"> Testing and Curriculum </p></a>
                        <a class="footer-link" target="_self" href="/articles.html#FilterThree"><p class="m-0"> UK </p></a
                        <a class="footer-link" target="_self" href="/articles.html#FilterFour"><p class="m-0"> US </p></a>
                        <!-- <a class="footer-link" target="_self" href="/articles.html#FilterFive"><p class="m-0"> About ချိတ် </p></a> --->
                        <a class="footer-link" target="_self" href="/articles.html#AllArticles"><p class="m-0"> All Articles </p></a>
                    </div>

                    <div class="col-2 mt-5" >
                        <br \>
                        <h3 class="fw-medium"> Videos </h3>
                        <a class="footer-link" target="_self" href="/videos.html#SuTuPyu"><p class="m-0"> စုတုပြု Series</p></a>
                        <a class="footer-link" target="_self" href="/videos.html#ScholarsDiaries"><p class="m-0"> Scholars' Diaries</p></a>
                    </div>
                </div>

                <div class="mx-5 copyright">
                    <p>
                       © 2026
                       <a href="https://github.com/chatethehook/Chate-Website" title="The Hook Official Website">ချိတ် - The Hook Official Website</a>
                       by
                       <a href="https://chatethehook.com/" title="The Hook">ချိတ် - The Hook</a>
                    </p>
                 </div>
            </div>
        `;
  }
}
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
