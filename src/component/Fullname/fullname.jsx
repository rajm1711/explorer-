const Fullname = ({element}) => {
    let Fullname = `${element.firstName} ${element.lastName} ${element.maidenName}`;
    return(
        <p>
            {
                Fullname
            }
        </p>
           
    )
}

export default Fullname;