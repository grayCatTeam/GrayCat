import {useState, useEffect} from 'react';
import './ourworks.css';
import Header from '../../../src/Components/Header';
import ContentLanding from '../../../src/Components/ContentLanding';
import varierty from '../../Assets/images/varierty.svg';
import Footer from '../../../src/Components/Footer';
import work from '../../Assets/images/work.svg';
import 'rc-pagination/assets/index.css';
import LetsComponent from '../../../src/Components/LetsComponent';
import {Swiper, SwiperSlide} from 'swiper/react';
import SlideTestimonial from '../../../src/Components/SlideTestimonial/slideTestimonial';

const portfolio = [
  {
    category: ['all', 'film', 'branding'],
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    category: ['all', 'casting', 'tv'],
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    category: ['all', 'film'],
    image: 'https://picsum.photos/600/200?random=3',
  },
  {
    category: ['all', 'music'],
    image: 'https://picsum.photos/200/200?random=4',
  },
  {
    category: ['all', 'tv', 'promo'],
    image: 'https://picsum.photos/500/200?random=5',
  },
  {
    category: 'all,others,promo',
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    category: 'all,others,promo',
    image: 'https://picsum.photos/300/200?random=5',
  },
  {
    category: 'all,others,promo',
    image: 'https://picsum.photos/300/200?random=5',
  },
];

function OurWorks() {
  const perPage = 6;
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [paginatedProjects, setPaginationProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProjects(portfolio);
    setPaginationProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  const getPaginatedItems = (items) => {
    return items.slice(offset, offset + perPage);
  };

  const handlePageClick = function (page) {
    setCurrentPage(page);

    let offset = Math.ceil(page * perPage - 1);
    setOffset(offset);

    setPaginationProjects(getPaginatedItems(projects));
  };

  return (
    <div>
      <div style={{backgroundColor: 'black'}}>
        <Header/>
        <ContentLanding/>
      </div>
      <div className="container ourTitles text-start">
        <img src={varierty} width="40%" style={{margin: '5rem 5rem'}}/>

        <div className="container d-flex flex-wrap justify-content-center">
          <div className="ourTitleBox">Senaryo</div>
          <div className="ourTitleBox">Prodüksiyon</div>
          <div className="ourTitleBox">Tanıtım ve Reklam Filmi</div>
          <div className="ourTitleBox">Casting</div>
          <div className="ourTitleBox">Müzik Produksiyon</div>
          <div className="ourTitleBox">Cast Akademi</div>
          <div className="ourTitleBox">Organizasyon</div>
          <div className="ourTitleBox">TV Program</div>
          <div className="ourTitleBox">Marka Yaratmak</div>
        </div>
      </div>
      <div className="Portfolio container d-flex">
        <div className="filterContainer">
          <img src={work}/>
          <div className="filterList">
            <ul>
              <li>
                <a
                  href="#filter/all"
                  className={filter === 'all' ? 'active' : ' '}
                  onClick={() => setFilter('all')}
                >
                  ALL
                </a>
              </li>
              <li>
                <a
                  href="#filter/film"
                  className={filter === 'film' ? 'active' : ' '}
                  onClick={() => setFilter('film')}
                >
                  FILM
                </a>
              </li>
              <li>
                <a
                  href="#filter/music"
                  className={filter === 'music' ? 'active' : ' '}
                  onClick={() => setFilter('music')}
                >
                  MUSIC
                </a>
              </li>
              <li>
                <a
                  href="#filter/promo"
                  className={filter === 'promo' ? 'active' : ' '}
                  onClick={() => setFilter('promo')}
                >
                  PROMO
                </a>
              </li>
              <li>
                <a
                  href="#filter/branding"
                  className={filter === 'branding' ? 'active' : ' '}
                  onClick={() => setFilter('branding')}
                >
                  BRANDING
                </a>
              </li>
              <li>
                <a
                  href="#filter/tv"
                  className={filter === 'tv' ? 'active' : ' '}
                  onClick={() => setFilter('tv')}
                >
                  TV
                </a>
              </li>
              <li>
                <a
                  href="#alex"
                  className={filter === 'casting' ? 'active' : ' '}
                  onClick={() => setFilter('casting')}
                >
                  CASTING
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="projectContainer row d-flex flex-wrap justify-content-center">
          {/*
            {paginatedProjects.map((item) =>
              item.filtered === true ? <div className="portfolioBox" key={item.name}><img src={item.image}/></div> : "")}
            <Pagination
              onChange={handlePageClick}
              current={currentPage}
              total={projects.length}
              pageSize={perPage}
            />*/}
        </div>
      </div>
      <div className="letsComponentWrapper">
        <LetsComponent buttonName="CONTACT" position={'absolute'}/>
      </div>

      <div className="customerReviewContainer">
        <Swiper spaceBetween={500} slidesPerView={2}>
          <SwiperSlide>
            <SlideTestimonial/>
          </SwiperSlide>
          <SwiperSlide>
            <SlideTestimonial/>
          </SwiperSlide>
          <SwiperSlide>
            <SlideTestimonial/>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer/>
    </div>
  );
}

export default OurWorks;
