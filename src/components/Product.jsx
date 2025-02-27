import styles from "../components/Product.module.css"

function Product({name, price, category, inStock, id}) {
    
    return(
        <div className={styles.container}>
            <h2 className={styles.heading}>{name}</h2>
            <h3 className={styles.saleBy}>Price: ${price}</h3>
            <h4>{inStock ? "Buy Now" : "Out of Stuck"}</h4>
            <h5>{category}</h5>
            <h5>Product UPC: {id}</h5>
        </div>
    )
}

export default Product;