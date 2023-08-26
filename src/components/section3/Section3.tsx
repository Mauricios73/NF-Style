// import { useEffect, useState } from 'react';
import './Section3.scss';

export default function Loja() {
  // const [headerContent, setHeaderContent] = useState('');
  // const [titleContent, setTitleContent] = useState('');
  // const [excerptContent, setExcerptContent] = useState('');

  // useEffect(() => {
  //   const fetchData = () => {
  //     setHeaderContent('<img src="./produto.jpeg" alt="produto" height="120" width="260" />');
  //     setTitleContent('Lorem ipsum dolor sit amet');
  //     setExcerptContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis');
  //   };

  //   const headerElement = document.getElementById('header');
  //   const titleElement = document.getElementById('title');
  //   const excerptElement = document.getElementById('excerpt');
  //   const animatedBgs = document.querySelectorAll('.animated-bg');
  //   const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

  //   fetchData();

  //   if (headerElement) {
  //     headerElement.innerHTML = headerContent;
  //   }

  //   if (titleElement) {
  //     titleElement.innerHTML = titleContent;
  //   }

  //   if (excerptElement) {
  //     excerptElement.innerHTML = excerptContent;
  //   }

  //   animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  //   animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
  // }, [excerptContent, headerContent, titleContent]);

  return (
    <div className='container-section3'>
      <div className="loja">
        <h1>Em breve</h1>
        <p>A loja da NF STYLE com os melhores produtos para seu cabelo e sua barba!</p>
      </div>
      <div className='card-container'>
        
        <div className="card">
      <div className="card-header animated-bg" id="header">&nbsp;</div>
      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text" id="title">
          &nbsp;
        </h3>
        <p className="card-excerpt" id="excerpt">&nbsp;
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg" id="profile_img">&nbsp;</div>
          <div className="author-info">
            <strong className="animated-bg animated-bg-text" id="name">&nbsp;</strong>
            <small className="animated-bg animated-bg-text" id="date">&nbsp;</small>
          </div>
        </div>
      </div>
        </div>
        <div className="card">
          <div className="card-header animated-bg" id="header">&nbsp;</div>
          <div className="card-content">
            <h3 className="card-title animated-bg animated-bg-text" id="title">
              &nbsp;
            </h3>
            <p className="card-excerpt" id="excerpt">&nbsp;
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
            </p>
            <div className="author">
              <div className="profile-img animated-bg" id="profile_img">&nbsp;</div>
              <div className="author-info">
                <strong className="animated-bg animated-bg-text" id="name">&nbsp;</strong>
                <small className="animated-bg animated-bg-text" id="date">&nbsp;</small>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}