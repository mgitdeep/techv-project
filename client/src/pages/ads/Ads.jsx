import { useEffect, useState } from 'react';
import style from './Ads.module.scss'
import Card from '../../components/card/Card'

const Ads = () => {

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('/ads');
        const ads = await res.json();
        setAds(ads);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, []);



  return (
    <div className={style.section}>
      <div className={style.item}>
      
      {ads.map((ad, i) => (
        <Card key={i}>
          <div className={style.adContent}>
            <div key={ad._id + 1}> {ad.name} </div>
            <div key={ad._id + 2}>{ad.category}</div>
            <div key={ad._id + 3}>{ad.price}</div>
            <div key={ad._id + 4}>{ad.condition}</div>
            <div key={ad._id + 5}>{ad.location}</div>
            <div key={ad._id + 6}>{ad.description}</div>
            <div key={ad._id + 7}>{ad.advertiser_info}</div>
            <div key={ad._id + 8}>{ad.contact_info}</div>
            {/* {console.log(ad._id)} */}
        </div>
        </Card>
      ))}
      
      </div>
    </div>
  )
}

export default Ads