import { toast } from 'react-toastify';

const TestToast = () => {
    const handleClick = () => {
        toast.success("Toastify is working!");
    };

    return (
        <button onClick={handleClick} className="btn">
            Test Toast
        </button>
    );
};

export default TestToast;
