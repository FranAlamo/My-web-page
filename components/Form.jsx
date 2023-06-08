import React from "react";
import "../components/Form.css";

import { useForm, ValidationError } from "@formspree/react";
function MessageForm() {
  const [state, handleSubmit] = useForm("xrgvwada");
  if (state.succeeded) {
    return (
      <p className="message-return">
        Thank you! The form has been sent successfully. I will contact you soon
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} id="all-form">
      <label htmlFor="email" placeholder="*email"></label>
      <input id="email" placeholder="*email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="*message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} id="button-contact">
        Send Email
      </button>
    </form>
  );
}
function App() {
  return <MessageForm />;
}
export default App;
