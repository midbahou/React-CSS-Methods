
import './App.css'
import Product from './components/Product';
import products from './data/products';



function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>)
}

function Footer() {
  return (<h1>Enjoy the React experience!</h1>)
}
const style2 = "green"

function App() {

  return (
    <>
    <Header />
    <Content color="blue" text="Let's create a web page using React different styling methods."/>
    <Content color="red" text="Method 1:  CSS Stylesheet" />
    <Content color={style2} text="Method 2:  Inline styling" />
    <Content color="gray" text="Method 3:  CSS Modules" />
    <Content color="black" text="Method 4:  Styled-components" />

    <div>
      {
        products.map((item) => (
          <Product {...item} key={item.id}/>
        ))
      }
    </div>
    <Footer />
     
    </>
  )
}

export default App
