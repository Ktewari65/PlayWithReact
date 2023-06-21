import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY = [
  {
    id:"p1",
    price:10,
    title:"My First Book",
    description:"React 1 crash course"
  },
  {
    id:"p2",
    price:20,
    title:"My Second Book",
    description:"React 2 crash course"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{
        DUMMY.map((item)=>{
      return   <ProductItem
          key ={item.id}
          id = {item.id}
          price= {item.price}
          title ={item.title}
          description={item.description}
       />
        })
      }
         {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!' 
        /> */}
      </ul>
    </section>
  );
};

export default Products;
