import Card from './Card'
// import vite.svg as placeholder image from public/images
import placeholderImg from '/images/vite.svg'


const Project = ({project}) => {

  const handleClick = () => {
    console.log('Card clicked!')
  }

  return (

//     <Card className="w-[30vw] lg:w-[15vw] mx-[5vw] my-2 Card bg-base-100 shadow-xl bg-lime-300">
//   <img src={project.image} className="object-cover w-full h-60" alt="Portfolio Project Image" />
//   <div className="Card-body">
//     <h2 className="Card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="Card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </Card>

    // <Card className="w-[60vw] md:w-[40vw] lg:w-[20vw] mx-[5vw] mb-4 portfolio__project animate-fade-in duration-500 flex flex-col justify-between shadow-xl" handleClick={handleClick}>
    <Card className="w-[40%] lg:w-[20%] mx-[5%] mb-4 portfolio__project animate-fade-in duration-500 flex flex-col justify-between shadow-xl" handleClick={handleClick}>
    {/* <Card className="portfolio__project transition ease duration-500" handleClick={handleClick}> */}
    {/* <Card className="portfolio__project animate-scale-in" handleClick={handleClick}> */}
        <div className="portfolio__project-image">
            <img src={project.image ? project.image : placeholderImg}  className="object-cover w-full h-60" alt="Portfolio Project Image" />
            {/* <img src={project.image} className="object-cover w-full max-h-60" alt="Portfolio Project Image" /> */}
        </div>
        <h4 className='h-16'>{project.title}</h4>
        <p className='max-h-24 overflow-y-auto h-14 border-4 border-[#f0fff0]'>{project.desc}</p>
        <div className="flex gap-[3%] justify-center">
            {project.demo && <a href={project.demo} className="btn" target="_blank" rel="noopner noreferrer">Demo</a>}
            <a href={project.github} className="btn" target="_blank" rel="noopner noreferrer">Gitbub</a>
        </div>
    </Card>

  )
}

export default Project