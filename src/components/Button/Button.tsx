import './Button.css'

type ButtonProps = {
    texto: string;
    color: string
}

export const Button = ({ texto, color }: ButtonProps) => {

    return (
        <button className='item-button' style={{color: color}}>
            {texto}
        </button>
    )
}