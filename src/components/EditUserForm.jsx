import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUsr);

    const {register, errors, handleSubmit, setValue} = useForm(
        {defaultValues:props.currentUsr});

    const onSubmit = (data,e) => {
       // console.log(data);

       data.id = props.currentUsr.id;

        props.updateUsr(props.currentUsr.id, data);


        e.target.reset();
    }

    setValue('name', props.currentUsr.name);
    setValue('username', props.currentUsr.username);

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
            <button>Edit user</button>
        </form>
    )
}

export default EditUserForm;