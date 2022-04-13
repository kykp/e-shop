function Goods(props) {

    const  {
      mainId, 
      displayName, 
      displayDescription, 
      price, 
      displayType, 
      addToBasket = Function.prototype,
    } = props;
    const {regularPrice} = price;

    return <div className="card">
    <div className="card-image">
      <img src={props.displayAssets[0].background} alt={displayName}/>
    </div>
    <span className="card-title">{displayName}</span>
    <div className="card-content">
      <p>{displayDescription || displayType}</p>
    </div>
    <div className="card-action">
      <span>{regularPrice} rub</span>
      <button 
      className="btn blue lighten-2" 
      onClick={() => addToBasket({displayName,regularPrice, mainId})}
      >Buy</button> 
    </div>
  </div>
}

export {Goods}