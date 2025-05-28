import image from './img/div.MuiBox-root (2).png'

const BestSell = () => {
  return (
    <div className='flex items-center gap-3'>
        <img src={image} alt="" />
        <aside className='w-[100%]'>
            <div className='flex justify-between'> 
                <h2 className='font-bold'>Healthcare Erbology</h2>
                <p className='text-green-600'>13,153</p>
            </div>
            <div className='flex justify-between'>
                <h2 className='text-[#6C737F]'>in Accessories</h2>
                <p className='text-[#6C737F]'>in sales</p>
            </div>
        </aside>
    </div>
  )
}

export default BestSell