import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Petcard from './components/Petcard'

export default function Home() {
  const pets = [
    {
      "name": "Pomeranian White",
      "id": "MO231",
      "genre": "Male",
      "age": "02 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/dr1z4nH/petimg1.png"
    },
    {
      "name": "Poodle Tiny Yellow",
      "id": "MO232",
      "genre": "Female",
      "age": "02 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/QYS5HtN/petimg2.png"
    },
    {
      "name": "Poodle Tiny Sepia",
      "id": "MO233",
      "genre": "Male",
      "age": "02 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/cgmPbPT/petimg3.png"
    },
    {
      "name": "Alaskan Malamute Grey",
      "id": "MO234",
      "genre": "Male",
      "age": "03 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/ZmH20qP/petimg4.png"
    },
    {
      "name": "Pembroje Corgi Cream",
      "id": "MO235",
      "genre": "Male",
      "age": "03 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/G0r3ysH/petimg5.png"
    },
    {
      "name": "Pembroje Corgi Tricolor",
      "id": "MO236",
      "genre": "Female",
      "age": "02 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/QN091YG/petimg6.png"
    },
    {
      "name": "Pomeranian Grey",
      "id": "MO237",
      "genre": "Female",
      "age": "02 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/vhQtVNK/petimg7.png"
    },
    {
      "name": "Poodle Tiny Dairy Cow",
      "id": "MO238",
      "genre": "Male",
      "age": "03 months",
      "price": 'FREE',
      "image": "https://i.ibb.co/Yj5dwDm/petimg8.png"
    }
  ]
  return (
    <main className="flex min-h-screen flex-col font-Work-Sans bg-gray-100 overflow-hidden">

      <section className='w-full bg-[#FCEED5] rounded-b-3xl  z-20 overflow-hidden flex flex-col'>
       <div className='absolute -top-60 rotate-12 -left-12 bg-[#F7DBA7] rounded-3xl w-72 h-72 lg:-left-28 overflow-hidden'></div>
        <Navbar />
        <div className='lg:flex lg:px-20  lg:py-12 lg:items-center xl:px-28 xl:py-6 overflow-hidden'>
          <div className='lg:w-1/2 '>
            <div className='flex flex-col  px-4 py-2 text-primary mt-4  '>
              <h1 className='text-3xl font-bold mb-1 lg:text-5xl'>One More Friend</h1>
              <h2 className='text-xl font-semibold mb-3 lg:text-4xl'>Thousands More Fun!</h2>
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
            </div>
            <div className='flex gap-x-4  px-4 lg:mt-4'>
            <button className='px-4 py-2 rounded-3xl border-primary border text-primary'>View intro</button>
            <button className='px-4 py-2 rounded-3xl text-white bg-primary'>Explore Now</button>
            </div>
          </div>
          <div className='w-1/2 z-20'>
            <img src='https://i.ibb.co/Z2YWtCN/imgdesktop.png' className='w-full hidden lg:flex'/>
          </div>
        </div>
          <div className='absolute -rotate-[-25deg] bg-[#F7DBA7] rounded-3xl w-56 h-56 -bottom-4 right-12 z-10 lg:bottom-[20%] lg:right-[7%] xl:right-[10%] xl:bottom-[36%] lg:w-96 lg:h-96 overflow-hidden flex'>

          </div>
          <div className='absolute -rotate-[-18deg] bg-primary rounded-3xl w-56 h-56 -bottom-4 -left-4 lg:-rotate-[-9deg] lg:w-96 lg:h-96 lg:top-auto lg:left-auto lg:right-[12%] xl:right-[18%]  lg:bottom-[18%] xl:bottom-[35%] overflow-hidden'>
            </div> 

        <img src='https://i.ibb.co/swgPFn9/image1.png' className='z-20 relative mt-8 rounded-b-3xl flex lg:hidden mx-auto'/>
      </section>
      <section className='w-full bg-gray-100 relative z-20 p-2 lg:px-20 lg:pb-24 py-8'>
        <div className='px-2 mb-2 lg:mt-6 lg:text-xl'>
          <span className='font-semibold '>Whats new?</span>
          <h2 className='text-lg text-primary font-semibold lg:text-xl'> Take A Look At Some Of Our Pets</h2>
        </div>
        <div className='grid grid-cols-2 w-full gap-2 px-2 lg:grid-cols-4 lg:gap-x-6 lg:mt-12 lg:gap-y-12 lg:px-20 gap-y-6 gap-x-4'>
          {pets.map((pet, index) => (
          <Petcard pet={pet} key={index} />
          ))}
        </div>
        
      </section>
      <Footer />
    </main>
  )
}

