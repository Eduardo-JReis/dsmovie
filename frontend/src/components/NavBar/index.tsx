import { GrGithub } from 'react-icons/gr';
import './styles.css';


export const NavBar = () => {
  return (
    <header>
     <nav className='container'>
       <div className='dsmovie-nav-container'>
         <h1>DSMovie</h1>
         <a href="https://github.com/in/devsuperior">
           <div className='dsmovie-contact-container'>
             <GrGithub size={26}/>
             <p className='dsmovie-contact-link'>/devsuperior</p>
           </div>
         </a>
       </div>
     </nav>
   </header>
  );
}