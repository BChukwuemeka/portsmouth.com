import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
// import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import {heroTwo} from '../../components/Content/ContentData'
import './home.css'
import Content from '../../components/Content/Content'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Content {...heroTwo} />
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}

export default Home