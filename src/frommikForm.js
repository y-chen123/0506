import { Input } from "antd";
import { useFormik } from "formik";

export default function fromikForm(){
    const formik = useFormik({
        initialValues: {
            name:"",
            email:""
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Your name</label>
            <Input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="email">Your email</label>
            <Input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            <button type="submit">submit</button>
        </form>
    );
};