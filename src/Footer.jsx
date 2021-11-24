function Footer() {
  
    let date = new Date();
    let year = date.getFullYear();
    let footer = `Copyright © ${year}`;

    return (
        <footer className="-fade-in bg-s-t1a2 text-center _p-16px">
            <p>{footer}</p>
        </footer>
    )
}

export default Footer
