import React from 'react'

const CafeAd = () => {
  return (
    <div className='container' style={{marginTop:"100px", paddingBottom:"120px"}}>
    <div style={{backgroundImage:"url('https://static.tbcconcept.ge/desktop/media/xq5xytqt.pqjcafe.jpg')",
        padding:"50px", color: "white", height: "400px", width:"100%", borderRadius:"7px",
        display:"flex", flexDirection:"column", justifyContent: "center"
    }}>
        
        
      <h2>კონცეპტ კაფე</h2>
      <p style={{width:"400px"}}>კაფეში მყუდრო გარემო და მრავალფეროვანი მენიუ დაგხვდებათ, რომელიც იდეალურია ბიზნეს-ლანჩებისთვის და საქმიანი შეხვედრებისთვის - ისევე როგორც განტვირთვისა და ახალი კერძების დაგემოვნებისთვის.</p>
      <button className='subscribe-button' style={{maxWidth:"150px"}}>დეტალურად</button>
    </div>
    </div>
  )
}

export default CafeAd
