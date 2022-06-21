import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import heroImage from '../img/hero image.png'
import cheaperTxnsImage from '../img/cheaper transactions.png'
import localColabImage from '../img/local collaboration.png'
import feesToFundImage from '../img/fees to fund.png'
import stepOneImage from '../img/step one.png'
import stepTwoImage from '../img/step two.png'
import stepThreeImage from '../img/step three.png'
import getInTouchImage from '../img/get in touch.png'

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Totnes Pound
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            A digital currency for community growth
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" href='#learn-more'>Learn More</Button>
          </p>
          <p className="mt-4 text-gray-600">(This is a very early project at the idea stage.  Nothing is built yet.)</p>
        </div>
        <div className="lg:w-1/2 mt-4">
          <img src={heroImage} alt="Logo" />
        </div>
      </div>
    </section>
    <SplitSection
      id="learn-more"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">A Local Currency</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">

            Totnes Pound is an alternative payment method for goods and services.  Instead of paying using a debit/credit card or cash, a smart phone app is used.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">


            It keeps money in the local economy, creates a central fund with potential for investment, and provides a vehicle for lower transaction fees meaning cheaper prices for all.
          </p>



        </div>
      }
      secondarySlot={<img src={heroImage} alt="Logo" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Cheaper Transactions
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Credit card transactions and cash-handling are a cost, siphoning fees from the local economy for every transaction.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            This cost would be significantly reduced with a digital currency.  The fees are retained by local businesses and consumers in the form of lower prices.
          </p>
        </div>
      }
      secondarySlot={<img src={cheaperTxnsImage} alt="Logo" />}
    />

    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Increased Local Collaboration</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            If it's easier and cheaper to transact locally, then local commerce is encouraged.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Totnes Pounds are accepted and transacted by the local community, creating cheaper local commerce and an incentive to keep more money local.
          </p>
        </div>
      }
      secondarySlot={<img src={localColabImage} alt="Logo" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Community Income
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Instead of transaction fees leaving the local economy, these fees can instead be retained by the community and spent on community initiatives:
          </p>
          <ul class="mt-8 text-xl font-light leading-relaxed list-disc ml-8">
            <li>investment in local community projects, like energy and food production</li>
            <li>investment in classical investment accounts, like stocks &amp; shares, Vanguard etc</li>
            <li>dividend payments back to the community</li>
          </ul>
        </div>
      }
      secondarySlot={<img src={feesToFundImage} alt="Logo" />}
    />


    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">How does it work</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl text-center mb-4">Step One - App Download</p>
              <img src={stepOneImage} alt="Logo" />
              <ol className="mt-4 list-decimal ml-4">
                <li className="mt-4">A user downloads the Totnes Pound app, and connects their bank account.</li>
                <li className="mt-4">They choose to convert some money from British Pounds to Totnes Pounds.</li>
                <li className="mt-4">The British Pounds are stored in a central bank account, managed by a trust.</li>
              </ol>
              <p className="mt-4">
                The app is used every day, creating a hub for community news and action.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl text-center mb-4">Step Two - Transaction</p>
              <img src={stepTwoImage} alt="Logo" />
              <ol className="mt-4 list-decimal ml-4">
                <li className="mt-4">At checkout, a store presents a customer with a Totnes Pound payment option.</li>
                <li className="mt-4">To pay, a customer scans a QR code and confirms the amount and payee.</li>
                <li className="mt-4">The customer's app authorises transfer of Totnes Pounds from their account to the store's account.</li>
              </ol>
              <p className="mt-4">
                It's very similar to a mobile payment, and lower transaction cost benefits both customer and store.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl text-center mb-4">Step Three - Community Investment &amp; Returns</p>
              <img src={stepThreeImage} alt="Logo" />
              <p className="mt-4">
                The more transactions performed using Totnes Pounds, the more British Pounds are available for community investment.
              </p>
              <p className="mt-4">
                The community can learn about projects benefiting from the fund via the app that they use every day.
              </p>
              <p className="mt-4">
                The more money is in Totnes Pounds, the greater the potential benefit to the community.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      id="get-involved"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Get Involved
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            This is a very early stage community project, and we're looking for people to get involved.
          </p>
          <ul class="mt-8 text-xl font-light leading-relaxed list-disc ml-8 mb-8">
            <li>designers</li>
            <li>economists</li>
            <li>developers</li>
            <li>merchants</li>
            <li>customers</li>
            <li>enthusiastic people</li>
          </ul>
          <p className="mt-8 text-xl font-light leading-relaxed">We will also provide news and updates via a mailing list.  If any of this sounds like you, please click one of these buttons.</p>
        </div>
      }
      secondarySlot={
        <div className="text-center">
          <Button size="lg">Get in Touch</Button> <br /><br />
          <Button size="lg">Join the mailing list</Button>
        </div>
      }
    />

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
