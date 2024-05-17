const Address = ({element}) => {
    let Address = `${element.address.address} ${element.address.city} ${element.address.state}`;
    return(
        <p>     
            {
                Address
            }
        </p>
    )
}

export default Address;