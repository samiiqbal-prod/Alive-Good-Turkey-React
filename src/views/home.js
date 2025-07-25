import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Alive Good Turkey</title>
        <meta property="og:title" content="Alive Good Turkey" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Rooms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Book Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Experience the beauty of Pakistan with our eco-friendly and
              sustainable hotel accommodations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Green Tourism Hotels
            </span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1667125094717-47e0ff6d0608?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHwlMjA0JTIwc3RhciUyMGhvdGVsJTIwcGFraXN0YW58ZW58MHx8fHwxNzUzNDQwNDc4fDA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1728365743796-ee69341a166d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fCUyMDQlMjBzdGFyJTIwaG90ZWwlMjBwYWtpc3RhbnxlbnwwfHx8fDE3NTM0NDA0Nzh8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1658366670908-9b3c8c7e2178?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzQ0MDY4NHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1724681435399-972d668fade0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fCUyMDQlMjBzdGFyJTIwaG90ZWwlMjBwYWtpc3RhbnxlbnwwfHx8fDE3NTM0NDA0Nzh8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Modern and Comfortable Rooms</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Guided Tours</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Restaurant</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Indulge in our well-appointed rooms designed to provide a relaxing
              stay with all the necessary amenities.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Experience guided tours to explore the beautiful surroundings and
              immerse yourself in the local culture.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Enjoy delicious meals at our on-site restaurant, offering a
              variety of cuisines to satisfy your taste buds.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Book Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Experience the beauty of nature at Green Tourism Hotels. Book your
              room today and enjoy a relaxing getaway.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Book Your Stay Now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Luxurious Rooms</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Fine Dining Experience</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Guided Tours</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Indulge in our spacious and elegantly designed rooms with modern
              amenities for a comfortable stay.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Enjoy a culinary journey at our restaurant offering a variety of
              delicious dishes made from fresh, local ingredients.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Explore the beauty of Pakistan with our guided tours to iconic
              landmarks and hidden gems.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">Starting at $100 per night</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">Starting at $150 per night</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">Starting at $200 per night</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Book Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">Save 10% on yearly bookings</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Book Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">Save 15% on yearly bookings</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Book Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">Save 20% on yearly bookings</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">
              Complimentary breakfast included
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Free Wi-Fi in rooms</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Access to fitness center</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Room with a view of the garden</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Daily housekeeping service</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">24/7 room service available</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">
              Luxury suite with private balcony
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Complimentary spa treatment</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Guided tour of local attractions included
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Explore Our Green Hotels</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Book Your Room</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Enjoy Our Services</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Join Our Loyalty Program</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Discover our eco-friendly hotels nestled in the beautiful
              landscapes of Pakistan, offering a unique and sustainable stay
              experience.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Choose from a variety of comfortable and environmentally conscious
              rooms that cater to your needs and preferences.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Indulge in our top-notch services including dining at our
              restaurant, guided tours to explore the surroundings, and
              impeccable housekeeping.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Become a member of our loyalty program to unlock exclusive
              benefits, discounts, and rewards during your stays.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              We had a fantastic stay at Green Tourism Hotels. The rooms were
              clean and comfortable, and the staff was incredibly friendly and
              helpful. We will definitely be back!
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              The services at Green Tourism Hotels exceeded our expectations.
              The restaurant offered delicious meals, and the housekeeping was
              top-notch. Highly recommend!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              I joined the loyalty program at Green Tourism Hotels and it has
              been a game-changer. The perks and discounts make every stay even
              more enjoyable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              The tours organized by Green Tourism Hotels were unforgettable. We
              got to explore the beauty of Pakistan like never before.
              Can&apos;t wait to come back!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Read what our guests have to say about their experience at Green
              Tourism Hotels.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Travel Blogger</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Frequent Traveler</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Business Executive</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Adventure Seeker</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Babusar Top</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Nathia Gali</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Rooms</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Loyalty Program</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
