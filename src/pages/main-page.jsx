import { WhyOnay, HowWork, HowFind, HowMotivates, Intro, PriceList, SearchWork, FindWork, Footer } from '../components';

const MainPage = () => {
  return (
    <div>
      <Intro />
      <WhyOnay />
      <FindWork />
      <HowWork />
      <HowFind />
      <HowMotivates />
      <PriceList />
      <SearchWork />
      <Footer />
    </div>
  )
}

export default MainPage;