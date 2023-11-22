import React from 'react'
import Like from "./Images/like-btn.jpeg";
import Stars from "./Images/icons8-star-64.png";
import Views from "./Images/icons8-views-64.png";
import Heart from "./Images/heart.png";
function Page(information) {
  return (
    <div>
      <nav>
        <div className="left">
          <div className="logo"></div>
          <div className="line"></div>
          <div className="word">STORIES</div>
        </div>
        <div className="right">
          <button className="course_button">Courses</button>
        </div>
      </nav>
      <header>
        <div className="top_image"></div>
      </header>
      <section className="intro_sec">
        <div className="profile">
          <div className="profile_photo">
            <img src={require('./Images/tales_founder.webp')} alt="ranjit" />
          </div>
          <div className="profile_info">
            <h3>Anuj Gosalia</h3>
            <div className="fsection">
              <div className="followers">
                <h3>{information.followers}</h3>
                <p>Followers</p>
              </div>
              <div className="following">
                <h3>{information.following}</h3>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="details">
            <p>
              {information.profile}
            </p>
          </div>
          <div className="social_id">
            <a href="https://instagram.com/anujgosalia?igshid=MzMyNGUyNmU2YQ==">
                {information.insta}</a>
          </div>

          <div className="links">
            <div className="stars">
              <img className="img_pro" src={Stars} alt='loading' />
              <h3>{information.star}</h3>
            </div>
            <div className="likes">
              <img className="img_pro" src={Like} alt='loading' />
              <h3>{information.like}</h3>
            </div>
            <div className="views">
              <img className="img_pro" src={Views} alt='loading' />
              <h3>{information.seen}k</h3>
            </div>
            <div className="hearts">
              <img className="img_pro" src={Heart} alt='loading' />
              <h3>{information.hearts}k</h3>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="post_count"><h1 style={{ "color": "#0165e1" }}>{information.post}</h1></div>
        <div className="posts">
          <div className="post">
            <h1>{information.title1} </h1>
            <p>
              {information.content1}
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>{information.category1} </span>
                {information.author1}
              </h3>
              <p>{information.aug} . {information.aug_time} . {information.views_aug}</p>
            </div>
          </div>
          <div className="post">
            <h1>{information.title2}</h1>
            <p>
              {information.content2}
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>{information.category2}</span>{information.author2}
              </h3>
              <p>{information.jan} . {information.jan_time} . {information.views_jan}</p>
            </div>
          </div>
          <div className="post">
            <h1>{information.title3}</h1>
            <p>{information.content3}<br/><br /><br />
              {information.story}<br />
              {information.product}<br />
              {information.company}
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>{information.category3}</span>{information.author3}
              </h3>
              <p>{information.nov} . {information.nov_time} . {information.views_nov}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
