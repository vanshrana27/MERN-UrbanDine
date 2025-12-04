import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'; // correct icon used in JSX
import { Link, useNavigate } from 'react-router-dom';        // import Link

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    // watch countdown state and redirect when it reaches 0
    return () => clearInterval(intervalId);
  }, []);

  // redirect when countdown hits 0
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} second{countdown !== 1 ? 's' : ''}...</h1>
        <Link to={"/"}>Back to Home Now<span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
    </section>
  );
};

export default Success;
