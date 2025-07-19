import { addProductToCart } from "@/apis/cartService";

export const handleAddProductToCartCommon = (
    userId,
    setIsOpen,
    setType,
    selectedSize,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductsCart,
    toast
) => {


    if (!userId) {
        setIsOpen(true);
        setType('login');
        toast.warning('Please login to add product to cart!');
        return;
    }

    if (!selectedSize) {
        toast.warning('Please choose the size!');
        return;
    }

    const data = {
        userId,
        productId,
        quantity,
        size: selectedSize
    };

    setIsLoading(true);
    addProductToCart(data).then((res) => {
        setIsOpen(true);
        setType('cart');
        // toast.success(`Add "${details.name}" successfully!`);
        handleGetListProductsCart(userId, 'cart');
        setIsLoading(false);
    }).catch((error) => {
        console.log(error);
        toast.error(`Add "${details.name}" failed!`);
        setIsLoading(false);
    });
}


export const handleTotalPrice = (listProducts) => {
    return listProducts.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}