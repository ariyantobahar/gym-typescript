import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className="mt-16 basis-1/2 md:mt-0"> 
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!

Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
                </p>
                <p>@ Evogym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Marca Occi Senectus</p>
                <p className='my-5'>Marca Occi Senectus</p>
                <p>Ulllacmw vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Marca Occi Senectus</p>
                <p className='my-5'>Marca Occi Senectus</p>
                <p>(333) 425-78992</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer