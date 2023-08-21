
import Link from 'next/link'
import Footarstyle from './Footar.module.css'
export default function Footar(){
    return(
        
        <>
        <div className={Footarstyle.Footarrow}>
         <div className={Footarstyle.Footartextbox}>  
        <Link href='https://nextjs.org/' target='blank' className={Footarstyle.Footartext}>
        Made In Next.js By Pooja Mittal</Link>
        </div> 
        </div>
        </>
    )
}