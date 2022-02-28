function SocialButton(props){

    return(
        <a href={props.url} target="_blank" className="btn btn-sm btn-info social-button" 
           id={props.id}  
           style={ {background: props.color } }
           title={props.title}
        >
           <i className={props.icon} ></i>  
     </a>
    )
}

export default SocialButton