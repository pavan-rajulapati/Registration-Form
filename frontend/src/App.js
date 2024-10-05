import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';  
import axios from 'axios';                

const App = () => {

  const [signupData, setSignupData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData, [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signupData.userName) {
      toast.error("Username is required");
      return;
    }
    if (!signupData.email || !validateEmail(signupData.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!signupData.password || signupData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup', signupData);

      if (response.status === 200) {
        toast.success("Account created successfully!");
        setSignupData({ userName: '', email: '', password: '' });
      }
    } catch (error) {
      toast.error("Error occurred while creating account");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div>
      <div className="signup">
        <div className="container">
          <div>
            <img src="authentication.png" alt="signup" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <span>Create Account</span>
              <div>
                <label>
                  Username
                  <input
                    type="text"
                    value={signupData.userName}
                    name="userName"
                    onChange={handleInput}
                    placeholder="Rohit Sharma"
                  />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <input
                    type="text"
                    value={signupData.email}
                    name="email"
                    onChange={handleInput}
                    placeholder="rohit123@gmail.com"
                  />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input
                    type="password"
                    value={signupData.password}
                    name="password"
                    onChange={handleInput}
                  />
                </label>
              </div>
              <div className="Btn">
                <button type="submit">Signup Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default App;
