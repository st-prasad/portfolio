import './card.css';

const Card = ({children, className, handleClick}) => {
  // console.log(JSON.stringify(props));
  return (
    <article className={`card ${className}`} onClick={handleClick}>
        {children}
    </article>
  )
}

export default Card