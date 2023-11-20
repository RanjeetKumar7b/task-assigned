import React from 'react'
import Like from "./Images/like-btn.jpeg";
import Stars from "./Images/icons8-star-64.png";
import Views from "./Images/icons8-views-64.png";
import Heart from "./Images/heart.png";
function Page(props) {
  const { post, star, like, seen, hearts,
    followers, following, aug,
    jan, nov, aug_time, jan_time,
    nov_time, views_aug, views_jan,
    views_nov } = props;
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
                <h3>{followers}</h3>
                <p>Followers</p>
              </div>
              <div className="following">
                <h3>{following}</h3>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="details">
            <p>
              Co-founder & CEO at Terribly Tiny Tales
            </p>
          </div>
          <div className="social_id">
            <a href="https://instagram.com/anujgosalia?igshid=MzMyNGUyNmU2YQ==">
                https://instagram.com/anujgosalia</a>
          </div>

          <div className="links">
            <div className="stars">
              <img className="img_pro" src={Stars} alt='loading' />
              <h3>{star}</h3>
            </div>
            <div className="likes">
              <img className="img_pro" src={Like} alt='loading' />
              <h3>{like}</h3>
            </div>
            <div className="views">
              <img className="img_pro" src={Views} alt='loading' />
              <h3>{seen}k</h3>
            </div>
            <div className="hearts">
              <img className="img_pro" src={Heart} alt='loading' />
              <h3>{hearts}k</h3>
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="post_count"><h1 style={{ "color": "#0165e1" }}>{post} Posts</h1></div>
        <div className="posts">
          <div className="post">
            <h1>A Changing World Order </h1>
            <p>
              The World is Changing at a feverish pace. Friends, colleagues and
              everyone engaged in knowledge work are beginning to sesnse
              this,including...
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>musing </span>by
                anujgosalia
              </h3>
              <p>August {aug} . {aug_time} mins Read . {views_aug} Views</p>
            </div>
          </div>
          <div className="post">
            <h1>Indian v/s Australia</h1>
            <p>
              Think about it- this cricket series was akin to therapy.<br /><br />
              Laying our childhood trauma up top, working with it slowly and
              surely over two m...
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>thought </span>by
                anujgosalia
              </h3>
              <p>January {jan} . {jan_time} mins Read . {views_jan} Views</p>
            </div>
          </div>
          <div className="post">
            <h1>Write To Build</h1>
            <p>
              Writing is the first step to create:<br /><br /><br />
              - Stories<br />
              - Product<br />
              - Companies
            </p>
            <div className="post_info">
              <h3>
                <span className="post_adj" style={{ "color": "#17a9fd" }}>thought </span>by
                anujgosalia
              </h3>
              <p>November {nov} . {nov_time} mins Read . {views_nov} Views</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page