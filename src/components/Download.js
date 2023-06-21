import React from 'react'

export const Download = () => {
  return (
      <div  id="download" class="px-4 py-5 text-center rounded-3">
        <img class="d-block mx-auto mb-4" src="images/register_ss.png" alt="" width="210" height="432"/>
        <h1 class="display-5 fw-bold">Download Our App</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Download Our Brand New App (Voluntrix).</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3 btn-light"><a href=""><i class="fa-brands fa-google-play" style={{color: "#2a1f51",marginRight:"7px"}}></i></a>For Android</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4 "><a href=""></a>For iOs (Coming Soon)</button>
          </div>
        </div>
      </div>
  )
}
