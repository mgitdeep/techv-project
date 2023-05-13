// Child component 

import { useEffect, useState } from 'react';
import style from './Ads.module.scss'
import Card from '../../components/card/Card'
import axios from 'axios';
import { Buffer } from 'buffer';


const Ads = () => {

  const [ads, setAds] = useState([]);


  // Retrieving Ad post data from Atlas

  useEffect(() => {
    axios.get('http://localhost:5000/ads')
      .then((ress) => {
        // console.log(ress.data)                  // this is giving continuous ARRAY data of the documents from Atlas
        setAds(ress.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  // NOTE: You can't use the below code because here we again doing "res.json()" to get the data in correct format which we ALREADY have done in "ads.js" router.get("/ads") portion!
  // useEffect(() => {
  //   const fetchData = async() => {
  //     try {
  //       const res = await axios.get('http://localhost:5000/ads');
  //       // experimenting with this - if throw error then will follow then catch
  //       const ads = await res.json();
  //       setAds(ads);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData();
  // }, []);



//   return (
//     <div className={style.section}>
//       <div className={style.item}>
    
//       {ads.map((ad, i) => {
//         // const base64String = Buffer.from(ad.image).toString('base64');    will also try this later
//         // const base64String = Buffer.from(ad.image).toString('base64');
//         // const base64String = btoa(String.fromCharCode(...new Uint8Array((ad.image.data.data))));
//         // const base64String = btoa(String.fromCharCode(...new Uint8Array(ad.image.data)));
//         const base64String = Buffer.from(ad.image.data.data).toString('base64');
//         // return <img src={`data:image/jpeg;base64,${base64String}`} alt="adImg" width="300"/>;
//         return (

//           <Card key={i}>
//           <div className={style.adContent}>
//             {/* <img src={`data:image/jpeg;base64,${base64String}`}  /> */}
//             {/* Here we've to convert the buffer data into base 64 string so that IMG tag can display it */}
//             <img src={`data:image/jpeg;base64,${base64String} alt="adImg" width="300"/>
//             <div key={ad._id + 1}> {ad.name} </div>
//             <div key={ad._id + 2}>{ad.category}</div>
            // <div key={ad._id + 3}>{ad.price}</div>
            // <div key={ad._id + 4}>{ad.condition}</div>
            // <div key={ad._id + 5}>{ad.location}</div>
            // <div key={ad._id + 6}>{ad.description}</div>
            // <div key={ad._id + 7}>{ad.advertiser_info}</div>
            // <div key={ad._id + 8}>{ad.contact_info}</div>
//              {/* {console.log(ad._id)} */}
             

//           </div>
//         </Card>
//         )
        
        
//       })}
      
//       </div>
//     </div>
//   )
// }

return (
  <div className={style.section}>
    <div className={style.item}>
      {ads.map((ad, i) => {
        const base64String = Buffer.from(ad.image.data.data).toString('base64');
        return (
          <Card key={i}>
            <div className={style.adContent}>
              <img src={`data:image/jpeg;base64,${base64String}`} alt="adImg" width="300" />
              <div key={ad._id + 1}> Name: {ad.name} </div>
              <div key={ad._id + 2}>Category: {ad.category}</div>
              <div key={ad._id + 3}>Price: Rs {ad.price}</div>
              <div key={ad._id + 4}>Is Free: {ad.isFree ? 'Yes' : 'No'}</div>
              <div key={ad._id + 5}>Condition: {ad.condition}</div>
              <div key={ad._id + 6}>Location: {ad.location}</div>
              <div key={ad._id + 7}>Description: {ad.description}</div>
              <div key={ad._id + 8}>Advertiser: {ad.advertiser_info}</div>
              <div key={ad._id + 9}>Contact: {ad.contact_info}</div>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
);

}

export default Ads