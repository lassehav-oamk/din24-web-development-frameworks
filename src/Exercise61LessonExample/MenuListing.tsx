import type { MenuCategoryDataType } from './MenuCategoryDataType';
import styles from './MenuListing.module.css';

export default function MenuListing({ menuCategoryData } : { menuCategoryData: MenuCategoryDataType[]}) {
  return (
    <div>
      {
        menuCategoryData.map(element => (
          <div className={styles.box}>
              <div>{ element.name }</div>
              <div>{ element.price }€</div>
          </div>
        ))
      }
        {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Pasta Carbonara</div>
            <div>13€</div>
        </div>
        <div  style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Hamburger meal with fries</div>
            <div>14€</div>
        </div>
        <div  style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Chicken Nuggets</div>
            <div>12€</div>
        </div> */}
    </div>
  )
}
