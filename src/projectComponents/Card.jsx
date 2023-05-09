const Card = ({children, className, handleClick}) => {
  // console.log(JSON.stringify(props));
  return (
    <article className={`card ${className} animate-fade-in ease duration-500`} onClick={handleClick}>
        {children}
    </article>
  )
}

export default Card