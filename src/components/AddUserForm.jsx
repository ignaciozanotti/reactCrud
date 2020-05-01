import React from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e) => {
       // console.log(data);

        props.addUsr(data);

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor=""></label>
            <input type="text"
            name="name"
            ref={
                register({
                    required: {value: true, message:'campo requerido'}
                })
            }
            autoComplete="off"
            />
            <div> {errors?.name?.message}</div>
            <label htmlFor=""></label>
            <input type="text"
            name="username"
            autoComplete="off"
            ref={
                register({
                    required: {value: true, message:'campo requerido'}
                })
            }
            />
            <div> {errors?.username?.message}</div>
            <button>Add user</button>
        </form>
    )
}

export default AddUserForm;