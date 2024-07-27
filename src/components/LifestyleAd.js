import React from 'react'
const LifestyleAd = ({isLink, imgUrl, pText,hHeader}) => {
  return (
    <div>
      <div className="big-container">
    <div className='subscribe-container'>
      <img className='subscribe-image' src={imgUrl} alt='sofa'/>
      <div className='subscribe-text-container'>
      <h2 className='subscribe-header'>{hHeader}</h2>
      <p className='subscribe-text'>{pText}</p>
      
      
        {isLink&& <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Ftbcconcept.ge%252Fge%252Flifestyle%252Foverview&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US'>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.6686 5.00065C11.1286 5.00065 10.6419 5.21398 10.2819 5.56065L4.30859 2.57398C4.31526 2.49398 4.33526 2.41398 4.33526 2.33398C4.33526 1.23398 3.43526 0.333984 2.33526 0.333984C1.23526 0.333984 0.33526 1.23398 0.33526 2.33398C0.33526 3.43398 1.23526 4.33398 2.33526 4.33398C2.87526 4.33398 3.36193 4.12065 3.72193 3.77398L9.69526 6.76065C9.68859 6.84065 9.66859 6.92065 9.66859 7.00065C9.66859 7.08065 9.68193 7.16065 9.69526 7.24065L3.70193 10.234C3.34193 9.88065 2.84859 9.66065 2.30859 9.66065C1.20859 9.66065 0.308594 10.5607 0.308594 11.6607C0.308594 12.7607 1.20859 13.6607 2.30859 13.6607C3.40859 13.6607 4.30859 12.7607 4.30859 11.6607C4.30859 11.5807 4.29526 11.5073 4.28859 11.4273L10.2886 8.42732C10.6486 8.77398 11.1353 8.98732 11.6753 8.98732C12.7753 8.98732 13.6753 8.08732 13.6753 6.98732C13.6753 5.88732 12.7753 4.98732 11.6753 4.98732L11.6686 5.00065Z" fill="white"></path> 
        </svg>
            <span className='subscribe-button-text'>share to your friends</span>
        </a>}
      
      </div>
    </div>
    </div>
    </div>
  )
}

export default LifestyleAd
