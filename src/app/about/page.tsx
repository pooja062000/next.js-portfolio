
import aboutstyle from './about.module.css'
export default function about() {
    return(

        <>
        <div className={aboutstyle.aboutrow}>

            <div className={aboutstyle.aboutbox1}>
        <h1 className={aboutstyle.aboutmaintext}>About Me</h1>
<h2 className={aboutstyle.aboutmainheading}>I'm <span className={aboutstyle.aboutcolor}>Pooja Mittal </span>a Web Developer</h2>
<p className={aboutstyle.abouttext}>Hello! My name is Pooja Mittal, and I am an enthusiastic and innovative web developer with over 2021 years of experience in the industry. I am truly passionate about my work and take great pride in my ability to transform complex ideas into user-friendly and visually stunning websites that leave a lasting impression on users. My expertise lies in front-end development, where I have honed my skills in HTML, CSS, JavaScript, Jquery, React.js, Sass, Git, Github and Bootstrap. These powerful tools allow me to create seamless and responsive designs that adapt effortlessly to various devices and screen sizes,
 ensuring an optimal user experience across the board.</p>
</div>
    
    
 <div className={aboutstyle.aboutbox2}>
 <div className={aboutstyle.abouteducation}>My Education</div>
    <div className={aboutstyle.aboutdegree}>Degree : B.C.A</div>
    <div className={aboutstyle.aboutfrontend}>Frontend Developer <br />Sunday School</div>
    <div className={aboutstyle.aboutemail}>Email : poojawebdeveloper2023@gmail.com</div>

    
    <div className={aboutstyle.aboutmyresum}>Download Resume</div>
        </div>
            </div>
            
        </>
    )
}