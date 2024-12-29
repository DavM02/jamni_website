// import './backdrop.css'
import Portal from "../Portal"

export default function Backdrop({ value, root, ...props }) {
     
    return (
        <Portal value={value} root={root} 
        {...props}
        className='backdrop'>
 
      </Portal>
    )
}


 