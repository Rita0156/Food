 import "./nav.css" 
function Navbar(){
      return (
           <div className="nav">
                <div className="home">
                    <img src="https://www.freeiconspng.com/thumbs/food-png/tacos-puffle-food-png-14.png" alt="" />
                    <h2>Foodie</h2>
                </div>
                <div className="info">
                     <h2>About</h2>
                     <h2>Food</h2>
                     <h2>Contact</h2>
                </div>
                <div className="log">
                    <div className="user">
                       <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" />
                       <h2>User</h2>
                    </div>
                    <div className="user">
                        <img src="https://static-00.iconduck.com/assets.00/food-cart-icon-483x512-8zkr80t0.png" alt="" />
                        <h2>Cart</h2>
                    </div>
                </div>
           </div>
      )
}
export default Navbar