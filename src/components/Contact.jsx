import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [popupContent, setPopupContent] = useState(null);

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/pamqwpna", userInfo);
      setPopupContent("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      setPopupContent("Failed to send the message. Please try again.");
    }
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  // Styles
  const containerStyle = {
    maxWidth: "1440px",
    margin: "10px auto 64px auto",
    padding: "0 16px 0 16px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: 0,
  };

  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#22d3ee", // cyan-400
    marginBottom: "8px",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#ec4899", // pink-500
    marginTop: 0,
  };

  const formWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "32px",
    backgroundColor: "#09032b",
    border: "2px solid #22d3ee", // cyan-300
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const formTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "24px",
    color: "#db2777", // pink-600
    textAlign: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#4b5563", // gray-700
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db", // gray-300
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#22d3ee",
    boxShadow: "0 0 0 2px #22d3ee",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    minHeight: "120px",
  };

  const errorTextStyle = {
    color: "#ef4444", // red-500
    fontSize: "0.875rem",
    marginTop: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px 0",
    background: "linear-gradient(to right, #06b6d4, #3b82f6)", // cyan-500 to blue-500
    color: "white",
    fontWeight: "600",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
    fontSize: "1rem",
  };

  const buttonHoverStyle = {
    background: "linear-gradient(to right, #0e7490, #2563eb)", // cyan-600 to blue-600
  };

  const popupOverlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  };

  const popupContentStyle = {
    backgroundColor: "#09032b",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 15px rgba(0,0,0,0.25)",
    width: "320px",
    textAlign: "center",
  };

  const popupTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#22d3ee",
    marginBottom: "12px",
  };

  const popupTextStyle = {
    color: "#374151", // gray-700
    fontSize: "1rem",
  };

  const popupButtonStyle = {
    marginTop: "24px",
    padding: "8px 24px",
    backgroundColor: "#db2777", // pink-500
    color: "white",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  };

  const popupButtonHoverStyle = {
    backgroundColor: "#be185d", // pink-600
  };

  // Handle focus styling manually (since inline styles don't support :focus)
  const [focusedInput, setFocusedInput] = useState(null);
  const [isPopupBtnHovered, setIsPopupBtnHovered] = useState(false);
  const [isSubmitBtnHovered, setIsSubmitBtnHovered] = useState(false);

  return (
    <>
      <div style={containerStyle} name="contact">
        <div style={headerStyle}>
          <h1 style={titleStyle}>Contact Me</h1>
          <p style={subtitleStyle}>Please fill out the form below to get in touch.</p>
        </div>

        <div style={formWrapperStyle}>
          <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <h2 style={formTitleStyle}>Send Your Message</h2>

            {/* Name */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                style={{
                  ...inputStyle,
                  ...(focusedInput === "name" ? inputFocusStyle : {}),
                }}
                {...register("name", { required: "Name is required" })}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
              />
              {errors.name && <p style={errorTextStyle}>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                style={{
                  ...inputStyle,
                  ...(focusedInput === "email" ? inputFocusStyle : {}),
                }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
              {errors.email && <p style={errorTextStyle}>{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div style={{ marginBottom: "24px" }}>
              <label style={labelStyle} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows="5"
                style={{
                  ...textareaStyle,
                  ...(focusedInput === "message" ? inputFocusStyle : {}),
                }}
                {...register("message", { required: "Message is required" })}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
              />
              {errors.message && <p style={errorTextStyle}>{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={isSubmitBtnHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
                onMouseEnter={() => setIsSubmitBtnHovered(true)}
                onMouseLeave={() => setIsSubmitBtnHovered(false)}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {popupContent && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <h2 style={popupTitleStyle}>Notification</h2>
            <p style={popupTextStyle}>{popupContent}</p>
            <button
              onClick={closePopup}
              style={isPopupBtnHovered ? { ...popupButtonStyle, ...popupButtonHoverStyle } : popupButtonStyle}
              onMouseEnter={() => setIsPopupBtnHovered(true)}
              onMouseLeave={() => setIsPopupBtnHovered(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
