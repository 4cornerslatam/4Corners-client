type Props = {
    title: string,
    description: string
}
    
const CarouselCard = (props:Props): JSX.Element => {
    const { title, description } = props
    
    return (

        <div className='slideCard'>
            <section className='title'>
                <h2>{title}</h2>
            </section>
            <section className='description'>
                <p>{description}</p>
            </section>
        </div>
        
    )
}
export default CarouselCard