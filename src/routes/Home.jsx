import FeatureItem from "../components/FeatureItem";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import chat from "../assets/icon-chat.png";
import money from "../assets/icon-money.png";
import security from "../assets/icon-security.png";
import { useDispatch } from "react-redux";
import { profileUser } from "..//reducers/profile.reducer";

function Home() {
  {
    /*} const dispatch = useDispatch();
  dispatch(profileUser()).then((res) => {
    console.log(res);
  }); */
  }
  return (
    <>
      <Nav />
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          icon={chat}
          alt="Chat Icon"
        />
        <FeatureItem
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
          icon={money}
          alt="Money Icon"
        />
        <FeatureItem
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
          icon={security}
          alt="Security Icon"
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
