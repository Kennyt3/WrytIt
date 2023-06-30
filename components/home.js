import React, { useEffect } from 'react'
import { useContextValue } from './context/userContext'
import Image from 'next/image'
import heroImage from '../public/img/hero.jpg'
const HomePage = () => {
  const { loggedIn, userInfo } = useContextValue()
  // useEffect(() => {
  //   console.log(loggedIn, userInfo)
  // }, [loggedIn, userInfo])
  return (
    <div>
      {/* {loggedIn ? (
        <>
          <h1>Congrats, signed in</h1>
        </>
      ) : (
        <>
          <h1>Go to sign in</h1>
        </>
      )} */}
      <div className='bloghome'>
        <div className='bloghero'>
          <div className='blogherotext'>
            <h1>Unleash Your Creativity and Share Your Stories with WrytIt</h1>
            <p>
              WrytIt empowers you to be the author of your own narrative.
              Whether you're an aspiring writer, a seasoned blogger, or someone
              who loves to explore the world through captivating stories, our
              app provides the perfect platform to express yourself, connect
              with others, and inspire a global community.
            </p>
          </div>
          <div>
            <Image alt='hero' src={heroImage} width={500} height={500} />
          </div>
        </div>
        <div className='feature' id='features'>
          <h2>FEATURES</h2>
          <div className='discover'>
            <div>
              <h4>Discover Engaging Content</h4>
              <p>
                Immerse yourself in a world of captivating stories from a
                diverse range of genres, topics, and perspectives. Explore the
                latest trends, discover hidden gems, and dive into
                thought-provoking articles created by passionate writers. With
                WrytIt, you'll always find fresh and engaging content to feed
                your curiosity and inspire your own creative endeavors. Step
                into a world where imagination knows no bounds. Explore a vast
                collection of thought-provoking articles, fascinating personal
                journeys, and inspiring anecdotes from writers around the globe.
              </p>{' '}
            </div>
            <div>
              <h4>Craft Your Masterpiece</h4>
              <p>
                Create breathtaking blog posts that capture the essence of your
                thoughts and experiences. Unleash your creativity and bring your
                ideas to life with our intuitive and feature-rich blogging
                tools. Our app offers a user-friendly interface that empowers
                you to craft visually stunning blog posts with ease. From
                writing and formatting to adding multimedia elements such as
                images, videos, and interactive widgets, we provide all the
                tools you need to make your stories stand out. Whether it's a
                heartfelt memoir, a travel diary, or an insightful analysis,
                WrytIt empowers you to bring your unique vision to life.
              </p>
            </div>
            <div>
              <h4>Connect with a Vibrant Community</h4>
              <p>
                Join a community of like-minded individuals who share your
                passion for writing and self-expression. Engage in lively
                discussions, exchange feedback, and gain valuable insights from
                fellow bloggers, readers, and industry experts. Whether you're
                seeking inspiration, advice, or collaboration opportunities, our
                community is here to support and encourage your growth as a
                writer.
              </p>
            </div>
            <div>
              <h4>Customize and Personalize</h4>
              <p>
                Make your blog uniquely yours with our wide range of
                customization options. Choose from a variety of stunning themes
                and layouts to match your style and personality. Customize
                fonts, colors, and other design elements to create a visually
                captivating blog that reflects your individuality. With WrytIt,
                your blog becomes an extension of who you are.
              </p>
            </div>
            <div>
              <h4>Seamless Mobile Experience</h4>
              <p>
                Access your blog and stay connected on the go with our
                responsive and user-friendly mobile app. Whether you're
                commuting, relaxing at a coffee shop, or embarking on a new
                adventure, you can effortlessly write, edit, and publish your
                blog posts right from your smartphone or tablet. Your creativity
                knows no bounds, and neither should your ability to share it
                with the world.
              </p>
            </div>
            <div>
              <h4>Join the Community Today!</h4>
              <p>
                Start your journey as a blogger or continue your existing one
                with WrytIt. Unlock the power of self-expression, connect with a
                vibrant community, and share your stories with the world.
                Whether you're an avid reader, a passionate writer, or simply
                someone who appreciates the beauty of words, our app is your
                platform for inspiration, connection, and limitless
                storytelling. Sign up today and let your voice be heard!
              </p>
            </div>
          </div>
        </div>
        <div className='popular'>
          <h5>
            Find Popular and Interesting blog posts to help elevate your day
          </h5>
        </div>
      </div>
    </div>
  )
}

export default HomePage
