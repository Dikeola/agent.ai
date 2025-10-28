import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We create engaging content that resonates with your audience and drives results...',
            icon: assets.marketing_icon
        },
        {
            title: 'Social media',
            description: 'We leverage social media to amplify your brand and connect with your audience...',
            icon: assets.social_icon
        },
        {
            title: 'Content writing',
            description: 'We create engaging content that resonates with your audience and drives results...',
            icon: assets.content_icon
        }
    ]                           

  return (
    <div id='services' className='relative flex flex-col items-center justify-center gap-7 py-20 px-4 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700
    dark:text-white'>
        

    <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
    
    <div className="flex flex-col md:grid grid-cols-2"> 
        {servicesData.map((service, index)=>(
            <ServiceCard key= {index} service={service} index={index} />
        ))}
    </div>
    </div>
  )
}

export default Services