import { useFormik } from "formik";

export default function SimpleForm() {
    return(
        <form>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" />
            <button type="submit">submit</button>
        </form>
    );
};