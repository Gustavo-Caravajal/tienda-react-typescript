import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer-info'>
                <p className='footer-text'>Hecho con</p>
                <a href="https://react.dev/" target='_blank'>
                    <img className='technologies' src="/icons/react.png" alt="react js" draggable={false} />
                </a>
                <a href="https://www.typescriptlang.org/" target='_blank'>
                    <img className='technologies' src="/icons/typescript.png" alt="typescript" draggable={false} />
                </a>
                <a href="https://developer.mozilla.org/es/docs/Web/CSS" target='_blank'>
                    <img className='technologies' src="/icons/css.png" alt="css" draggable={false} />
                </a>
            </div>
            <div className='footer-buildt-info'>
                <div className='buildt'>
                    <p className='footer-text'>Código fuente en</p>
                    <a href="https://github.com/Gustavo-Caravajal/tienda-react-typescript" target='_blank'>
                        <img className='technologies' src="/icons/github.png" alt="github" draggable={false} />
                    </a>
                </div>
                <div className='buildt'>
                    <p className='footer-text'>Aplicación desplegada en</p>
                    <a href="https://vercel.com/" target='_blank'>
                        <img className='technologies' src="/icons/vercel.png" alt="vercel" draggable={false} />
                    </a>
                </div>
            </div>
            <div className='footer-info'>
                <p className='footer-text'>© 2026 Gustavo Caravajal. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}