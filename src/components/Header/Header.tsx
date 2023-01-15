type HeaderProps = {
    title?: string, //? em TS significa que o parâmetro é opcional
};

const Header = (props: HeaderProps)=>{
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;