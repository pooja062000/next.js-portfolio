import Link from 'next/link'
import Headerstyle from './Header.module.css'
export default function Header() {

    return(

        <>
      <div className={Headerstyle.Headertext}>

            <div className={Headerstyle.Headerlogo}>Pooja</div>

            <div className={Headerstyle.Headernavbarr}>
             <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
            </div>
            </div>
   
        </>
    )
}