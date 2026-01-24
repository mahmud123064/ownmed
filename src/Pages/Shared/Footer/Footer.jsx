import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center pb-5 bg-secondary">
            {/* Heading Started */}
            <h1 className="pt-[50px] text-primary text-5xl mb-16 font-bold">
                OwnMed
            </h1>
            <div className="relative mb-16 ">
                <hr className="w-72 -mt-12 border border-primary mx-auto " />
                <p className="absolute -top-2  text-primary left-1/2 -translate-x-1/2 text-7xl rotate-12 ">
                    "
                </p>
            </div>
            <p className="font1 text-lg mb-7  text-white">
                Subscribe to our mailing list
            </p>
            {/* Heading Finish */}

            <form className="relative mx-auto px-5 mb-20 w-full sm:w-96 md:w-[500px] ">
                {/* Subscribe Email */}
                <input
                    className="pl-6 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-primary input rounded-full text-white"
                    type="email"
                    placeholder="Enter Your Email"
                />
                {/* Subscribe button */}
                <button
                    className="absolute -top-4 right-5 md:-right-5 drop-shadow-md transition-all duration-200 border-2 border-primary px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-primary hover:bg-primary/80 "
                    type="submit"
                >
                    Subscription
                </button>
            </form>

            <div className="pb-[50px] mx-auto MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-white">
                <ul>
                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>
                    <Link to="/aboutFlexflow">
                        <li>About OwnMed</li>
                    </Link>
                    <Link to="/privacy">
                        <li>Privacy and policy</li>
                    </Link>
                </ul>

                <ul>
                    <Link to="/termsandcondition">
                        <li>Terms and conditions</li>
                    </Link>
                    <Link to="/aboutus">
                        <li>About Us</li>
                    </Link>
                    <Link to="/legalnotice">
                        <li>Legal Notice</li>
                    </Link>
                </ul>
                <ul>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                    <Link to="/contactus">
                        <li>Contact Us</li>
                    </Link>
                </ul>
                <ul>
                    <h2>Find Us On</h2>
                    <div className="flex gap-3 my-auto justify-center ">
                        <Link to="https://twitter.com/" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>

                        <Link to="https://youtube.com" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>

                        <Link to="https://facebook.com" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-white rounded-lg text-center"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </ul>
            </div>
            <hr className="border-primary mb-4" />

            <p className="mb-4 textShadow text-white">
                Copyright © {new Date().getFullYear()} || OwnMed
            </p>
        </div>
    );
};

export default Footer;
