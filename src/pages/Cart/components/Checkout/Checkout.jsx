import { useForm } from 'react-hook-form';
import InputHookForm from "@/components/InputHookForm/Input";
import styles from './Checkout.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContext } from '@/contexts/ToastProvider';
import { LoadingTextCommon } from '@/components/LoadingTextCommon/LoadingTextCommon';
import RightBody from '@/pages/Cart/components/Checkout/RightBody';
import { createOrder } from '@/apis/oderService';
import { StepperContext } from '@/contexts/StepperProvider';
import { useNavigate } from 'react-router-dom';

const countriesApi = 'https://countriesnow.space/api/v0.1';

const Checkout = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [townCities, setTownCities] = useState([]);
    const { toast } = useContext(ToastContext);
    const formRef = useRef(null);
    const { setCurrentStep } = useContext(StepperContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await createOrder(data);
            setCurrentStep(3);
            navigate(`/cart?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`);
        } catch (error) {
            toast.error("Error creating order");
        }
    }

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit();
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${countriesApi}/countries/iso`).then(res => {
            setCountries(res.data.data.map((item) => (
                {
                    name: item.name,
                    value: item.name
                }
            )));
            setIsLoading(false);
        }).catch(
            (err) => {
                toast({
                    type: 'error',
                    message: 'Error fetching countries'
                });
                setCountries([]);
                setIsLoading(false);
            }
        )
    }, []);

    useEffect(() => {
        if (!watch('country')) {
            setStates([]);
            return;
        }

        setIsLoading(true);
        axios.post(`${countriesApi}/countries/states`, {
            country: watch('country')
        }).then(res => {
            setStates(res.data.data.states.map((item) => (
                {
                    name: item.name,
                    value: item.name
                }
            )));
            setIsLoading(false);
        }).catch(
            (err) => {
                toast({
                    type: 'error',
                    message: 'Error fetching states'
                });
                setStates([]);
                setIsLoading(false);
            }
        )
    }, [watch('country')]);

    useEffect(() => {
        if (!watch('cities')) {
            setTownCities([]);
            return;
        }

        setIsLoading(true);
        axios.post(`${countriesApi}/countries/state/cities`, {
            country: watch('country'),
            state: watch('cities')
        }).then(res => {
            setTownCities(res.data.data.map((item) => (
                {
                    name: item,
                    value: item
                }
            )));
            setIsLoading(false);
        }).catch(
            (err) => {
                toast({
                    type: 'error',
                    message: 'Error fetching town cities'
                });
                setTownCities([]);
                setIsLoading(false);
            }
        )
    }, [watch('cities')]);

    console.log(errors);

    return (
        <div className={styles.checkout}>
            <div className={styles.left}>
                <div className={styles.couponBox}>
                    <p>Have a coupon? <span>Click here to enter</span></p>
                </div>
                <h3>Billing details</h3>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <InputHookForm label="First Name" type="text" placeholder="First Name" isRequired
                            register={register('firstName', { required: true, maxLength: 25 })}
                            isError={errors.firstName}
                        />
                        <InputHookForm label="Last Name" type="text" placeholder="Last Name" isRequired
                            register={register('lastName', { required: true, maxLength: 35 })}
                            isError={errors.lastName}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Company Name (optional)" type="text" placeholder="Company Name"
                            register={register('companyName')}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Country / Region" isRequired type="select"
                            dataOptions={countries}
                            register={register('country', { required: true })}
                            isError={errors.country}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="State / County" type="select" isRequired
                            dataOptions={states}
                            register={register('cities', { required: true })}
                            isError={errors.cities}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Town / City" type="select" isRequired
                            dataOptions={townCities}
                            register={register('state', { required: true })}
                            isError={errors.state}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Street Address" isRequired type="text" placeholder="Street Address"
                            register={register('street', { required: true })}
                            isError={errors.street}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm isShowLabel={false} label="Apartment, suite, etc. (optional)" type="text" placeholder="Apartment, suite, etc. (optional)"
                            register={register('apartment')}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Phone" type="text" isRequired placeholder="Phone"
                            register={register('phone', { required: true })}
                            isError={errors.phone}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="ZIP code" type="text" isRequired placeholder="ZIP code"
                            register={register('zipCode', { required: true })}
                            isError={errors.zipCode}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Email Address" type="text" isRequired placeholder="Email Address"
                            register={register('email', { required: true })}
                            isError={errors.email}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <InputHookForm label="Order notes (optional)" type="textarea" placeholder="Notes about your order, e.g. special notes for delivery."
                            register={register('orderNotes')}
                        />
                    </div>
                </form>
            </div>
            <div className={styles.right}>
                <RightBody handleExternalSubmit={handleExternalSubmit} />
            </div>
            {isLoading && (
                <div className={styles.loading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default Checkout;