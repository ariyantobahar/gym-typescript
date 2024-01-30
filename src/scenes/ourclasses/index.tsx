import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description: 'mpedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?',
    image:image1,
  },
  {
    name: 'Weight Training Classes',
    description: 'mpedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?',
    image:image2,
  },
  {
    name: 'Weight Training Classes',
    description: 'mpedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?',
    image:image3,
  },
  {
    name: 'Weight Training Classes',
    description: 'mpedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?',
    image:image4,
  },
  {
    name: 'Weight Training Classes',
    description: 'mpedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?',
    image:image5,
  }
];
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return <section  id='ourclasses' className='w-full bg-primary-100 py-40'>
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className='mx-auto w-5/6'
          initial="hidden" 
          whileInView={"visible"} 
          viewport={{ once:true, amount:0.5 }}
          transition={{ duration:0.5 }}
          variants={{ 
            hidden: {opacity: 0, x: -50},
            visible: {opacity:1, x:0}
         }}>
          <div className='md:w-3/5'>
            <HText>Our Classes</HText>
            <p className='py-5'>
            Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
    </motion.div>
  </section>
}

export default OurClasses