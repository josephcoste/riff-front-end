import NavBar from '../NavBar/NavBar.jsx';
import './Layout.css';


function Layout(props) {
  return (
    <div id='container-Layout'>
      <NavBar id="navbar-Layout"/>
      <div 
        id="body-Layout"
       >
          {props.children}
      </div>
    
    </div>
  )
}

export default Layout