import classes from './StartingPageContent.module.css';
import download from "./download.jpeg"
import home from "../home.jpeg"

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <h1>Explore with our Board!</h1>
      <div>
        <img src={download} alt="" />
      </div>
      <div>
        <img src={home} alt="" />
      </div>
    </section>
  );
};

export default StartingPageContent;
