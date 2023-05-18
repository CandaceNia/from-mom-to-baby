import './About.css';
const About = () => {
  return (
    <div className="about-section">
      <h3>About This App...</h3>
      <h4>The Creater</h4>
      <img
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd1bd611c-355c-4c18-ac40-39d74413dc05%2FCandace_Garvin.jpg?id=c429e6a3-8b03-415a-b232-3cc4d4e31cb8&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=d0f8ba06-f78e-46c8-b9c0-daef7b4d8c01&cache=v2"
        alt="my-pic"
        className='my-pic'
      ></img>
      <p>
        Candace Garvin is a Jr. Software Developer currently enrolled at Pursuit
        of Queens, NY. She aspires to advance her skill set so she can create
        more apps that can solve everyday problems.
      </p>
    </div>
  );
};
export default About;
