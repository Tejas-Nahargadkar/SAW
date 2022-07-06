import React from 'react'

export default function LinkDropDown(props) {
    let {label,links,style} = props;
    return (
        <div className="dropdown" >
            <a style={style} className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
               {label}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {links.map(({link,title},index)=> <li key={index}><a style={style} className="dropdown-item" href={link}>{title}</a></li>)}
            </ul>
        </div>
    )
}
