import CastCard from "../../../src.old/Atoms/CastCard";
import SmallTitle from "../../../src.old/Atoms/SmallTitle";
import white from "../../../src.old/Assets/images/tab.svg";


function CastProfilInfo() {
  return(
    <div className={`container`}>
      <div className="row">
        <div className="col-xl-4 col-sm-12">
          <CastCard name="Ariana Tao"/>
        </div>
        <div className="col-xl-8 col-sm-8 pt-5">
          <div className={`w-75 d-flex justify-content-xl-between justify-content-sm-end pt-5 mt-1 pe-5`}>

            <SmallTitle title="height" src={white}/>
            <SmallTitle title="waist" src={white}/>
            <SmallTitle title="shoe" src={white}/>
          </div>
          <div className={`col-xl-12 pt-5`}>
            <div className={`w-100 pt-5`}>
              <SmallTitle title="skils" src={white}/>
            </div>
            <div className={`w-100 pt-5`}>
              <SmallTitle title="language" src={white}/>
            </div>
          </div>
        </div>

        <div className={`row`}>
          <div className={`col-xl-12 mt-5`}>
            <h3 className={`fs-3 fw-bold mb-0`}>Bachelor's of Fine Art</h3>
            <img src={white}/>
            <p className={`my-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              felis eros, tristique feugiat viverra et, tempor nec nisl. Nunc in
              magna tortor. Donec ac mauris vulputate, interdum diam eget,
              eleifend nunc. Vivamus et dignissim lacus. Vivamus hendrerit
              sodales nunc nec consequat. Nam molestie leo nec finibus ultrices.
              Nulla in euismod nibh. In et dictum eros. Nunc dignissim dictum
              sapien non.
            </p>
          </div>
          <div className={`col-xl-12 mt-5`}>
            <h3 className={`fs-3 fw-bold mb-0`}>Mimar Sinan University</h3>
            <img src={white}/>
            <p className={`my-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              felis eros, tristique feugiat viverra et, tempor nec nisl. Nunc in
              magna tortor. Donec ac mauris vulputate, interdum diam eget,
              eleifend nunc. Vivamus et dignissim lacus. Vivamus hendrerit
              sodales nunc nec consequat. Nam molestie leo nec finibus ultrices.
              Nulla in euismod nibh. In et dictum eros. Nunc dignissim dictum
              sapien non.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CastProfilInfo