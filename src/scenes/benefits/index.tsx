import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphics from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6, w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adpiscing amet amet enim. Feugiat dolor",
    },
    {
        icon: <UserGroupIcon className="h-6, w-6" />,
        title: "100's of Divers Classes",
        description: "Neque adpiscing amet amet enim. Feugiat dolor",
    },
    {
        icon: <AcademicCapIcon className="h-6, w-6" />,
        title: "Expert and Pro Trainers ",
        description: "Neque adpiscing amet amet enim. Feugiat dolor",
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Benefits = ({setSelectedPage}: Props) => {
  return (
  <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

        {/* HEADER  */}
        <motion.div className="md:my-5 md:w-3/5"
        initial="hidden" 
        whileInView={"visible"} 
        viewport={{ once:true, amount:0.5 }}
        transition={{ duration:0.5 }}
        variants={{ 
            hidden: {opacity: 0, x: -50},
            visible: {opacity:1, x:0}
         }}>   
            <HText>
                MORE THAN JUST GYM.
            </HText>
            <p className="my-5 text-sm">We provide world class fitness equipment, trainers, and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member</p>
        </motion.div>

        {/* BENEFITS  */}
        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once:true, amount:0.5 }}
        variants={container}>
            {benefits.map((benefit:BenefitType) => (
               <Benefit 
               key={benefit.title} 
               icon={benefit.icon} 
               description={benefit.description} 
               title={benefit.title}
               setSelectedPage={setSelectedPage}
               /> 
            ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <img src={BenefitPageGraphics} alt="benefits-page-graphics" className="mx-auto"/>
            <div>
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstract">
                        <motion.div  initial="hidden" 
        whileInView={"visible"} 
        viewport={{ once:true, amount:0.5 }}
        transition={{ delay:0.2, duration:0.5 }}
        variants={{ 
            hidden: {opacity: 0, x: 50},
            visible: {opacity:1, x:0}
         }}>
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>.
                            </HText>
                        </motion.div>
                    </div>
                </div>

                <div>
                    <p className="my-5">
                    orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!
                    </p>
                    <p className="mb-5">
                    Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum.
                    </p>
                </div>

                {/* BUTTON  */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>


            </div>
        </div>
    </motion.div>
  </section>
  )
}

export default Benefits