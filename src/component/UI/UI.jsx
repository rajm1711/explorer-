import "./UI.css"
import Id from "../ID/id";
import Bdate from "../DOB/birthdate";
import User from "../Username/username";
import Fullname from "../Fullname/fullname";
import Email from "../Email/email";
import Contact from "../Contact/contact";
import Address from "../Address/address";
import Image from "../image/image";

const UI = ({ element }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="top d-flex">
                        <div className="img d-flex">
                            <Image element={element} />
                        </div>
                        <div className="username">
                            <p>Username :<User element={element} /></p>
                            <p className="mail">Email :<Email element={element} /></p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div>
                            <p className="padding">Full Name :<Fullname element={element} /></p>
                            <p className="padding">DOB : <Bdate element={element} /></p>
                            <p className="padding">Contact :<Contact element={element} /></p>
                            <p className="padding">Address :<Address element={element} /></p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default UI;