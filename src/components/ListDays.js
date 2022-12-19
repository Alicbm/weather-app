import '../styles/ListDays.css';

export function ListDays(){
  return(
    <div className="ListDays">
      <ul className="ListDays__list">
        <li className='active'>Today</li>
        <li>Tomorrow</li>
        <li>Day 3</li>
        <li>Day 4</li>
        <li>Day 5</li>
      </ul>
    </div>
  )
}