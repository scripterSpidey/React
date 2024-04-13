const Image = ()=>{

    const imageUrl = 'https://plus.unsplash.com/premium_photo-1687558246422-e94f0864d467?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const handleImage = (event)=>{
        console.log('clicked')
        event.target.style.display = 'none'
    }
    return (
        <img className="image" onClick={(event)=>handleImage(event)} src={imageUrl} alt="image" />
    )
}
export default Image;