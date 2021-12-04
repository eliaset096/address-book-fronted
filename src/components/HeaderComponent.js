import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="/contacts" className="navbar-brand">
                            Libreta de Contatos
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
