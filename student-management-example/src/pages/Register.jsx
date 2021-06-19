import React from 'react'
import { useForm } from 'react-hook-form'

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm({
        defaultValues: {
            email: "",
            name: "",
            nation: "vietnam",
            hobby: "other",
            gender: "1",
            password: "",
            confirmPassword: "",
        }
    })
    const onSubmit = data => console.log(data)

    const handleClassName = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`

    const ErrorMessage = ({ name }) => {
        if (errors[name]) {
            return <div className="invalid-feedback">
                {errors[name].message}
            </div>
        }
        return null
    }

    return (
        <div>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 form-floating">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            validate: {
                                email: v => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    .test(v) || 'Email invalid'
                            }
                        })}
                        placeholder="example@gmail.com"
                        className={handleClassName('email')} />
                    <label htmlFor="email">Email address</label>
                    <ErrorMessage name="email" />
                </div>
                <div className="mb-3 form-floating">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nam Tran"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            minLength: {
                                value: 5,
                                message: ' Name is 5-160 Letter'
                            },
                            maxLength: {
                                value: 160,
                                message: ' Name is 2-160 Letter'
                            }
                        })}
                        className={handleClassName('name')} />
                    <label htmlFor="name">Name</label>
                    <ErrorMessage name="name" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="nation" className="form-radio-label">
                        Nation
                    </label>
                    <div className="form-check">
                        <input
                            type="radio"
                            name="nation"
                            id="vietnam"
                            value="vietnam"
                            {...register('nation', {
                                required: {
                                    value: true,
                                    message: 'Nation is required'
                                }
                            })}
                            className={handleClassName('nation', 'form-check-input')} />
                        <label
                            htmlFor="vietnam"
                            className="form-check-label">
                            Việt Nam
                        </label>

                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            name="nation"
                            value="aboard"
                            id="aboard"
                            {...register('nation', {
                                required: {
                                    value: true,
                                    message: 'Nation is required'
                                }
                            })}
                            className={handleClassName('nation', 'form-check-input')} />
                        <label
                            htmlFor="aboard"
                            className="form-check-label">
                            Aboard
                        </label>
                        <ErrorMessage name="nation" />

                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="hobby" className="form-radio-label">
                        Hobby
                    </label>
                    <div className="form-check">
                        <input type="checkbox"
                            name="hobby"
                            {...register('hobby', {
                                required: {
                                    value: true,
                                    message: 'This radio is required'
                                }
                            })}
                            className={handleClassName('hobby', 'form-check-input')}
                            value="gym"
                            id="gym" />
                        <label
                            className="form-check-label"
                            htmlFor="gym" >Gym</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                            name="hobby"
                            {...register('hobby', {
                                required: {
                                    value: true,
                                    message: 'This radio is required'
                                }
                            })}
                            className={handleClassName('hobby', 'form-check-input')}
                            value="other"
                            id="other" />
                        <label
                            className="form-check-label"
                            htmlFor="other" >Other</label>
                        <ErrorMessage name="hobby" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-select-label">Gender</label>

                    <select
                        {...register('gender', {
                            required: {
                                value: true,
                                message: 'Gender is required'
                            }
                        })}
                        name="gender"
                        id="gender"
                        className={handleClassName('gender', 'form-select')}>
                        <option value="">Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                    <ErrorMessage name="gender" />
                </div>
                <div className="mb-3 form-floating">
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password has 6 to 160 letters'
                            },
                            maxLength: {
                                value: 160,
                                message: 'Password has 6 to 160 letters'
                            },
                        })}
                        name="password"
                        placeholder="***"
                        className={handleClassName('password')} />
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name="password" />
                </div>
                <div className="mb-3 form-floating">
                    <input
                        {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password has 6 to 160 letters'
                            },
                            maxLength: {
                                value: 160,
                                message: 'Password has 6 to 160 letters'
                            },
                            validate: {
                                samePassword: v => v === getValues('password')
                                    || 'Confirm password is incorrect'
                            }
                        })}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="***"
                        className={handleClassName('confirmPassword')} />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <ErrorMessage name="confirmPassword" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Register
