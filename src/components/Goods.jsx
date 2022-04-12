function Goods(props) {

    const  {displayName, displayDescription, price, displayType} = props;

    return <div className="card">
    <div className="card-image">
      <img src={props.displayAssets[0].background} alt={displayName}/>
    </div>
    <span className="card-title">{displayName}</span>
    <div className="card-content">
      <p>{displayDescription || displayType}</p>
    </div>
    <div className="card-action">
      <span>{price.regularPrice} rub</span>
      <button>Buy</button>
    </div>
  </div>
}

export {Goods}