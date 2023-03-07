import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Notify = (mode,textStatique='',textDynamique) => {
    switch (mode) {
        case "del" :
            textStatique = {prefix : " the product :", suffix : "is now deleted"};
            break;
        case "add" :
            textStatique = {prefix : " the noveltie :", suffix : "has been add to the store"};
        break;
        case "price" :
            textStatique = {prefix : " the product :", suffix : "has now a new price"};
        break;
        case "qty" :
            textStatique = {prefix : " the product :", suffix : "has now a new quantity"};
        break;
        default:
            textStatique = {prefix : " unknow operation"};
    }
    return toast.success(textStatique.prefix + textDynamique + textStatique.suffix,
    {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }
    )

};

export default Notify;