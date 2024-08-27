import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import {assets} from '../assets/assets'

const About = () => {
  return (

    <div>
      <div className='text-2xl text-center pt-8 border-t uppercase'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iste ab deleniti autem numquam! Perferendis iste facere assumenda maxime eum natus tenetur, placeat sapiente consectetur dolor ullam, error accusantium recusandae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi, error accusantium deserunt molestias soluta repellendus eius quas fugit voluptate aliquam culpa sint mollitia? Necessitatibus consequuntur saepe magni, adipisci facilis fugiat dignissimos eveniet doloremque amet recusandae obcaecati enim repellat illo hic molestias ullam est molestiae veritatis voluptatem provident ad modi? Magni dicta cupiditate quo odit, minus ducimus nemo id quia, maxime ratione quidem laborum debitis nobis delectus! Sed, odio itaque perferendis officiis ea voluptatibus iure quasi suscipit cum iusto quod dolorem quis molestiae harum explicabo blanditiis iste nesciunt excepturi ullam consectetur velit dicta. Debitis repellat veritatis, laboriosam doloremque ea possimus?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil corporis quis quo numquam, totam nam necessitatibus illo, vitae odio veniam impedit amet pariatur perferendis quas, quaerat porro omnis explicabo?</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil corporis quis quo numquam, totam nam necessitatibus illo, vitae odio veniam impedit amet pariatur perferendis quas, quaerat porro omnis explicabo?</p>
        </div>
      </div>

      <div className='text-2xl py-4 uppercase'>
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-6'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente quia, aspernatur dignissimos pariatur ipsam atque ipsa, eligendi deleniti molestiae numquam. Molestiae, ducimus accusamus atque cumque quaerat totam vel quam!</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente quia, aspernatur dignissimos pariatur ipsam atque ipsa, eligendi deleniti molestiae numquam. Molestiae, ducimus accusamus atque cumque quaerat totam vel quam!</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer Service:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sapiente quia, aspernatur dignissimos pariatur ipsam atque ipsa, eligendi deleniti molestiae numquam. Molestiae, ducimus accusamus atque cumque quaerat totam vel quam!</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About