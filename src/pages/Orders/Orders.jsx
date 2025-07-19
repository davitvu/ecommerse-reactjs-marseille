import { getDetailOrder } from "@/apis/oderService";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Orders = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const totalAmount = params.get('totalAmount');

    const qrCodeImg = `https://qr.sepay.vn/img?acc=VQRQADJKG6657&bank=MBBank&amount=${totalAmount}&des=${id}`

    const handleGetDetailOrder = async () => {
        try {
            const res = await getDetailOrder(id);

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetDetailOrder();
    }, [id]);

    return (
        <div>
            <h1>Orders</h1>
        </div>
    )
}

export default Orders;