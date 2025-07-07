import InputCommon from '@/components/InputCommon/InputCommon';
import styles from './Login.module.scss';
import Button from '@/components/Button/Button';

const Login = () => {
    return <div className={styles.container}>
        <div className={styles.title}>SIGN IN</div>

        <InputCommon label={'Email'} type={'text'} isRequired />
        <InputCommon label={'Password'} type={'password'} isRequired />

        <div className={styles.boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
        </div>

        <Button content={"Login"} />

        <div className={styles.lostPW}>Lost your password?</div>
    </div>
};

export default Login;