// function Hello() {
//   return <h1>Hello World!</h1>;
// }

const name = "Ian";

const displayMessage = () => {
  return "Help is on its way";
};

const Hello = () => <h1>Message is: {displayMessage()} </h1>;

export default Hello;
