import Image from 'next/image'
import emptyCartImage from "../../public/happy.gif"

const EmptyCard = () => {
    const handleReload = () => {
        window.location.reload()
    };
  return (
    <div>
      <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
            <header>
                <Image src={emptyCartImage} alt="Empty Cart" className="w-40 h-40 mb-4 mx-auto" />
                <h2 className='text-4xl font-bold text-gray-800 mb-2'>Your Cart is Empty</h2>
                <h4 className='text-lg text-gray-600 mb-6'>Looks like you have not added anything to your cart yet</h4>
                <button
                    type="button"
                    onClick={handleReload}
                    className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>
                    Start Shopping
                </button>
            </header>
        </section>
    </div>
  )
}

export default EmptyCard
