import React from 'react'
import './css/HomePage.css'

const product = () => {
  return (
    <div>
    <nav >
        <ul class="menu_left">
            <li>
                <a href="#"> 
                    <div class="logo">
                        <img src="https://i.ibb.co/zxVxxrR/logosketchuw.png" title="" alt="" width="124" />
                    </div>
                </a>
            </li>

                
            <li>
                <a href="#">NEW ARRIRAL</a>
            </li>


            <li>
                <a href="#">SHOP</a>
                
            </li>


            <li>
                <a href="#">FOOTWEAR</a>
                <ul class="drop-menu">
                    <li><a href="#">View All</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Sneakers</a></li>
                </ul>
            </li>


            <li>
                <a href="#">MEN</a>
            </li>


            <li>
                <a href="#">WOMEN</a>
            </li>


        </ul>
        


        <ul class="menu_right">
            <li>
                <a href="#">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                      </svg>

                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                    </svg>
                      
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 1 1-2 0V7H6a1 1 0 0 0-1 1L4 19.7A2 2 0 0 0 6 22h12c1 0 2-1 2-2.2L19 8c0-.5-.5-.9-1-.9h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 1 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
                    </svg>
                      
                </a>
            </li>

        </ul>
    </nav>
    </div>
  )
}

export default product