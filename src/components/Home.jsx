import '../App.css'

export default function Home({currentPage, handlePageChange}) {
  return (
    <section>
      <div>
        <h1>CLAİRE ECKSTRÖM</h1>
        <h1>CONSULTING</h1>
      </div>
      <div className='fashion'>
        <a
          href='#Fashion'
          onClick={() => handlePageChange('Fashion')}
          className={currentPage === 'Fashion' ? 'fashion-link active' : 'fashion-link'}
        >
          FASHION, <html/>
          LUXURY, & <html/>
          LIFESTYLE <html/>
          BRANDS
        </a>
      </div>
      <div className='bars'>
        <a 
          href='#Bars'
          onClick={() => handlePageChange('Bars')}
          className={currentPage === 'Bars' ? 'bar-link active' : 'bar-link'}
        >
          BARS & <html/>
          RESTAURANTS
        </a>
      </div>
      <div className='other'>
        <a 
          href='#Other'
          onClick={() => handlePageChange('Other')}
          className={currentPage === 'Other' ? 'other-link active' : 'other-link'}
        >
          OTHER <html/>
          CREATIVES
        </a>
      </div>
    </section>
  )
}

