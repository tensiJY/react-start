import Button from '../Button/Button';

const Modal = (props) => {
    //console.log(props);
    const isShowHandler = (event) => {
        event.preventDefault();
        //setIsShow((prev) => !prev);
        props.onValidModalInit();
    };

    return (
        <>
            <div>
                <h1>Invalid input</h1>
            </div>

            <div>{props.text}</div>

            <div>
                <Button type="button" onClick={isShowHandler}>
                    Okay
                </Button>
            </div>
        </>
    );
};

export default Modal;
