import svg_1 from '../assets/svg_1.svg'
import svg_2 from '../assets/svg_2.svg'
import svg_3 from '../assets/svg_3.svg'
import svg_4 from '../assets/svg_4.svg'

const HomePage = () => {
    return (
        <div className='grid _gap-16px grid-cols-12 justify-items-stretch '>

        <img className='-fade-in-left col-span-6' src={svg_3} alt="blood"  />
        <img className='-fade-in-right col-span-6 ' src={svg_1} alt="blood"  />



        <div className='-fade-in col-span-12  text-center -h3 md:-h2 text-b-t1l1a1 font-cursive-3'> Donate Blood, Save Life</div>
    


        <img className='-fade-in-left col-span-6' src={svg_2} alt="blood"  />
        <img  className='-fade-in-right col-span-6' src={svg_4} alt="blood"  />


        
            
        </div>
    )
}

export default HomePage
