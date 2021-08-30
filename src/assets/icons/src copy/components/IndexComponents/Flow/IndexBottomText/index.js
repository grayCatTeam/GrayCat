import React,{useEffect} from 'react';

//import npm packages
import AOS from 'aos';

//import styles
import * as classes from "./bottomtext.module.scss";
import mesa from "../../../../assets/images/mesa.svg";
import nur from "../../../../assets/images/nurol.svg";

const BottomText = () => {

    useEffect(()=> {

        AOS.init()

    },[])

    return(
        <main>
            <div className={classes.imgwrap} data-aos={'zoom-in'} data-aos-duration={'1300'}>
                <div className={classes.imgbox}>
                    <img
                        className="d-block"
                        src={mesa}
                        alt="mesa"
                        width={'100%'}
                    />
                </div>
                <span></span>
                <div className={classes.imgbox}>
                    <img
                        className="d-block"
                        src={nur}
                        alt="nurol"
                        width={'100%'}
                    />
                </div>
            </div>


            <p data-aos={'flip-down'} data-aos-duration={'1300'}>
            Bugüne kadar hayata geçirdiğimiz yüzlerce projeye değer katan,<br/>
            bizi büyük bir aile yapan yüz binlerce dostumuzun<br/>
            en güzel anılarının ortak noktası olmanın mutluluğunu yaşıyoruz.<br/>
            Şimdi de güzel ve unutulmaz anılarınıza yenilerini ekleyeceğiniz,<br/>
            muhteşem doğasıyla kendinizi hep genç hissedeceğiniz<br/>
            Yeşilyaka’yı beğeninize sunuyoruz.<br/>
            </p>
           
        </main>
    )
}

export default BottomText;