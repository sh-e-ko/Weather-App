import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import style from './Form.module.css'



export default function Form({ getData })
{
    const addFormik = useFormik({
        validateOnMount: true,

        initialValues: {
            city: "",
            country: "",

        },
        validationSchema: object({
            city: Yup.string().required("city is required"),
            country: Yup.string().required("country is required"),
        }),

        onSubmit: (values) =>
        {
            getData(values);
            addFormik.resetForm();
        }
    })
    return (
        <form>
            <div className={style.Form}>

                <div className={style.input}>
                    <input type="text" placeholder='Enter Your city' {...addFormik.getFieldProps("city")} />
                    {addFormik.errors.city && addFormik.touched.city && <span>{addFormik.errors.city}</span>}
                </div>
                <div className={style.input}>
                    <input type="text" placeholder='Enter Your country' {...addFormik.getFieldProps("country")} />
                    {addFormik.errors.country && addFormik.touched.country && <span>{addFormik.errors.country}</span>}
                </div>
                <div>
                    <button
                        className={style.btn}
                        onClick={addFormik.handleSubmit}
                        disabled={!addFormik.isValid}
                        type="submit">
                        Add
                    </button>
                </div>

            </div>
        </form>
    )
}
