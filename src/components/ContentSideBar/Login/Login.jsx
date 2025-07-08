import InputCommon from '@/components/InputCommon/InputCommon';
import styles from './Login.module.scss';
import Button from '@/components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            cfmpassword: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is require"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is require"),
            cfmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
        }),
        onSubmit: (values) => {

        }
    });

    const handleToggleForm = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    }

    return <div className={styles.container}>
        <div className={styles.title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

        <form onSubmit={formik.handleSubmit}>
            <InputCommon
                id="email"
                label={'Email'}
                type={'text'}
                isRequired
                formik={formik}
            />
            <InputCommon
                id="password"
                label={'Password'}
                type={'password'}
                isRequired
                formik={formik}
            />
            {isRegister && (
                <InputCommon
                    id="cfmpassword"
                    label={'Confirm password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />
            )}
            {!isRegister && (
                <div className={styles.boxRememberMe}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
            )}

            <Button 
                content={isRegister ? 'Signup' : 'Login'} 
                type='submit' 
                onClick={() => toast.success('Login succes')}
            />
        </form>
        <Button
            content={isRegister ? "Already have an account?" : "Don't have an account?"}
            isPrimary={false}
            style={{ marginTop: "10px" }}
            onClick={handleToggleForm}
        />

        {!isRegister && (
            <div className={styles.lostPW}>Lost your password?</div>
        )}
    </div>
};

export default Login;