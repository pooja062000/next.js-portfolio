
import contactstyle from './contact.module.css'
export default function contact() {
    return(

        <>
        <div className={contactstyle.contactmainrow}>
            

      <div className={contactstyle.contactmainbox}>
        
      <div className={contactstyle.contactshadow}>CONTACT ME</div>
      

      <div className={contactstyle.contactbold_text}>Send Me Message & Mail</div>
      <div className={contactstyle.contactdescription}>If you appreciate my work, please get in touch with me at the information provided
            below.</div>
            
         <div className={contactstyle.contactcontact1}>
         <div className={contactstyle.contactbold_address}>Address <span className={contactstyle.contactaddress}> :1st Floor, Kanina Road Kosil,
                  Rewari<br />
                  Haryana, Pin Code:-123402, INDIA.</span></div>
                  
            <div className={contactstyle.contactbold_address1}>Phone<span> :+91-8929-812-912</span></div>
            <div className={contactstyle.contactbold_address2}>Email<span> :info@poojamittal.in</span></div>
         </div>
      </div>
        </div>
        
        </>
    )
}