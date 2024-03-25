import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Props } from '@type/common';
import { Link } from '@type/common';
import React from 'react';
import { links } from "@type/links";

export const Header: React.FunctionComponent<Props> = (props) => {
    const [navs] = useState<Link[]>(links)

    return (
          <>
              <div>
                  <h1 className='h1'>{props.title}</h1>
              </div>
              <ul className='flex justify-center items-center gap-8'>
                  {navs.map((nav, index) => (
                      <li key={index} className='li'>
                          <NavLink
                              to={nav.link}
                              className='navs'>
                              {nav.title}
                          </NavLink>
                      </li>
                  ))}
              </ul>
          </>
    );
}