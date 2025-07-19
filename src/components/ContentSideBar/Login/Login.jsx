import InputCommon from '@/components/InputCommon/InputCommon';
import styles from './Login.module.scss';
import Button from '@/components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/storeProvider';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsOpen, handleGetListProductsCart } = useContext(SidebarContext);
    const { setUserId } = useContext(StoreContext);

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
        onSubmit: async (values) => {
            if (isLoading) return;

            const { email: username, password } = values;

            setIsLoading(true);
            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }

            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        const { id, token, refreshToken} = res.data;

                        Cookies.set('userId', id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);

                        toast.success("Login success");
                        setUserId(id);
                        setIsOpen(false);
                        setIsLoading(false);
                        handleGetListProductsCart(id, 'cart');
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            setIsLoading(false);
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
                content={isLoading ? "Loading..." : isRegister ? 'Signup' : 'Login'}
                style={{ height: "40px" }}
                disabled={isLoading}
                type='submit'
            />
        </form>
        <Button
            content={isRegister ? "Already have an account?" : "Don't have an account?"}
            isPrimary={false}
            style={{ marginTop: "10px", height: "40px" }}
            onClick={handleToggleForm}
        />

        {!isRegister && (
            <div className={styles.lostPW}>Lost your password?</div>
        )}
    </div>
};

export default Login;