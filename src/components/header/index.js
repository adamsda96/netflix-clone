import React from 'react'
import {Container, Title} from './styles/Header'

export default function Header({children, ...restProps}) {
    return(
        <div {...restProps}>
        {children}
        </div>
    )
}

Header.Container = function HeaderContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Title= function HeaderTitel({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}