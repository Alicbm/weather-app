import '../styles/FamousCity.css';
import { EachFamousCity } from './EachFamousCity';

export function FamousCity(){

  return(
    <div className="FamousCity">
      <h2 className="FamousCity__title">Famous City</h2>
      <div className="FamousCity__content">
        <div className='FamousCity__content-city'>
          {/* eeuu */}
          <EachFamousCity lat={40.7127} lon={-74.006}/>
        </div>
        <div className='FamousCity__content-city'>
          {/* honkong */}
          <EachFamousCity lat={22.2793} lon={114.1628}/>
        </div>
        <div className='FamousCity__content-city'>
          {/* paris */}
          <EachFamousCity lat={48.8589} lon={2.32}/>
        </div>
        <div className='FamousCity__content-city'>
          {/* dubai */}
          <EachFamousCity lat={25.2653} lon={55.2925}/>
        </div>
        <div className='FamousCity__content-city'>
          {/* singapur */}
          <EachFamousCity lat={1.2897} lon={103.8501}/>
        </div>
 
      </div>
    </div>
  )
}