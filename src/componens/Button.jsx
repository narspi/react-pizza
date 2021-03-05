import classNames from 'classnames';

const Button = (props) => {
    return (
        <button
            className={classNames(
                'button',
                {
                'button--cart': props.test
                }
            )}
        >
        {props.children}
        </button>
    );
}

export default Button;