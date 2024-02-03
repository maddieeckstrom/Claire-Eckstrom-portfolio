import './App.css'

export default function Home({currentPage, handlePageChange}) {
  return (
    <section>
      <div>
        <a
          href='#Fashion'
          onClick={() => handlePageChange('Fashion')}
        >
          Fashion, Luxury, &  Lifestyle Brands
        </a>
      </div>
      <div>
        <a 
          href='#Bars'
          onClick={() => handlePageChange('Bars')}
        >
          Bars & Restaurants
        </a>
      </div>
      <div>
        <a 
          href='#Other'
          onClick={() => handlePageChange('Other')}
        >
          Other creatives
        </a>
      </div>
    </section>
  )
}

